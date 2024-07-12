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


  private destroy$ = new Subject<void>();

  constructor(
    private usuariosService: UsuariosService,
    private personasService: PersonasService,
    private stockService: StockService,
    private movimientosService: MovimientosService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      usuarioId: ['', Validators.required],
      personaId: ['', Validators.required],
      productos: this.fb.array([]) 
    });
  }

  ngOnInit(): void {
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

    this.usuariosService.getAll().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.usuarios = data;
    });

    this.stockService.getAllStockVentaGeneral().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      let dataReal = data.map((stock)=>{
        return {
          ...stock,
          cantidad: 0,
          cantidadActual: stock.cantidad
        }
      })

      this.repuestos = dataReal;
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

  get productos(): FormArray {
    return this.form.get('productos') as FormArray;
  }

  agregarProducto(producto: any) {
    const productoForm = this.fb.group({
      id: [producto.id, Validators.required],
      nombre_articulo: [producto.nombre_articulo, Validators.required],
      cantidad: [producto.cantidad, [Validators.required, Validators.min(1)]]
    });
  
    this.productos.push(productoForm);
  }

  eliminarProducto(index: number) {
    this.productos.removeAt(index);
  }

  agregarProductoDesdePickList(event: any) {
    event.items.forEach((producto: any) => {
      this.agregarProducto(producto);
    });
  }

  eliminarProductoDesdePickList(event: any) {
    event.items.forEach((producto: any) => {
      const index = this.productos.controls.findIndex((control: any) => control.value.id === producto.id);
      if (index > -1) {
        this.eliminarProducto(index);
      }
    });
  }



// <================================ FUNCIONAMIENTO DE CRUD =======================================>
  editarItem(data: any) {
    this.editVisible = true;
    this.id = data.id;
    
    
    this.form.patchValue({
      usuarioId: data.usuarioId,
      personaId: data.personaId
    });
  
    
    this.productos.clear();
  
    this.stockService.getAllRepuestos().subscribe(repuestos => {
      
      this.repuestos = repuestos;

      
      data.stock.forEach((item: any) => {
        this.agregarProducto({
          id: item.id,
          nombre_articulo: item.nombre,
          cantidad: item.cantidad
        });

        
        this.repuestos = this.repuestos.filter(repuesto => repuesto.id !== item.id);
      });
    });
    
  }

  

  onSubmit() {
    const formValue = this.form.value;
    
    this.tipo = {
      usuarioId: formValue.usuarioId,
      personaId: formValue.personaId,
      productos: formValue.productos,
      tipoMovimientoId: 3
    };
   
  
    if (this.id > 0) {
      // Es editar
      this.movimientosService.updateVentaRepuestos(this.id, this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
        setTimeout(() => {
          window.location.reload();
        }, 600);
      });
    } else {
      // Es crear
      this.movimientosService.create(this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
        setTimeout(() => {
          window.location.reload();
        }, 600);
      });
    }
  }

  Eliminar() {
    this.movimientosService.deleteVentaRepuesto(this.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  

// <================================ FUNCIONAMIENTO DE MODALES =======================================>

  openCantidadDialog() {
    if (this.productos.length > 0) {
      this.productos.controls.forEach((control) => {
        if (!control.get('cantidad')?.value) {
          control.get('cantidad')?.setValue(1);
        }
      });
  
      this.crearVisible = false;
      this.cantidadVisible = true;
    } else {
      alert('Debe seleccionar al menos un producto.');
    }
  }

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