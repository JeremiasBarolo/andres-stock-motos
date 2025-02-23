import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup


  constructor(
    private authService: AuthService, 
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {

    sessionStorage.setItem('reloaded', 'false')

    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
   }
  ngOnInit(): void {
   
  }

  login(): void {

    const userData = this.loginForm.value;

    this.authService.login(userData).subscribe(
      (data) => {

        localStorage.setItem('access_token', data.token)
        this.router.navigate(['/admin/inicio'], { queryParams: { login: true } });
        
        
        

        
  
        

        this.messageService.add({
          severity: 'success',
          summary: 'Bienvenido!',
          detail: 'Acabas de iniciar Sesion en SG-Motos',
          life: 10000
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error!',
          detail: `${error.error.message}`,
          life: 10000
        });
        console.error(error);
      }
        
        
    );
  }
}