import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DatePipe } from '@angular/common';
import { DatosServicioService } from '../../../services/datos-servicio.service';
import { PersonasService } from '../../../services/personas.service';
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
  form: FormGroup;
  tipo: any;
  cardData: any;
  id: number = 0;
  empleados: any[] = [];

  private destroy$ = new Subject<void>();




  constructor( 
    private datosServicioService: DatosServicioService,
    private personasService: PersonasService,
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
      num_chasis: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {

    this.datosServicioService.getAll().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
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
          modelo: data.modelo,
          num_motor: data.num_motor,
          num_chasis: data.num_chasis,
          patente: data.patente,
          color: data.color,
          tipo_servicio: data.tipo_servicio,
          kilometros: data.kilometros,
          estado_general: data.estado_general,
          observaciones: data.observaciones,
          Recepcionista: data.Recepcionista,
          fecha_recepcion: this.datePipe.transform(data.fecha_recepcion, 'dd/MM/yy'),
          fecha_est_entrega: this.datePipe.transform(data.fecha_est_entrega, 'dd/MM/yy'),
          hora_est_entrega: data.hora_est_entrega,
          recepcionistaId: data.recepcionistaId
        })
      })
    })

    

    this.personasService.getAllEmpleados().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.empleados = data;
    })

   
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  editarItem(data:any) {
    this.editVisible = true
    this.id = data.id

    console.log(data);

   
  
    
    const fecha_est_entrega_parts = data.fecha_est_entrega.split('/');
    const fecha_est_entrega_iso = `20${fecha_est_entrega_parts[2]}-${fecha_est_entrega_parts[1]}-${fecha_est_entrega_parts[0]}`;
    
    const fecha_recepcion = new Date(data.fecha_recepcion).toISOString().split('T')[0];
    const hora_est_entrega = data.hora_est_entrega.slice(0, 5);
    
    
    
    this.form.patchValue({
      modelo: data.modelo,
      patente: data.patente,
      color: data.color,
      num_motor: data.num_motor,
      num_chasis: data.num_chasis,
      tipo_servicio: data.tipo_servicio,
      kilometros: data.kilometros,
      estado_general: data.estado_general,
      observaciones: data.observaciones,
      recepcionistaId: data.recepcionistaId,
      hora_est_entrega: hora_est_entrega,
      fecha_est_entrega: fecha_est_entrega_iso,
      fecha_recepcion: fecha_recepcion,
      
    })
    
    
    
    
  }

  eliminarItem(data:any) {
    this.editEliminar = true
    this.id = data.id
  }
  
  onSubmit(){

    
    
    this.tipo = {
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
      fecha_recepcion: this.form.value.fecha_recepcion
      
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
  }

  redirectToPDF(cardData: any) {
    this.router.navigate(['admin/datos-servicio-pdf'], { queryParams: cardData });
  }

}


