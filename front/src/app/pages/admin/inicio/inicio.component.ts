import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  titulo :any

  constructor(
    private authService: AuthService,
    
  ) {
    
  }
  ngOnInit(): void {
    this.authService.getUserData().subscribe((data: any) => {
      this.titulo = data.nombre;
    }
  )
  }

  
}
