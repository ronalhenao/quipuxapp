import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../interfaces/info';

@Injectable({providedIn: 'root'})
export class InformationService {

  private jsonUrl: string = 'assets/data/info-contacto.json';

  constructor(private http: HttpClient) { }
  
  getContacto(): Observable<Info[]> {
    return this.http.get<Info[]>(this.jsonUrl); // Ya no es un array
  }
}