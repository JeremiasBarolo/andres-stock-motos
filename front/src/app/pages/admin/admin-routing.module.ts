import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin.component';
import { TipoArticuloComponent } from './tipo-articulo/tipo-articulo.component';
import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';
import { LocalidadesComponent } from './localidades/localidades.component';
import { TipoMovimientosComponent } from './tipo-movimientos/tipo-movimientos.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PersonasComponent } from './personas/personas.component';
import { StockComponent } from './stock/stock.component';
import { MotosComponent } from './motos/motos.component';
import { TipoMotosComponent } from './tipo-motos/tipo-motos.component';
import { MarcaComponent } from './marca/marca.component';
import { DatosServicioComponent } from './datos-servicio/datos-servicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { MotosNuevasComponent } from './motos-nuevas/motos-nuevas.component';
import { MotosUsadasComponent } from './motos-usadas/motos-usadas.component';






const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'tipo-articulo', component: TipoArticuloComponent },
      { path: 'tipo-personas', component: TipoPersonaComponent },
      { path: 'localidades', component: LocalidadesComponent },
      { path: 'tipo-movimientos', component: TipoMovimientosComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'personas', component: PersonasComponent },
      { path: 'stock', component: StockComponent },
      { path: 'motos', component: MotosComponent },
      { path: 'motos-usadas', component: MotosUsadasComponent },
      { path: 'motos-nuevas', component: MotosNuevasComponent },
      { path: 'tipo-motos', component: TipoMotosComponent },
      { path: 'marcas', component: MarcaComponent },
      { path: 'datos-servicio', component: DatosServicioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'proveedor', component: ProveedoresComponent },
    ]
  },
  

    


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),


  ],

  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
