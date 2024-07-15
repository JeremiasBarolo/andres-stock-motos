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

import { VentaRepuestosComponent } from './venta-repuestos/venta-repuestos.component';
import { VentaMotosComponent } from './venta-motos/venta-motos.component';
import { HistorialClientesComponent } from './historial-clientes/historial-clientes.component';
import { PedidosStockComponent } from './pedidos-stock/pedidos-stock.component';
import { DatosServicioPdfComponent } from '../../shared/datos-servicio-pdf/datos-servicio-pdf.component';
import { ListadoPreciosComponent } from './listado-precios/listado-precios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AsignarInsumosComponent } from './asignar-insumos/asignar-insumos.component';







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
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'stock', component: StockComponent },
      { path: 'motos', component: MotosComponent },
      { path: 'motos-usadas', component: MotosUsadasComponent },
      { path: 'motos-nuevas', component: MotosNuevasComponent },
      { path: 'tipo-motos', component: TipoMotosComponent },
      { path: 'marcas', component: MarcaComponent },
      { path: 'service', component: DatosServicioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'proveedor', component: ProveedoresComponent },
      { path: 'venta-respuestos', component: VentaRepuestosComponent },
      { path: 'venta-motos', component: VentaMotosComponent },
      { path: 'historial-clientes', component: HistorialClientesComponent },
      { path: 'pedidos-stock', component: PedidosStockComponent },
      { path: 'service-pdf', component: DatosServicioPdfComponent },
      { path: 'listado-precios', component: ListadoPreciosComponent },
      { path: 'asignar-insumos', component: AsignarInsumosComponent },
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
