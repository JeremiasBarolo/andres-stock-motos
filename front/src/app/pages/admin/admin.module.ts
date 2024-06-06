import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TipoArticuloComponent } from './tipo-articulo/tipo-articulo.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    AdminComponent,
    TipoArticuloComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    AdminRoutingModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    
  ]
})
export class AdminModule { }
