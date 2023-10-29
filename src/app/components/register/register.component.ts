import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup;
  
  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required],
      repetirContraseña:['',Validators.required],
    })
  }


  registerUsuario(){
    const USUARIO = {
      usuario: this.registerForm.get('usuario')?.value,
      contraseña: this.registerForm.get('contraseña')?.value, 
      repetirContraseña: this.registerForm.get('repetirContraseña')?.value     
    }

    console.log(USUARIO,'El usuario');

  }


}
