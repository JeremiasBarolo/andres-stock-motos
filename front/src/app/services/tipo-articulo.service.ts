import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TipoArticuloService {

  
  constructor(private http: HttpClient, private messageService: MessageService ) { }
  // appSettings: any = AppSettings.readAppSettings().ValeCaffarato;
  // private apiUrl = `${this.appSettings.url_api}/bancos`;

  private apiUrl = 'http://localhost:8081/tipo_articulo';
  
 
  //get all
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`); 
  }

  // get by id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
    
  }

  // create
  create(Entity: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, Entity)
      
  }

  // update
  update(id: number, Entity: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, Entity)

  }

  delete(id: number): Observable<any> {
    if (id >= 1 && id <= 4) {
      
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Este ID es necesario para el funcionamiento del sistema y no puede ser eliminado.',
        life: 10000
      });
      return of(null);  
    } else {
      return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
  }
}
