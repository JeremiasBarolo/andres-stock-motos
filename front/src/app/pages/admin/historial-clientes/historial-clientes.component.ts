import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { MovimientosService } from '../../../services/movimientos.service';

@Component({
  selector: 'app-historial-clientes',
  templateUrl: './historial-clientes.component.html',
  styleUrl: './historial-clientes.component.css'
})
export class HistorialClientesComponent implements OnInit, OnDestroy {

  products: any[] = [];
  columns: any[] = [];
  showTable = false;
  showDropdownDialog = false;
  movements: any[] = [];
  clientes: any[] = [];
  selectedClient: any;

  private destroy$ = new Subject<void>();

  constructor( 
    private movimientosService: MovimientosService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
  ){

  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  ngOnInit(): void {

    this.movimientosService.getAllHistorial().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.columns = [
        { field: 'id', header: 'ID' },
        { field: 'cliente', header: 'Cliente' },
        { field: 'TipoMovimiento', header: 'Tipo Movimiento' },
        { field: 'subtotal', header: 'Monto Final' },
        { field: 'FechaRealizacion', header: 'Fecha Realizacion' },
        { field: 'hora', header: 'Hora' },
        { field: 'usuario', header: 'Recepcionista' },
      ];

      let dataSorted = data.sort((a, b) => b.id - a.id)
      dataSorted.map((data)=>{
        this.products.push({
          id: data.id,
          cliente: data.cliente,
          TipoMovimiento: data.TipoMovimiento,
          subtotal: data.subtotal,
          FechaRealizacion: data.FechaRealizacion,
          hora: data.hora,
          usuario: data.usuario,
          tipoMovimientoId: data.tipoMovimientoId,
          usuarioId: data.usuarioId,
          personaId: data.personaId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt
        })

        this.clientes.push({
          id: data.personaId,
          nombre: data.cliente
        })
      })
    })

   
  }
 

  searchClientMovements() {
    if (this.selectedClient) {
      this.movements = this.products.filter(movement => movement.personaId === this.selectedClient.id);
      this.showTable = true;
    }
  }
  
  showClientDropdown() {
    this.showDropdownDialog = true;
  }

  onClientChange(event: any) {
    this.selectedClient = event.value;
    this.showDropdownDialog = false;
    this.searchClientMovements();
  }
 

  
  
  

}
