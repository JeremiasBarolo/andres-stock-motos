import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DatePipe } from '@angular/common';
import { DatosServicioService } from '../../../services/datos-servicio.service';
import { PersonasService } from '../../../services/personas.service';
import { StockService } from '../../../services/stock.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { MovimientosService } from '../../../services/movimientos.service';
@Component({
  selector: 'app-datos-servicio',
  templateUrl: './datos-servicio.component.html',
  styleUrl: './datos-servicio.component.css',
  providers: [DatePipe]
})
export class DatosServicioComponent {



  products: any[] = [];
  columns: any[] = [];
  editVisible: boolean = false
  editEliminar: boolean = false
  crearVisible: boolean = false
  showModal: boolean = false
  serviciosVisible: boolean = false
  form: FormGroup;
  tipo: any;
  cardData: any;
  id: number = 0;
  empleados: any[] = [];
  servicios: any[] = [];
  clientes: any[] = [];
  usuarios: any[] = [];

  private destroy$ = new Subject<void>();




  constructor( 
    private datosServicioService: DatosServicioService,
    private movimientosService: MovimientosService,
    private personasService: PersonasService,
    private usuariosService: UsuariosService,
    private stockService: StockService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private datePipe: DatePipe
  ){

    this.form = this.fb.group({
      modelo: ['', Validators.required],
      num_motor: ['', Validators.required],
      patente: ['', Validators.required],
      color: ['', Validators.required],
      tipo_servicio: ['', Validators.required],
      kilometros: ['', Validators.required],
      estado_general: ['', Validators.required],
      observaciones: ['', Validators.required],
      recepcionistaId: ['', Validators.required],
      hora_est_entrega: ['', Validators.required],
      fecha_est_entrega: ['', Validators.required],
      fecha_recepcion: ['', Validators.required],
      num_chasis: ['', Validators.required],
      usuarioId: ['', Validators.required],
      personaId: ['', Validators.required],
      productos: this.fb.array([]) 
    });
  }
  
  ngOnInit(): void {

    this.movimientosService.getAllServices().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.columns = [
        { field: 'id', header: 'ID' },
        { field: 'modelo', header: 'Modelo' },
        { field: 'patente', header: 'Patente' },
        { field: 'color', header: 'Color' },
        { field: 'num_motor', header: 'Nro. Motor' },
        { field: 'num_chasis', header: 'Nro. Chasis' },
        { field: 'tipo_servicio', header: 'Tipo de Servicio' },
        { field: 'Recepcionista', header: 'Recepcionista' },
        { field: 'fecha_recepcion', header: 'Fecha de Recepcion' },
        { field: 'fecha_est_entrega', header: 'Fecha Estimadad de Entrega' },
        { field: 'hora_est_entrega', header: 'Hora Estimada de Entrega' }
      ];

      data.map((data)=>{
         console.log(data);
         
         
        this.products.push({
          id: data.id,
          personaId: data.personaId,
          usuarioId: data.usuarioId,
          modelo: data.DatosServicio.modelo,
          num_motor: data.DatosServicio.num_motor,
          num_chasis: data.DatosServicio.num_chasis,
          patente: data.DatosServicio.patente,
          color: data.DatosServicio.color,
          tipo_servicio: data.DatosServicio.tipo_servicio,
          kilometros: data.DatosServicio.kilometros,
          estado_general: data.DatosServicio.estado_general,
          observaciones: data.DatosServicio.observaciones,
          Recepcionista: data.Recepcionista,
          fecha_recepcion: this.datePipe.transform(data.DatosServicio.fecha_recepcion, 'dd/MM/yy'),
          fecha_est_entrega: this.datePipe.transform(data.DatosServicio.fecha_est_entrega, 'dd/MM/yy'),
          hora_est_entrega: data.DatosServicio.hora_est_entrega,
          recepcionistaId: data.DatosServicio.recepcionistaId,
          DatosServicio: data.DatosServicio,
          datosServicioId: data.datosServicioId,
          Servicios: data.Servicios,
          subtotal: data.subtotal

        })
      })
    })

    

    this.personasService.getAllEmpleados().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.empleados = data;
    })

    this.stockService.getAllServicios().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.servicios = data;
    })

    this.usuariosService.getAll().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.usuarios = data;
    });

    this.personasService.getAllClientes().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.clientes = data;
    })
   
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  editarItem(data:any) {
    this.editVisible = true
    this.id = data.id

    console.log('edit',data);

   
  
    
    // const fecha_est_entrega_parts = data.DatosServicio.fecha_est_entrega.split('/');
    // const fecha_est_entrega_iso = `20${fecha_est_entrega_parts[2]}-${fecha_est_entrega_parts[1]}-${fecha_est_entrega_parts[0]}`;

    const fecha_est_entrega = new Date(data.DatosServicio.fecha_est_entrega).toISOString().split('T')[0];
    
    const fecha_recepcion = new Date(data.DatosServicio.fecha_recepcion).toISOString().split('T')[0];
    const hora_est_entrega = data.hora_est_entrega.slice(0, 5);
    
    
    
    this.form.patchValue({
      usuarioId: data.usuarioId,
      personaId: data.personaId,
      modelo: data.DatosServicio.modelo,
      patente: data.DatosServicio.patente,
      color: data.DatosServicio.color,
      num_motor: data.DatosServicio.num_motor,
      num_chasis: data.DatosServicio.num_chasis,
      tipo_servicio: data.DatosServicio.tipo_servicio,
      kilometros: data.DatosServicio.kilometros,
      estado_general: data.DatosServicio.estado_general,
      observaciones: data.DatosServicio.observaciones,
      recepcionistaId: data.DatosServicio.recepcionistaId,
      hora_est_entrega: hora_est_entrega,
      fecha_est_entrega: fecha_est_entrega,
      fecha_recepcion: fecha_recepcion,
    })
    
    
    
    
  }

  eliminarItem(data:any) {
    this.editEliminar = true
    this.id = data.id
  }
  
  onSubmit(){

    
    
    this.tipo = {
      usuarioId: this.form.value.usuarioId,
      personaId: this.form.value.personaId,
      modelo: this.form.value.modelo,
      color: this.form.value.color,
      patente: this.form.value.patente,
      num_motor: this.form.value.num_motor,
      num_chasis: this.form.value.num_chasis,
      tipo_servicio: this.form.value.tipo_servicio,
      kilometros: this.form.value.kilometros,
      estado_general: this.form.value.estado_general,
      observaciones: this.form.value.observaciones,
      recepcionistaId: this.form.value.recepcionistaId,
      hora_est_entrega: this.form.value.hora_est_entrega,
      fecha_est_entrega: this.form.value.fecha_est_entrega,
      fecha_recepcion: this.form.value.fecha_recepcion,
      productos: this.form.value.productos
    }

      if(this.id > 0){
            // Es editar
            try {
              this.datosServicioService.update(this.id, this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
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
          this.datosServicioService.create(this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
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
    this.datosServicioService.delete(this.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000)
      // this.router.navigate(['dashboard/insumos']);
    });
  }

  modalOpen(data:any){
    this.showModal = true
    this.cardData = data
    console.log('cardata:', data);
    
  }

  redirectToPDF(cardData: any) {
    console.log(cardData);
    
    
    const serviciosSerialized = JSON.stringify(cardData.Servicios);
    
    
    const queryParams = { ...cardData, Servicios: serviciosSerialized };

    
    this.router.navigate(['admin/datos-servicio-pdf'], { queryParams });
}

// <========================================================= FUNCIONAMIENTO DE PICKLIST =======================================================================>
  get productos(): FormArray {
    return this.form.get('productos') as FormArray;
  }

  agregarProducto(producto: any) {
    const productoForm = this.fb.group({
      id: [producto.id, Validators.required],
      nombre_articulo: [producto.nombre_articulo, Validators.required],
      costo: [producto.costo, Validators.required],
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


  // <===================================== FUNCIONAMIENTO DE MODALES ========================================>
openServiceDialog() {
  
    this.crearVisible = false;
    this.serviciosVisible = true;
  
}

}


