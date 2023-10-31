import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }


  saveUser(user:any){
    
    const userString = JSON.stringify(user);
   
    localStorage.setItem('usuario',userString);
  }

  getUser(){
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      return JSON.parse(usuarioString);
    } 
    else {
      return null;
    }
  }

  deleteUser(){
    localStorage.removeItem('usuario');
  }

}
