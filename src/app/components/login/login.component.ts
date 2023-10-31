
import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  account:any;
  
  constructor(private fb:FormBuilder,private  userService:UserService,private router:Router,private Ls:LocalstorageService){
    this.loginForm = this.fb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required],
     
    });
  }



  login(){
    var user:any=null;
    const USUARIO = {
      usuario: this.loginForm.get('usuario')?.value,
      password: this.loginForm.get('contraseña')?.value
      
    }

    this.userService.authUser(USUARIO).pipe(
      switchMap((data: any) => {
        this.account = data;
        console.log(data,'cuentaGuardar');

        this.Ls.saveUser(this.account);
        return of(data); // Usamos 'of' para emitir los datos para que se pueda continuar el flujo
      }),
      tap(() => {
        Swal.fire("Bienvenido", "Te has logeado", 'success');
      })
    ).subscribe(
      () => {
        // Aquí puedes manejar cualquier otro código que necesites después de la autenticación exitosa
    
        // Finalmente, después de manejar todo, realizamos la navegación
        this.router.navigate(['/home']).then(() => {
          console.log('Navegación completada');
        });
      },
      (error) => {
        Swal.fire("Error", "Ocurrió un error durante la autenticación", 'error');
      }
    );
    

  }




}
