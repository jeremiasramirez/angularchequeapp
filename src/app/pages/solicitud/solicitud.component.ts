import { Component } from '@angular/core';
import { proveedoresI } from 'src/app/interfaces/proveedoresI';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css','../proveedores/proveedores.component.css'],
  providers:[
    ProveedoresService,
    SolicitudService
  ]
}) 
export class SolicitudComponent {
  public isAlertAddActive:boolean=false
  public isAlertNotAddActive:boolean=false;
 
  public allProveedores:proveedoresI[] = []
  public allSolicitudes:any = []

  constructor(public provService:ProveedoresService, public solicService:SolicitudService){
   this.getAllProveedores();
   this.getAllSolicitudes()
 
   
  }

  getAllSolicitudes(){
    this.solicService.all().subscribe((e)=>{
      
      //  console.log(e.response);
       this.allSolicitudes=e.response
       
      
    })
  
  }


 

  getAllProveedores(){
    this.provService.all().then((e)=>{
      e.json().then((e)=>{
        this.allProveedores=e
      })
    })
  }

  getProveedorById(id:number){
    this.provService.byid(id).subscribe((e)=>{
       
      console.log(e.response);
        
    })
  
  }


  nuevaSolicitud(){
    let numSolicitud:string = String(Math.random() * 100 + 390)
    

  }

}


export interface solicitudesI{
  cContableProveedor:number
  estado:string
  fechaRegistro:string
  id:number
  monto:number
  numeroSolicitud:number
  proveedorId:number
}