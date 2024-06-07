import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tablang',
  templateUrl: './tablang.component.html',
  styleUrl: './tablang.component.css'
})
export class TablangComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];

  @Output() editarClick: EventEmitter<any> = new EventEmitter();
  @Output() eliminarClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  editar(rowData:any) {
    this.editarClick.emit(rowData);
}

eliminar(rowdata:any) {
    this.eliminarClick.emit(rowdata);
}
}
