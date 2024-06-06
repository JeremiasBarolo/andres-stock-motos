import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-articulo',
  templateUrl: './tipo-articulo.component.html',
  styleUrl: './tipo-articulo.component.css'
})
export class TipoArticuloComponent implements OnInit{
  

  products: any[] = [];
  columns: any[] = [];


  
  ngOnInit(): void {
    this.columns = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'price', header: 'Price' }
    ];

    this.products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];
  }
 
}

