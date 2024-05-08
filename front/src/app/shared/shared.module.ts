import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
    
    
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent

  ]
})
export class SharedModule { }
