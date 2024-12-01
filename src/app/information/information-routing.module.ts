import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasPageComponent } from './pages/empresas-page/empresas-page.component';
import { ArticulosPageComponent } from './pages/articulos-page/articulos-page.component';


const routes: Routes = [
  {
    path: 'empresa',
    component: EmpresasPageComponent
  },
  {
    path: 'articulos',
    component: ArticulosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
