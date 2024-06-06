import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { TablangComponent } from './tablang/tablang.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TablangComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    TableModule,
    ButtonModule,
    
    
    
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TablangComponent

  ]
})
export class SharedModule { }
