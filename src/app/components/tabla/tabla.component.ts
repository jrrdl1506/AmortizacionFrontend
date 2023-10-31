import { Component } from '@angular/core';
import { AmortizationService } from 'src/app/services/amortization.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  prestamoForm:FormGroup;
  account:any;
  tabla:any;
  prestamos:any[]=[];

  constructor(
    private Ls:LocalstorageService,
    private Amort:AmortizationService,
    private router:Router,
    private fb:FormBuilder
    ){
    // Inicializar formularios
    this.prestamoForm = this.fb.group({
      periodo:['',Validators.required],
      cuota:['',Validators.required],
      interes:['',Validators.required],
      capital:['',Validators.required],
      saldo:['',Validators.required],
    });

    
    // Inicializar tabla
    if(Ls.getUser()==null){
      router.navigate(['/login']);
    }
    else{
      this.account=Ls.getUser();
      this.Amort.getAmortizacion(this.account).subscribe((data:any)=>{
        this.tabla=data;
        this.prestamos=this.tabla.params;
        console.log(this.tabla,'params');
        console.log(this.prestamos,'params');
        
      });

    }

  }

  ngOnInit(){
    console.log(this.account,'obje');
    // this.prestamos = this.tabla
  }

  openForm(){
    var docu = document.getElementById('idForm');
    if(docu){
      docu.classList.remove('hidden');
    }
  }

  closeForm(){
    var docu = document.getElementById('idForm');
    if(docu){
      docu.classList.add('hidden');
    }
  }

  altaPrestamo(){
    const PRESTAMO = {
      periodo: this.prestamoForm.get('periodo')?.value,
      cuota: this.prestamoForm.get('cuota')?.value,
      interes:this.prestamoForm.get('interes')?.value,
      capital:this.prestamoForm.get('capital')?.value,
      saldo:this.prestamoForm.get('saldo')?.value
      
    }

    console.log(PRESTAMO,'prestamo');
    this.Amort.addPrestamo(this.account._id,PRESTAMO).subscribe((data:any)=>{
      console.log(data,'res');
    });
  }

  






}
