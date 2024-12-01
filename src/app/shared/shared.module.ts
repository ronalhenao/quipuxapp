import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { EmpresasPageComponent } from './pages/empresas-page/empresas-page.component';
// import { ArticulosPageComponent } from './pages/articulos-page/articulos-page.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    // EmpresasPageComponent,
    // ArticulosPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomePageComponent,
    // EmpresasPageComponent,
    // ArticulosPageComponent
  ]
})
export class SharedModule { }
