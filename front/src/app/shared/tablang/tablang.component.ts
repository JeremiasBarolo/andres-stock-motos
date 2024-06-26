import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tablang',
  templateUrl: './tablang.component.html',
  styleUrl: './tablang.component.css'
})
export class TablangComponent {
  acciones: boolean = true
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() accionesVisible: boolean = true;

  @Output() editarClick: EventEmitter<any> = new EventEmitter();
  @Output() eliminarClick: EventEmitter<any> = new EventEmitter();
  @Output() modalOpenClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.accionesVisible === false) {
     this.acciones = false
    }
    
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
}
