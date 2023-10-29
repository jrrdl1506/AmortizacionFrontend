
import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  
  constructor(private fb:FormBuilder, http:HttpClient){
    this.loginForm = this.fb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required],
     
    });
  }



  login(){
    const USUARIO = {
      usuario: this.loginForm.get('usuario')?.value,
      contraseña: this.loginForm.get('contraseña')?.value
      
    }

      // this.userService.authUser(USUARIO).subscribe((data:any) =>{

      // });
  }
}
