import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
 
  constructor(private http: HttpClient ) { }


  private apiUrl = 'http://localhost:8081/movimientos';
  
 
  //get all
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`); 
  }

  getAllVentas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ventas`); 
  }

  getAllVentasMoto(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ventas/motos`); 
  }

  // get by id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
    
  }

  // create
  create(Entity: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, Entity)
      
  }

  // create
  createVentaMoto(Entity: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/venta/motos`, Entity)
      
  }

  // update
  update(id: number, Entity: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, Entity)

  }

  // update
  updateVentaMoto(id: number, Entity: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/venta/motos/${id}`, Entity)

  }

  // update
  updateVentaRepuestos(id: number, Entity: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/repuestos/${id}`, Entity);

  }

  // delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}

