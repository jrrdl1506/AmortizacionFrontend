import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private Api:ApiService) { }

  addUser(usuario:any){
    console.log(usuario,'obj authUser');

    return this.http.post(this.Api.URL + '/addUser',usuario);
  }

  getUsers(){
    return this.http.get(this.Api.URL + '/getUser');
  }

  authUser(usuario:any){
    // console.log(usuario,'obj authUser');
    return this.http.post(this.Api.URL + '/authUser',usuario);
  }

  getUser(id:String){
    return this.http.get(this.Api.URL + '/getUser/'+id);
  }

}
