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
  selector: 'app-venta-motos',
  templateUrl: './venta-motos.component.html',
  styleUrl: './venta-motos.component.css',
  providers: [DatePipe]
})
export class VentaMotosComponent implements OnDestroy, OnInit {
  products: any[] = [];
  columns: any[] = [];
  editVisible: boolean = false;
  editEliminar: boolean = false;
  crearVisible: boolean = false;
  detailModal: boolean = false
  form: FormGroup;
  tipo: any;
  cardData: any;
  id: number = 0;
  usuarios: any[] = [];
  clientes: any[] = [];
  motos: any[] = [];


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
    this.movimientosService.getAllVentasMoto().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.columns = [
        { field: 'id', header: 'ID' },
        { field: 'nombreMoto', header: 'Moto' },
        { field: 'createdAt', header: 'Fecha de Realizacion' },
        { field: 'cliente', header: 'Cliente' },
        { field: 'usuario', header: 'Recepcionista' },
        { field: 'subtotal', header: 'Subtotal' },
        
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
          Moto: data.Moto,
          tipoMovimientoId: data.tipoMovimientoId,
          nombreMoto: `${data.Moto.marca} ${data.Moto.modelo}`
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

  onSubmit() {
    const formValue = this.form.value;
   
      this.tipo = {
        usuarioId: formValue.usuarioId,
        personaId: formValue.personaId,
        productos: formValue.productos,
        tipoMovimientoId: 2
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
    this.movimientosService.delete(this.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  

  openCrearVentaDialog(): void {
    this.crearVisible = true;
  }

 

  modalOpen(data:any){
    this.detailModal = true
    this.cardData = data
  }
}
