import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosAdicionalesService } from '../../../services/datos-adicionales.service';
import { Subject, takeUntil } from 'rxjs';
import { faker } from '@faker-js/faker';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { OperacionVentaMotoService } from '../../../services/operacion-venta-moto.service';
@Component({
  selector: 'app-operaciones-details',
  templateUrl: './operaciones-details.component.html',
  styleUrl: './operaciones-details.component.css'
})
export class OperacionesDetailsComponent {
  insumoForm: FormGroup;
  isEditMode: any
  id: string | undefined
  form: any;
  tipo: any;
  private destroy$ = new Subject<void>();
  editId: any;
  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private operacionVentaMotoService: OperacionVentaMotoService,
    private location: Location
  
  ) {
    this.insumoForm = this.fb.group({
      precioOperacion: [''],
      seniaOperacion: [''],
      entregaOperacion: [''],
      otrasEntOperacion: [''],
      observacionOperacion: [''],
      cuotas: [''],
      valorCuota: [''],
      diaVencimientoCuota: [''],
      diaInicioCuota: [''],
      mesInicioCuota: [''],
      anioInicioCuota: [''],
      diaFinalCuota: [''],
      mesFinalCuota: [''],
      anioFinalCuota: [''],
      lugarPago: [''],
      gastosPap: [''],
      prenda: [''],
      inscripcion: [''],
      pago: [''],
      fechaRealizacion: [''],
      conceptoFinal: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.tipo = params['tipo']; 
      console.log(this.id); 
    });
  
  
    if (this.tipo == 'editar') {
      this.cargarDatos();
      
    }
  }

  onSubmit() {
    this.tipo = this.insumoForm.value
    

      if(this.isEditMode){
            // Es editar
            try {
              this.operacionVentaMotoService.update(this.editId, {...this.tipo, movimientoId: this.id}).pipe(takeUntil(this.destroy$)).subscribe(() => {
                setTimeout(() => {
                  this.location.back();  
                }, 600);
              });

            } catch (error) {
              console.log(error);
            }
      }else{
        // Es crear
        try {
          this.operacionVentaMotoService.create({...this.tipo, movimientoId: this.id}).pipe(takeUntil(this.destroy$)).subscribe(() => {
            setTimeout(() => {
              this.location.back();  
            }, 600);
          });
          
        } catch (error) {
          console.log(error);
        }
      }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fillFormWithRandomData() {
    this.insumoForm.patchValue({
      precioOperacion: faker.finance.amount(),
      seniaOperacion: faker.finance.amount(),
      entregaOperacion: faker.finance.amount(),
      otrasEntOperacion: faker.finance.amount(),
      observacionOperacion: faker.lorem.sentence(),
      cuotas: faker.datatype.number({ min: 1, max: 60 }),
      valorCuota: faker.finance.amount(),
      diaVencimientoCuota: faker.datatype.number({ min: 1, max: 28 }),
      diaInicioCuota: faker.datatype.number({ min: 1, max: 28 }),
      mesInicioCuota: faker.date.month(),
      anioInicioCuota: faker.datatype.number({ min: 2021, max: 2024 }),
      diaFinalCuota: faker.datatype.number({ min: 1, max: 28 }),
      mesFinalCuota: faker.date.month(),
      anioFinalCuota: faker.datatype.number({ min: 2021, max: 2024 }),
      lugarPago: faker.address.city(),
      gastosPap: faker.finance.amount(),
      prenda: faker.finance.amount(),
      inscripcion: faker.finance.amount(),
      pago: 'SI',
      fechaRealizacion: faker.date.past().toISOString().split('T')[0],
      conceptoFinal: faker.lorem.paragraph()
    });
  }

  cargarDatos(){
    this.operacionVentaMotoService.getDatosOperacion(this.id).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.editId = data.id
      this.insumoForm.patchValue(data);
      this.isEditMode = true
    });
  }
}