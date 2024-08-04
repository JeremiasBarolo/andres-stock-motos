import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatosAdicionalesService } from '../../../services/datos-adicionales.service';
import { Subject, takeUntil } from 'rxjs';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-asignar-adicionales',
  templateUrl: './asignar-adicionales.component.html',
  styleUrl: './asignar-adicionales.component.css'
})
export class AsignarAdicionalesComponent {
  insumoForm: FormGroup;
  isEditMode: any
  id: string | undefined 
  form: any;
  tipo: any;
  private destroy$ = new Subject<void>();
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private adicionalesClientesService: DatosAdicionalesService) {
    this.insumoForm = this.fb.group({
      telComercial: [''],
      estadoCivil: [''],
      empActual: [''],
      domicilioEmp: [''],
      telEmp: [''],
      profesion: [''],
      fechaIngreso: [''],
      ingresosMensuales: [''],
      nombreConyugue: [''],
      trabaja: [''],
      dondeTrabaja: [''],
      dniConyugue: [''],
      razonSocial: [''],
      ramoDeActividad: [''],
      cuitJuridico: [''],
      ivaJuridico: [''],
      ventasMensuales: [''],
      domicilioJuridico: [''],
      telefonoJuridico: [''],
      telefax: [''],
      telGarante: [''],
      nombreGarante: [''],
      domicilioGarante: [''],
      cuitGarante: [''],
      direccionEmpGarante: [''],
      casaPropiaAlquilada: [''],
      edadGarante: [''],
      estadoCivilGarante: [''],
      precioOperacion: [''],
      señaOperacion: [''],
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
    } else {
      console.error('ID es null');
      return;
    }
  
    if (this.route.snapshot.routeConfig !== null && this.route.snapshot.routeConfig.path !== undefined) {
      this.isEditMode = this.route.snapshot.routeConfig.path.includes('editar');
    } else {
      this.isEditMode = false;
    }
  
    if (this.isEditMode) {
      this.cargarDatos();
    }
  }

  onSubmit() {
    this.tipo = {...this.insumoForm.value, clienteId: this.id}
    

      if(this.isEditMode){
            // Es editar
            try {
              this.adicionalesClientesService.update(this.id, this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
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
          this.adicionalesClientesService.create(this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
            setTimeout(() => {
              window.location.reload();
            }, 600)
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
      telComercial: faker.phone.number(),
      estadoCivil: faker.name.jobType(),
      empActual: 'AGD',
      domicilioEmp: faker.address.streetAddress(),
      telEmp: faker.phone.number(),
      profesion: faker.name.jobTitle(),
      fechaIngreso: faker.date.past().toISOString().split('T')[0],
      ingresosMensuales: faker.finance.amount(),
      nombreConyugue: faker.name.fullName(),
      trabaja: faker.datatype.boolean() ? 'Sí' : 'No',
      dondeTrabaja:'AGD',
      dniConyugue: faker.datatype.number({ min: 10000000, max: 99999999 }),
      razonSocial: 'AGD',
      ramoDeActividad: faker.company.bs(),
      cuitJuridico: faker.datatype.number({ min: 20000000000, max: 30999999999 }),
      ivaJuridico: faker.datatype.boolean() ? 'Responsable Inscripto' : 'Monotributista',
      ventasMensuales: faker.finance.amount(),
      domicilioJuridico: faker.address.streetAddress(),
      telefonoJuridico: faker.phone.number(),
      telefax: faker.phone.number(),
      nombreGarante: faker.name.fullName(),
      domicilioGarante: faker.address.streetAddress(),
      cuitGarante: faker.datatype.number({ min: 20000000000, max: 30999999999 }),
      direccionEmpGarante: faker.address.streetAddress(),
      casaPropiaAlquilada: faker.datatype.boolean() ? 'Propia' : 'Alquilada',
      edadGarante: faker.datatype.number({ min: 25, max: 70 }),
      estadoCivilGarante: faker.name.jobType(),
      precioOperacion: faker.finance.amount(),
      señaOperacion: faker.finance.amount(),
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
      debe: faker.finance.amount(),
      pago: faker.finance.amount(),
      debeTrue: faker.datatype.boolean(),
      pagoTrue: faker.datatype.boolean(),
      fechaRealizacion: faker.date.past().toISOString().split('T')[0],
      conceptoFinal: faker.lorem.paragraph()
    });
  }

  cargarDatos(){}
}
