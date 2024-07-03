import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PersonasService } from '../../../services/personas.service';
import { StockService } from '../../../services/stock.service';
import { TipoArticuloService } from '../../../services/tipo-articulo.service';
import { PedidosService } from '../../../services/pedidos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pedidos-stock',
  templateUrl: './pedidos-stock.component.html',
  styleUrl: './pedidos-stock.component.css',
  providers: [DatePipe]
})
export class PedidosStockComponent {
  products: any[] = [];
  columns: any[] = [];
  editVisible: boolean = false
  editEliminar: boolean = false
  crearVisible: boolean = false
  cantidadVisible: boolean = false
  detailModal: boolean = false
  form: FormGroup;
  tipo: any;
  cardData: any;
  id: number = 0;
  proveedores: any[] = [];
  tipoArticulos: any[] = [];
  seleccionados: any[] = [];
  Articulos: any[] = [];
  

  private destroy$ = new Subject<void>();




  constructor( 
    private stockService: StockService,
    private pedidosService: PedidosService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe
  ){

    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      productos: this.fb.array([]) 
    });
  }
  
  ngOnInit(): void {

    this.pedidosService.getAll().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.columns = [
        { field: 'id', header: 'ID' },
        { field: 'descripcion', header: 'Descripcion' },
        { field: 'cantidadPedido', header: 'Cantidad del Pedido' },
        { field: 'FechaRealizacion', header: 'Fecha de Realizacion' },
        { field: 'total', header: 'Costo' },
        { field: 'estado', header: 'Estado' },
        
        

      ];

      data.map((data)=>{

        this.products.push({
          id: data.id,
          descripcion: data.descripcion,
          estado: data.estado,
          cantidadPedido: data.Pedido.length,
          Pedido: data.Pedido,
          total: data.total,
          FechaRealizacion: this.datePipe.transform(data.FechaRealizacion, 'dd/MM/yy')
        })
      })
    })

    

    this.stockService.getAll().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      let dataReal = data.map((stock)=>{
        return {
          ...stock,
          cantidad: 0,
          cantidadActual: stock.cantidad
        }
      })

      this.Articulos = dataReal;

    })

   
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  editarItem(data: any) {
    this.editVisible = true;
    this.id = data.id;
    
    
    this.form.patchValue({
      descripcion: data.descripcion,
    });
  
    
    this.productos.clear();
  
    // aca deberiamos de crear el solo traer los de este edit
    this.stockService.getAll().subscribe(repuestos => {
      
      this.Articulos = repuestos;

      
      data.stock.forEach((item: any) => {
        this.agregarProducto({
          id: item.id,
          nombre_articulo: item.nombre,
          cantidad: item.cantidad
        });

        
        this.Articulos = this.Articulos.filter(repuesto => repuesto.id !== item.id);
      });
    });
    
  }

  eliminarItem(data:any) {
    this.editEliminar = true
    this.id = data.id
  }
  
  onSubmit(){

    this.tipo = {
      descripcion: this.form.value.descripcion,
      productos: this.form.value.productos,
    }

      if(this.id > 0){
            
            try {
              this.pedidosService.update(this.id, this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
                setTimeout(() => {
                  window.location.reload();
                }, 600)
              });

            } catch (error) {
              console.log(error);
            }
      }else{
        // Es crear
        try {
          this.pedidosService.create(this.tipo ).pipe(takeUntil(this.destroy$)).subscribe(() => {
            setTimeout(() => {
              window.location.reload();
            }, 600)
          });
          
        } catch (error) {
          console.log(error);
        }
      }
  }

  Eliminar(){
    this.pedidosService.delete(this.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000)
      // this.router.navigate(['dashboard/insumos']);
    });
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
}
