import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient ) { }


  private apiUrl = 'http://localhost:8081/pedidos';
  
 
  //get all
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`); 
  }

  getAllPendientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pendientes`); 
  }

  // get by id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
    
  }

   // get by id
   getStockPedido(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stock/${id}`)
    
  }

  // create
  create(Entity: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, Entity)
      
  }

  // update
  update(id: number, Entity: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, Entity)

  }

  SumarCantidades(id: number, Entity: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/SumarCantidades/${id}`, Entity)

  }

  updatePedidoStock(id: number, Entity: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/stock/${id}`, Entity)

  }

  // delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}


