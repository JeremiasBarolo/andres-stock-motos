import { Component, OnDestroy, OnInit } from '@angular/core';
import { TipoArticuloService } from '../../../services/tipo-articulo.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-historial-clientes',
  templateUrl: './historial-clientes.component.html',
  styleUrl: './historial-clientes.component.css'
})
export class HistorialClientesComponent implements OnInit, OnDestroy {

  products: any[] = [];
  columns: any[] = [];
  form: FormGroup;
  tipo: any;
  cardData: any;
  id: number = 0

  private destroy$ = new Subject<void>();




  constructor( 
    private marcasService: MarcaService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
  ){

    this.form = this.fb.group({
      descripcion: ['', Validators.required],
    });
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  ngOnInit(): void {

    this.marcasService.getAll().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.columns = [
        { field: 'id', header: 'ID' },
        { field: 'descripcion', header: 'Descripcion' },
      ];

      data.map((data)=>{
        this.products.push({
          id: data.id,
          descripcion: data.descripcion
        })
      })
    })

   
  }

  editarItem(data:any) {
  }

  eliminarItem(data:any) {
  }
  
 

  
  
  

}
