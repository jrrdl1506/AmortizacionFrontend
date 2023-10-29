import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public URL = "http://localhost:4000/api/amortizadora/";
  constructor(private http:HttpClient) { }

  
  addUser(usuario:any){
    return this.http.post(this.URL + '/addUser',usuario);
  }

  getUsers(){
    return this.http.get(this.URL + '/getUser');
  }

  authUser(usuario:any){
    return this.http.post(this.URL + '/autUser',usuario);
  }

  getUser(id:String){
    return this.http.get(this.URL + '/getUser/'+id);
  }
}
