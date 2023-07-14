import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { proveedoresI } from 'src/app/interfaces/proveedoresI';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
  providers: [
    ProveedoresService
  ]
})
export class ProveedoresComponent {
  public isAlertAddActive:boolean=false
  public isAlertNotAddActive:boolean=false;

  public nombre:string = ''
  public tipo:string = 'Fisico'
  public cedula:string = ''
  public balance:number = 0
  public cuentaContable:number = 0
  public estado:string = 'A'
  
 

  public allProveedores:proveedoresI[] = []
  constructor(public proveedoresService:ProveedoresService){
    this.getAllProveedores()
  }




  setProveedor(){
 
    if(this.nombre != '' && this.tipo!= ''&&this.cedula!= '' && this.balance >0  &&  this.cuentaContable >0){

     
      
      this.proveedoresService.setProveedor(
        this.nombre,this.tipo,this.cedula,this.balance, this.cuentaContable, this.estado
      ).subscribe((e)=>{
        
        this.isAlertAddActive=true;
        setTimeout(()=>{ this.isAlertAddActive=false;},2500)
        this.getAllProveedores()
      
        this.nombre="";
        this.tipo="Fisico";
        this.cedula="";
        this.balance=0;
        this.cuentaContable=0;
        this.estado="A";
         
        
      })
 
    }
    else{

      this.isAlertNotAddActive=true;
      setTimeout(()=>{ this.isAlertNotAddActive=false;},2500)

    }



  }





  getAllProveedores(){
    this.proveedoresService.all().then((e)=>{
      
      e.json().then((e)=>{
        this.allProveedores=e
        

      })
      
    })
  }
}

 