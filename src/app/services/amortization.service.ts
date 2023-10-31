import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AmortizationService {
 

  constructor(private http:HttpClient, private Api:ApiService) { }

  addAmortizacion(usuario:any){
    return this.http.post(this.Api.URL +'/generaAmortizacion',usuario);
  }

  getAmortizacion(usuario:any){
    // console.log(this.Api.URL+'/obtenerAmortizacion/'+id);
    // console.log(id,'obj');
   return this.http.get(this.Api.URL+'/obtenerAmortizacion/'+ usuario._id);

  }

  addPrestamo(id:string,prestamo:any){
    return this.http.post(this.Api.URL+'/anadirPrestamo/'+id,prestamo);
  }

  getPrestamos(id:string){
    return this.http.get(this.Api.URL+'/obtenerPrestamos/'+id);
  }

}
