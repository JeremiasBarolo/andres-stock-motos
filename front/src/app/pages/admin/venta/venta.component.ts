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
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
  providers: [DatePipe]
})
export class VentaComponent implements OnInit, OnDestroy {
  products: any[] = [];
  columns: any[] = [];
  editVisible: boolean = false;
  editEliminar: boolean = false;
  crearVisible: boolean = false;
  cantidadVisible: boolean = false;
  detailModal: boolean = false
  selectTipoArticuloVisible: boolean = false
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
          cantArt: data.stock.length
        });
      });
    });

    this.usuariosService.getAll().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.usuarios = data;
    });

    this.personasService.getAllClientes().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.clientes = data;
    });

    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  cantidadesModal(){
    this.crearVisible = false;
    const formValue = this.form.value;

    this.tipo = {
      
      usuarioId: formValue.usuarioId,
      personaId: formValue.personaId,
      
    };
  
  }

  get productos(): FormArray {
    return this.form.get('productos') as FormArray;
  }

  agregarProducto(producto: any) {
    const productoForm = this.fb.group({
      id: [producto.id, Validators.required],
      nombre_articulo: [producto.nombre_articulo, Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]]
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

  editarItem(data: any) {
    this.editVisible = true;
    this.id = data.id;
    this.form.patchValue({
      usuarioId: data.usuarioId,
      personaId: data.personaId
    });
  }

  eliminarItem(data: any) {
    this.editEliminar = true;
    this.id = data.id;
  }

  onSubmit(a:any) {
    const formValue = this.form.value;
    if(a == 'repuesto'){
      this.tipo = {
        usuarioId: formValue.usuarioId,
        personaId: formValue.personaId,
        productos: formValue.productos,
        tipoMovimientoId: 3
      };
    }else{
      this.tipo = {
        usuarioId: formValue.usuarioId,
        personaId: formValue.personaId,
        productos: formValue.productos,
        tipoMovimientoId: 3
      };
    }

    

    if (this.id > 0) {
      // Es editar
      try {
        this.movimientosService.update(this.id, this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
          setTimeout(() => {
            window.location.reload();
          }, 600);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      // Es crear
      try {
        this.movimientosService.create(this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
          setTimeout(() => {
            window.location.reload();
          }, 600);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  Eliminar() {
    this.movimientosService.delete(this.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  selectTipoArticulo(tipo:any){
    if(tipo == 'repuesto'){
      this.selectTipoArticuloVisible = false;
      this.crearVisible = true
      this.stockService.getAllRepuestos().pipe(takeUntil(this.destroy$)).subscribe(data => {
        this.repuestos = data;
      });
    }
  }

  openCrearVentaDialog(): void {
    this.selectTipoArticuloVisible = true;
  }

  openCantidadDialog() {
    if (this.productos.length > 0) {
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
}