import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-card',
  templateUrl: './inicio-card.component.html',
  styleUrl: './inicio-card.component.css'
})
export class InicioCardComponent  {
  
  @Input() titulo: any
  @Input() descripcion: any
  @Input() icono: any
  @Input() color: any
  @Input() useCurrencyPipe: boolean = false;
  
  
  
}
