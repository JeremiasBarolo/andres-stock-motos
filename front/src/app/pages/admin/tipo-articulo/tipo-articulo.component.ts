import { Component, OnInit } from '@angular/core';
import { TipoArticuloService } from '../../../services/tipo-articulo.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-tipo-articulo',
  templateUrl: './tipo-articulo.component.html',
  styleUrl: './tipo-articulo.component.css'
})
export class TipoArticuloComponent implements OnInit{
  

  products: any[] = [];
  columns: any[] = [];
  editVisible: boolean = false
  editEliminar: boolean = false


  constructor( 
    private tipoArticuloService: TipoArticuloService,
  
  ){}
  
  ngOnInit(): void {

    this.tipoArticuloService.getAll().subscribe((data: any[]) => {
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

  editarItem() {
    this.editVisible = true
    
  }

  eliminarItem() {
    this.editEliminar = true
  }
 
}

