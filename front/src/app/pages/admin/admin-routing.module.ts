import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin.component';
import { TipoArticuloComponent } from './tipo-articulo/tipo-articulo.component';
import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';






const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'tipo-articulo', component: TipoArticuloComponent },
      { path: 'tipo-personas', component: TipoPersonaComponent }
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
