import { Injectable } from '@angular/core';
import { HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse,
    HttpHeaders,
    HttpClient, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private isRefreshing = false;

    constructor(
        private router: Router,
        private messageService: MessageService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('access_token');


        if (token && !req.url.includes('/login')) {
            const headers = new HttpHeaders({
                'Authorization': `Bearer ${token}`
            });
            req = req.clone({ headers });
        }

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => event),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 500) {
                    this.showError("Ocurrió un error inesperado");
                }

                if (error.status === 401 && !this.isRefreshing) {
                    this.isRefreshing = true;
                    this.showError("La sesión expiró");
                    localStorage.removeItem("access_token");
                    this.router.navigate(['/login']).then(() => {
                        // Asegurarse de que no se ejecute más de una vez
                        this.isRefreshing = false;
                    });
                }

                if (error.status === 400) {
                    this.showError(error.error.error);
                    console.log(error);
                }

                return throwError(error);
            })
        );
    }

    showError(error: string) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error!',
            detail: `${error}`,
            life: 10000
          });
    }
}