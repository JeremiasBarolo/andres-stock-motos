import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TipoArticuloComponent } from './tipo-articulo/tipo-articulo.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';
import { LocalidadesComponent } from './localidades/localidades.component';
import { TipoMovimientosComponent } from './tipo-movimientos/tipo-movimientos.component';
import { RolesComponent } from './roles/roles.component';
import { TooltipModule } from 'primeng/tooltip';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PersonasComponent } from './personas/personas.component';
import { StockComponent } from './stock/stock.component';
import { MotosComponent } from './motos/motos.component';
import { TipoMotosComponent } from './tipo-motos/tipo-motos.component';
import { MarcaComponent } from './marca/marca.component';



@NgModule({
  declarations: [
    AdminComponent,
    TipoArticuloComponent,
    TipoPersonaComponent,
    LocalidadesComponent,
    TipoMovimientosComponent,
    RolesComponent,
    UsuariosComponent,
    PersonasComponent,
    StockComponent,
    MotosComponent,
    TipoMotosComponent,
    MarcaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    AdminRoutingModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    TooltipModule
  ]
})
export class AdminModule { }
