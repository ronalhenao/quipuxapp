import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasPageComponent } from './pages/empresas-page/empresas-page.component';
import { ArticulosPageComponent } from './pages/articulos-page/articulos-page.component';
import { InformationRoutingModule } from './information-routing.module';

@NgModule({
  declarations: [
    EmpresasPageComponent,
    ArticulosPageComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
