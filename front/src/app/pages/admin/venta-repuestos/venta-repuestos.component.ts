import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonasService } from '../../../services/personas.service';
import { StockService } from '../../../services/stock.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { MovimientosService } from '../../../services/movimientos.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-venta-repuestos',
  templateUrl: './venta-repuestos.component.html',
  styleUrl: './venta-repuestos.component.css',
  providers: [DatePipe]
})

export class VentaRepuestosComponent implements OnDestroy, OnInit {
  products: any[] = [];
  columns: any[] = [];
  editVisible: boolean = false;
  editEliminar: boolean = false;
  crearVisible: boolean = false;
  cantidadVisible: boolean = false;
  detailModal: boolean = false
  form: FormGroup;
  tipo: any;
  cardData: any;
  id: number = 0;
  proveedores: any[] = [];
  tipoArticulos: any[] = [];
  usuarios: any[] = [];
  clientes: any[] = [];
  seleccionados: any[] = [];
  repuestos: any[] = [];
  usuarioId: any
  usuarioIdEdit: any
  options: any[] = [];
  selectedEntities: any[] = [];


  private destroy$ = new Subject<void>();

  constructor(
    private usuariosService: UsuariosService,
    private personasService: PersonasService,
    private stockService: StockService,
    private movimientosService: MovimientosService,
    private authService: AuthService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      personaId: ['', Validators.required],
      productos: this.fb.array([]) 
    });
  }

  ngOnInit(): void {
    this.authService.getUserData().subscribe((data: any) => {
      this.usuarioId = data.userId
    })

    this.movimientosService.getAllVentas().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.columns = [
        { field: 'id', header: 'ID' },
        { field: 'createdAt', header: 'Fecha de Realizacion' },
        { field: 'cliente', header: 'Cliente' },
        { field: 'usuario', header: 'Recepcionista' },
        { field: 'subtotal', header: 'Subtotal' },
        { field: 'cantArt', header: 'Articulos Vendidos' },
      ];

      data.forEach((data) => {
        this.products.push({
          id: data.id,
          createdAt: this.datePipe.transform(data.createdAt, 'dd/MM/yy'),
          cliente: data.cliente,
          usuario: data.usuario,
          subtotal: data.subtotal,
          usuarioId: data.usuarioId,
          personaId: data.personaId,
          stock: data.stock,
          cantArt: data.stock.length,
          tipoMovimientoId: data.tipoMovimientoId
        });
      });
    });

    this.stockService.getAllStockVentaGeneral().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      let dataReal = data.map((stock)=>{
        return {
          ...stock,
          nombre: stock.nombre_articulo,
          cantidad: 0,
          cantidadActual: stock.cantidad
        }
      })

      this.options = dataReal.filter(item => item.cantidadActual > 0 && item.tipoArticulo !== 'Insumo')
    })

    this.personasService.getAllClientes().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.clientes = data;
    });

    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


// <================================ FUNCIONAMIENTO DE PICKLIST =======================================>

selectedEntity(entity: any) {
  this.selectedEntities.push({...entity, cantidad: 1});
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



// <================================ FUNCIONAMIENTO DE CRUD =======================================>
  editarItem(data: any) {
    this.editVisible = true;
    this.id = data.id;
    this.usuarioIdEdit = data.usuarioId 
   
    
    
    
    this.form.patchValue({
      personaId: data.personaId
    });
  
    
  
    this.stockService.getAllStockVentaGeneral().subscribe(opciones => {
      console.log(opciones);
      
      this.options = opciones.filter(item => item.tipoArticulo !== 'Insumo')
      
      data.stock.forEach((item: any) => {
       
        this.selectedEntities.push(item)
        this.options = this.options.filter(option => option.id !== item.id);
        this.options = this.options.map((stock)=>{
          return {
            ...stock,
            nombre: stock.nombre_articulo,
            cantidad: 1,
            cantidadActual: stock.cantidad
          }
        })
      });
    });
    
  }

  

  onSubmit() {
    const formValue = this.form.value;
    
    if (!formValue.personaId) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe seleccionar al menos un cliente' });
    } else if (this.selectedEntities.length === 0) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe seleccionar al menos un elemento' });
    } else {

      this.tipo= {
        usuarioId: this.id > 0 ? this.usuarioIdEdit : this.usuarioId,
        personaId: formValue.personaId,
        productos: this.selectedEntities,
        tipoMovimientoId: 3
      };
    
      if (this.id > 0) {
        // Es editar
        this.movimientosService.updateVentaRepuestos(this.id, this.tipo)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Venta actualizada correctamente' });
            setTimeout(() => {
              window.location.reload();
            }, 600);
          }, (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar la venta' });
          });
      } else {
        // Es crear
        this.movimientosService.create(this.tipo)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Venta creada correctamente' });
            setTimeout(() => {
              window.location.reload();
            }, 600);
          }, (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear la venta' });
          });
      }
    }
    

    
   
  
    
  }

  Eliminar() {
    this.movimientosService.deleteVentaRepuesto(this.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Venta eliminada correctamente' });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  

// <================================ FUNCIONAMIENTO DE MODALES =======================================>

  

  modalOpen(data:any){
    this.detailModal = true
    this.cardData = data
  }

  openCrearVentaDialog(): void {
    this.crearVisible = true;
  }

  cantidadesModal(){
    this.crearVisible = false;
    const formValue = this.form.value;

    this.tipo = {
      usuarioId: formValue.usuarioId,
      personaId: formValue.personaId,
    };
  
  }

  eliminarItem(data: any) {
    this.editEliminar = true;
    this.id = data.id;
  }



}