import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../../../services/stock.service';
import { Subject, takeUntil } from 'rxjs';

import { DatosServicioService } from '../../../services/datos-servicio.service';
import { MovimientosService } from '../../../services/movimientos.service';

@Component({
  selector: 'app-asignar-insumos',
  templateUrl: './asignar-insumos.component.html',
  styleUrls: ['./asignar-insumos.component.css']
})
export class AsignarInsumosComponent implements OnInit {

  cardData: any;
  selectedEntities: any[] = [];
  stock:any
  options: any[] = [];
  private destroy$ = new Subject<void>();
  relaciones: any[] =[]
  

  constructor(
    private router: Router,
    private stockService: StockService,
    private datosServicioService: DatosServicioService,
    private movimientoService: MovimientosService,
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ? +params.get('id')! : null;
      if (id !== null) {
        this.setDatos(id);
      } else {
        console.error('ID no válido');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  setDatos(id: any): void {

    
    

    this.movimientoService.getById(id).pipe(takeUntil(this.destroy$)).subscribe((datos: any) => {
      console.log(datos);
      
      this.cardData = datos;
      const insumos = datos.Servicios.filter((servicio: any) => servicio.tipoArticulo !== 'Servicio');
      


      this.stockService.getAllInsumos().pipe(
        takeUntil(this.destroy$)
      ).subscribe((data: any[]) => {
        
        this.options = data.filter(insumo => insumo.tipoArticulo !== 'Servicio' && !insumos.some((entity: { id: any; }) => entity.id === insumo.id));
        this.options = this.options.map((insumo: any) => ({ ...insumo, nombre: insumo.nombre_articulo }));
      
        this.selectedEntities = insumos.map((insumo: any) => ({
          ...insumo,
          cantidad: insumo.cantidad,
          descripcion: insumo.nombre 
          }));
        });
    });
    

    
}


  selectedEntity(entity: any) {
    this.selectedEntities.push(entity);
    this.options = this.options.filter(item => item.id !== entity.id);
  }

  returnEntities(entity: any) {

    this.options.push(entity);
    this.selectedEntities = this.selectedEntities.filter(item => item.id !== entity.id);
  }

  incrementQuantity(item: any): void {
    if (item.cantidad) {
      item.cantidad++;
    } else {
      item.cantidad = 1;
    }
   
  }

  decrementQuantity(item: any): void {
    if (item.cantidad && item.cantidad > 0) {
      item.cantidad--;
      
    }
  }


  onSubmit(){
    try {
      this.datosServicioService.updateInsumos(this.cardData.id, this.selectedEntities).pipe(takeUntil(this.destroy$)).subscribe(() => {
        setTimeout(() => {
          this.router.navigate(['admin/service']);
        }, 600);
      }, error => {
        console.error('Error al actualizar:', error);
      });
    } catch (error) {
      
    }
  }
}
