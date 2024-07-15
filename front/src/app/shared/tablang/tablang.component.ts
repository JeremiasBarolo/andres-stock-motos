import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tablang',
  templateUrl: './tablang.component.html',
  styleUrl: './tablang.component.css'
})
export class TablangComponent {
  acciones: boolean = true
  insumos: boolean = false
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() accionesVisible: boolean = true;
  @Input() insumosVisible: boolean = true;
  

  @Output() editarClick: EventEmitter<any> = new EventEmitter();
  @Output() eliminarClick: EventEmitter<any> = new EventEmitter();
  @Output() insumoClick: EventEmitter<any> = new EventEmitter();
  @Output() modalOpenClick: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.insumosVisible);

    this.acciones = this.accionesVisible;
    this.insumos = this.insumosVisible;
  }

  editar(rowData:any) {
    this.editarClick.emit(rowData);
}

modalOpen(rowdata:any) {
  this.modalOpenClick.emit(rowdata);
}

eliminar(rowdata:any) {
    this.eliminarClick.emit(rowdata);
}

asignarInsumos(rowData: any) {
  this.insumoClick.emit(rowData);
}
}
