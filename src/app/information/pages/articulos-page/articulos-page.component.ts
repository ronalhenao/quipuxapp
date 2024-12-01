import { Component } from '@angular/core';
import { ArticuloService } from '../../services/articles.service';
import { InformationService } from './../../services/information.service';
import { Articulo } from '../../interfaces/articulos';
import { Info } from '../../interfaces/info';

@Component({
  selector: 'app-articulos-page',
  templateUrl: './articulos-page.component.html',
  styleUrl: './articulos-page.component.css'
})
export class ArticulosPageComponent {
  public articulos: Articulo[] = [];
  public information: Info[] = [];

  constructor(
    private articuloService: ArticuloService,
    private informationService: InformationService
  ){}
  

  ngOnInit(): void {
    // obtener articulos desde servicio
    this.articuloService.getArticulos().subscribe((data) => {
      this.articulos = data;
    });

    // obtener informacion empresa desde servicio
    this.informationService.getContacto().subscribe((data) => {
      this.information = data
    })
  }

}
