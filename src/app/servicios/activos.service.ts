import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  url='http://localhost/internalinventory/src/app/modulos/php/activos/';

  constructor(private http:HttpClient) { }

  consultar () {
    return this.http.get(`${this.url}consulta.php`);    
  }

  consultar_marca () {
    return this.http.get(`${this.url}consulta_marca.php`);    
  }

  consultar_tipo () {
    return this.http.get(`${this.url}consulta_tipo.php`);    
  }

  consultar_ciudad () {
    return this.http.get(`${this.url}consulta_ciudad.php`);    
  }

  consultar_modelo () {
    return this.http.get(`${this.url}consulta_modelo.php`);    
  }

  consultar_empleados () {
    return this.http.get(`${this.url}consulta_empleados.php`);    
  }

  consultar_departamento () {
    return this.http.get(`${this.url}consulta_departamento.php`);    
  }

  insertar(datos:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(datos));
  }

  /*eliminar(id:number){
    return this.http.get(`{$this.url}eliminar.php?id=${id}`);
  }

  edit(datos:any) {
    return this.http.post(`${this.url}editar.php`,  JSON.stringify(datos));
  }*/

}
