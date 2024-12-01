import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Info } from '../../interfaces/info';

@Component({
  selector: 'app-empresas-page',
  templateUrl: './empresas-page.component.html',
  styleUrl: './empresas-page.component.css'
})
export class EmpresasPageComponent implements OnInit {

  public information: Info[] = [];

  constructor(private informationService: InformationService) {}

  ngOnInit(): void {
    this.informationService.getContacto().subscribe((data) => {
      this.information = data;
    });
  }
}
