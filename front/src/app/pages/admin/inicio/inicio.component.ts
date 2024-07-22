import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { PersonasService } from '../../../services/personas.service';
import { Subject, takeUntil } from 'rxjs';
import { MovimientosService } from '../../../services/movimientos.service';
import { PedidosService } from '../../../services/pedidos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit, OnDestroy {
  titulo :any
  isAdmin: any;
  recaudacionTotal:any
  ventasTotal:any
  pedidosPendientes:any
  stockDisponible:any
  empleados:any[] = []
  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private personasService: PersonasService,
    private movimientosService: MovimientosService,
    private pedidosService: PedidosService
    
  ) {
    
  }
  ngOnInit(): void {
    this.isAdmin = this.authService.isAllowed();
    this.authService.getUserData().subscribe((data: any) => {
      this.titulo = data.nombre;
    })

    this.personasService.getMejoresEmpleados()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.empleados = data.sort((a, b) => b.ventas - a.ventas);
    });

    this.movimientosService.getAllRecaudacion()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      
      
      this.recaudacionTotal = data.recaudacion
      this.ventasTotal = data.cantidad
    });

    this.pedidosService.getAllPendientes()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.pedidosPendientes = data
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
