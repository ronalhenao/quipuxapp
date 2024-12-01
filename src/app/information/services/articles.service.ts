import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulos';

@Injectable({providedIn: 'root'})
export class ArticuloService {

  private jsonUrl: string = 'assets/data/articulos.json';

  constructor(private http: HttpClient) { }
  
  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.jsonUrl);
  }
}