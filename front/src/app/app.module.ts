import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthInterceptor } from './http.interceptor';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PickListModule } from 'primeng/picklist';
import { StepperModule } from 'primeng/stepper';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
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
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
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
    MarcaComponent,
    DatosServicioComponent,
    ClientesComponent,
    ProveedoresComponent,
    MotosNuevasComponent,
    MotosUsadasComponent,
    VentaMotosComponent,
    HistorialClientesComponent,
    PedidosStockComponent,
    ListadoPreciosComponent,
    EmpleadosComponent,
    AsignarInsumosComponent,
    InicioComponent,
    ServiciosComponent,
    InsumosComponent,
    TareasComponent,
    MotosConsignacionComponent,
    VentaGeneralComponent,
    AsignarAdicionalesComponent,
    OperacionesDetailsComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastModule,
    CommonModule,
    RouterModule,
    RouterOutlet,
    SharedModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    TooltipModule,
    PickListModule,
    DragDropModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    TableModule,
    ToastModule,
    IonicModule,
    CalendarModule,
    StepperModule
   
    
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
