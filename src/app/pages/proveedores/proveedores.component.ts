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

  public isAlertAddUpdateActive:boolean=false
  public isAlertNotAddUpdateActive:boolean=false;
  public isAlertRemovedActive:boolean=false;

  public datasearch:string=''

  public nombre:string = ''
  public tipo:string = 'Fisico'
  public cedula:string = ''
  public balance:number = 0
  public cuentaContable:number = Number(String((Math.random() * 100 + 390)).substring(4,12))
  public estado:string = 'A'
  
  public nombreUpdate:string = ''
  public idProvUpdate:number=0
  public tipoUpdate:string = 'Fisico'
  public cedulaUpdate:string = ''
  public balanceUpdate:number = 0
  public cuentaContableUpdate:number = 0
  public estadoUpdate:string = 'A'


  public allProveedores:proveedoresI[] = []
  constructor(public proveedoresService:ProveedoresService){
    this.getAllProveedores()
    
  }

  


  setProveedor(){
 
    if(this.nombre != '' && this.tipo!= ''&&this.cedula.length==10 && this.balance >0  &&  this.cuentaContable >0){

     
      
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



  deleteProv(){
    this.proveedoresService.deleteProveedor(this.idProvUpdate).subscribe((e)=>{
      this.getAllProveedores()
      this.isAlertRemovedActive=true
      setTimeout(()=>{
        this.isAlertRemovedActive=false
      },2000)
    })
  }


  openUpdateProv(prov:any){
    
    // transfiriendo datos actuales al modal actualizador de datos
    this.idProvUpdate=prov.proveedorId
    this.nombreUpdate=prov.nombre;
    this.tipoUpdate = prov.tipo;
    this.cedulaUpdate = prov.cedula;
    this.balanceUpdate = prov.balance;
    this.cuentaContableUpdate = prov.cuentaContable;
    this.estadoUpdate = prov.estado;
    
  }

  
  updateProv(){

    
    this.proveedoresService.updateProveedor(this.idProvUpdate,this.nombreUpdate,this.tipoUpdate,
      this.cedulaUpdate,this.balanceUpdate,this.cuentaContableUpdate,this.estadoUpdate).subscribe((e)=>{
      this.getAllProveedores()
      this.isAlertAddUpdateActive=true
      setTimeout(()=>{
        this.isAlertAddUpdateActive=false
      },2000)
    })


  }




  getAllProveedores(){
    this.proveedoresService.all().then((e)=>{
      
      e.json().then((e)=>{
        this.allProveedores=e
        

      })
      
    })
  }
}

 