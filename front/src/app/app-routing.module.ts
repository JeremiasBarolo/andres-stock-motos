import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AsignarAdicionalesComponent } from './pages/admin/asignar-adicionales/asignar-adicionales.component';
import { AsignarInsumosComponent } from './pages/admin/asignar-insumos/asignar-insumos.component';
import { ClientesComponent } from './pages/admin/clientes/clientes.component';
import { DatosServicioComponent } from './pages/admin/datos-servicio/datos-servicio.component';
import { EmpleadosComponent } from './pages/admin/empleados/empleados.component';
import { HistorialClientesComponent } from './pages/admin/historial-clientes/historial-clientes.component';
import { InicioComponent } from './pages/admin/inicio/inicio.component';
import { InsumosComponent } from './pages/admin/insumos/insumos.component';
import { ListadoPreciosComponent } from './pages/admin/listado-precios/listado-precios.component';
import { LocalidadesComponent } from './pages/admin/localidades/localidades.component';
import { MarcaComponent } from './pages/admin/marca/marca.component';
import { MotosConsignacionComponent } from './pages/admin/motos-consignacion/motos-consignacion.component';
import { MotosNuevasComponent } from './pages/admin/motos-nuevas/motos-nuevas.component';
import { MotosUsadasComponent } from './pages/admin/motos-usadas/motos-usadas.component';
import { MotosComponent } from './pages/admin/motos/motos.component';
import { OperacionesDetailsComponent } from './pages/admin/operaciones-details/operaciones-details.component';
import { PedidosStockComponent } from './pages/admin/pedidos-stock/pedidos-stock.component';
import { PersonasComponent } from './pages/admin/personas/personas.component';
import { ProveedoresComponent } from './pages/admin/proveedores/proveedores.component';
import { RolesComponent } from './pages/admin/roles/roles.component';
import { ServiciosComponent } from './pages/admin/servicios/servicios.component';
import { StockComponent } from './pages/admin/stock/stock.component';
import { TareasComponent } from './pages/admin/tareas/tareas.component';
import { TipoArticuloComponent } from './pages/admin/tipo-articulo/tipo-articulo.component';
import { TipoMotosComponent } from './pages/admin/tipo-motos/tipo-motos.component';
import { TipoMovimientosComponent } from './pages/admin/tipo-movimientos/tipo-movimientos.component';
import { TipoPersonaComponent } from './pages/admin/tipo-persona/tipo-persona.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { VentaGeneralComponent } from './pages/admin/venta-general/venta-general.component';
import { VentaMotosComponent } from './pages/admin/venta-motos/venta-motos.component';
import { DatosServicioPdfComponent } from './shared/datos-servicio-pdf/datos-servicio-pdf.component';
import { VentaMotoPdfComponent } from './shared/venta-moto-pdf/venta-moto-pdf.component';






const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent,
    
    children: [
      { path: 'inicio', component: InicioComponent },
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
      { path: 'motos-consignacion', component: MotosConsignacionComponent },
      { path: 'tipo-motos', component: TipoMotosComponent },
      { path: 'marcas', component: MarcaComponent },
      { path: 'service', component: DatosServicioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'insumos', component: InsumosComponent },
      { path: 'proveedor', component: ProveedoresComponent },
      { path: 'ventas/:tipo', component: VentaGeneralComponent },
      { path: 'pdfVenta', component: VentaMotoPdfComponent },
      { path: 'adicionales/:tipo/:id', component: AsignarAdicionalesComponent },
      { path: 'operacion/:tipo/:subtotal/:id', component: OperacionesDetailsComponent },
      { path: 'venta-motos', component: VentaMotosComponent },
      { path: 'historial-clientes', component: HistorialClientesComponent },
      { path: 'pedidos-stock', component: PedidosStockComponent },
      { path: 'service-pdf', component: DatosServicioPdfComponent },
      { path: 'listado-precios', component: ListadoPreciosComponent },
      { path: 'asignar-insumos/:id', component: AsignarInsumosComponent },
      { path: 'asignar-insumos/editar/:id', component: AsignarInsumosComponent },
      { path: 'tareas', component: TareasComponent },
      { path: 'inicio', component: InicioComponent },
      { path: '**', redirectTo: 'inicio' }, 
    ]
  },
  
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: 'login' }, 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [], 
  exports: [RouterModule],
})
export class AppRoutingModule {}