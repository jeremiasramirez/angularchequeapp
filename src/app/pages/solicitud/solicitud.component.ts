import { Component } from '@angular/core';
import { interval, pluck, timer } from 'rxjs';
import { proveedoresI } from 'src/app/interfaces/proveedoresI';
import { solicitudesI } from 'src/app/interfaces/solicitudesI';
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

  public progressValue:number=0;
  public datasearch:string = ''
  public dataUpdate:solicitudesI 
  public dataNew:any
  public isLoadCards:boolean=false
  public cedulaVerified:string=''
  public proveedorByCedulaFinded:proveedoresI[]=[]
  public isProveedorFindedByCedula:boolean=false;
  public isProveedorFindedByCedulaLoad:boolean=false;
  public newMountForNewSolic:number=0

  constructor(public provService:ProveedoresService, public solicService:SolicitudService){
   this.getAllProveedores();
   this.getAllSolicitudes()
    
   this.dataUpdate={
      cContableProveedor:0,
      estado:'' ,
      fechaRegistro:new Date().toDateString(),
      id:0,
      monto:0,
      numeroSolicitud:0,
      proveedorId:0,
      proveedorNombre:''
    }
    

    this.dataNew={
      cContableProveedor:0,
      estado:'P' ,
      fechaRegistro:new Date().toDateString(),
      id:0,
      monto:0,
      numeroSolicitud:0,
      proveedorId:0,
      proveedorNombre:'',
      balance:0
    }


  }

  getAllSolicitudes(){
    this.isLoadCards=true;
    this.solicService.all().subscribe((e)=>{
      
      //  console.log(e.response);
       this.allSolicitudes=e.response
       timer(200).subscribe(()=>this.isLoadCards=false)
       
      
    })
  
  }


  clearVerifiedAndCreateProveedor(){
    this.proveedorByCedulaFinded=[]
    this.proveedorByCedulaFinded[0]==null
    this.cedulaVerified=''
    this.newMountForNewSolic=0
    this.dataNew={}
  }

  setSolicitud(){
    
     
    if(this.newMountForNewSolic <= this.dataNew.balance ){
 
      this.solicService.setSolicitud(this.dataNew.numeroSolicitud,this.dataNew.fechaRegistro,
        this.dataNew.estado, this.dataNew.proveedorId, this.dataNew.cContableProveedor,this.newMountForNewSolic,
        this.dataNew.proveedorNombre) 
        .subscribe((_)=>{
          this.getAllSolicitudes();
          
          this.isAlertAddActive=true
          timer((1000)).subscribe(()=> this.isAlertAddActive=false)
 
        })

    }
 
  }


  verifiedProveedor(){
    this.progressValue=0
    if(this.cedulaVerified.trim()){
      if(this.cedulaVerified){
        
      this.proveedorByCedulaFinded=[]
      this.provService.bycedula(this.cedulaVerified).subscribe((e:any)=>{
      
        this.proveedorByCedulaFinded=e.response

          if(this.proveedorByCedulaFinded[0]!=null){
            this.isProveedorFindedByCedulaLoad=true;
            timer(1000).subscribe(()=>this.isProveedorFindedByCedulaLoad=false)

            const x =interval(10).subscribe(()=>{
              this.progressValue+=1
              if(this.progressValue==100){
           
                x.unsubscribe()
             
              }
            })
          
            
            this.dataNew.numeroSolicitud=this.generateNewNumSolicitud()
          // this.dataNew.fechaRegistro = automatic
          // this.dataNew.estado = automatic 
          this.dataNew.proveedorId=this.proveedorByCedulaFinded[0].proveedorId
          this.dataNew.cContableProveedor=this.proveedorByCedulaFinded[0].cuentaContable
          this.dataNew.monto=this.newMountForNewSolic
          this.dataNew.balance=this.proveedorByCedulaFinded[0].balance
          this.dataNew.proveedorNombre=this.proveedorByCedulaFinded[0].nombre
          }
        
      
   
        if(e.response==false){
          this.isProveedorFindedByCedula=true
          timer((1000)).subscribe(()=>this.isProveedorFindedByCedula=false)
        }
      
      }, (es)=>{
        console.log(es);
        
        this.isProveedorFindedByCedula=true
        timer((1000)).subscribe(()=>this.isProveedorFindedByCedula=false)

      })
    }
  }

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

  openUpdateSolic(solic:any){
      console.log(solic);
      
    // transfiriendo datos actuales al modal actualizador de datos
    this.dataUpdate.proveedorNombre=solic.proveedorNombre
    this.dataUpdate.monto=solic.monto
    this.dataUpdate.id=solic.id,
    this.dataUpdate.estado=solic.estado,
    this.dataUpdate.fechaRegistro=solic.fechaRegistro,
    this.dataUpdate.proveedorId=solic.proveedorId
    this.dataUpdate.numeroSolicitud=solic.numeroSolicitud
  }
   generateNewNumSolicitud(){
    let numSolicitud:string = String(Math.random() * 100 + 390).substring(5,12)
    return numSolicitud;
  }

}
 
 