import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonasService } from '../../../services/personas.service';
import { StockService } from '../../../services/stock.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { MovimientosService } from '../../../services/movimientos.service';
import { DatePipe } from '@angular/common';
import { MotosService } from '../../../services/motos.service';

@Component({
  selector: 'app-venta-motos',
  templateUrl: './venta-motos.component.html',
  styleUrls: ['./venta-motos.component.css'],
  providers: [DatePipe]
})
export class VentaMotosComponent implements OnDestroy, OnInit {
  products: any[] = [];
  columns: any[] = [];
  editVisible: boolean = false;
  editEliminar: boolean = false;
  crearVisible: boolean = false;
  detailModal: boolean = false;
  form: FormGroup;
  tipo: any;
  cardData: any;
  id: number = 0;
  usuarios: any[] = [];
  clientes: any[] = [];
  motos: any[] = [];
  motosDisponibles: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private usuariosService: UsuariosService,
    private personasService: PersonasService,
    private motoService: MotosService,
    private movimientosService: MovimientosService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      usuarioId: ['', Validators.required],
      personaId: ['', Validators.required],
      motoId: ['', Validators.required],
      productos: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadData(): void {
    this.movimientosService.getAllVentasMoto().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.columns = [
        { field: 'id', header: 'ID' },
        { field: 'nombreMoto', header: 'Moto' },
        { field: 'createdAt', header: 'Fecha de Realizacion' },
        { field: 'cliente', header: 'Cliente' },
        { field: 'usuario', header: 'Recepcionista' },
        { field: 'subtotal', header: 'Subtotal' },
      ];
      this.products = data.map(item => ({
        id: item.id,
        createdAt: this.datePipe.transform(item.createdAt, 'dd/MM/yy'),
        cliente: item.cliente,
        usuario: item.usuario,
        subtotal: item.subtotal,
        usuarioId: item.usuarioId,
        personaId: item.personaId,
        Moto: item.Moto,
        motoId: item.Moto.id,
        tipoMovimientoId: item.tipoMovimientoId,
        nombreMoto: `${item.Moto.marca} ${item.Moto.modelo}`
      }));
    });

    this.usuariosService.getAll().pipe(takeUntil(this.destroy$)).subscribe(data => {
      
      
      this.usuarios = data;
    });

    this.personasService.getAllClientes().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.clientes = data;
    });

    this.motoService.getAll().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.motosDisponibles = data.map(moto => ({
        ...moto,
        nombreMoto: `${moto.Marca} ${moto.modelo}`,
        motoId: moto.id
      }));
    });
  }

  openCrearVentaDialog(): void {
    this.crearVisible = true;
  }

  editarItem(data: any) {
    console.log(data);
    
    this.editVisible = true;
    this.id = data.id;
    this.form.patchValue({
      usuarioId: data.usuarioId,
      personaId: data.personaId,
      motoId: data.motoId
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
      motoId: formValue.motoId, 
      tipoMovimientoId: 2
    };

    if (this.id > 0) {
      this.movimientosService.updateVentaMoto(this.id, this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
        setTimeout(() => {
          window.location.reload();
        }, 600);
      });
    } else {
      this.movimientosService.createVentaMoto(this.tipo).pipe(takeUntil(this.destroy$)).subscribe(() => {
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

  modalOpen(data: any) {
    this.detailModal = true;
    this.cardData = data;
  }
}
