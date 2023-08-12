import { Component } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css','../proveedores/proveedores.component.css'],
  providers: [
    SolicitudService
  ]
})
export class PagosComponent {
  public allPays:any = []
  public isalerton:boolean=false;
  constructor(public solicService:SolicitudService){ 
    this.getAllPays()
   }

//    "auxiliar": 1,
//    "cuentaContable": 1,
//    "descripcion": "WebService Compras",
//    "estado": "R",
//    "fechaRegistro": "2023-08-12",
//    "id": 2758,
//    "monto": 10,
//    "tipoMovimiento": "CR"
//  
 
   getResumen(cuentaC:any,allPays:any){
    console.log(cuentaC);
    console.log(allPays);
    const calculoTotalProveedor = { 
      descripcion: "Pay services - Jeremias bank",
      auxiliar: 9,
      cuentaDB:81,
      cuentaCR:7,
    
   
     
      // tipoMovimiento: "CR",
  monto: 0,
    };
    let montoband=0
    for(let i =0; i<allPays.length; i++){
      if(allPays[i].cuentaContable == cuentaC.cuentaContable){
        console.log(allPays[i].monto);
         montoband +=allPays[i].monto
        calculoTotalProveedor.monto=montoband
      }
    }

    console.log(calculoTotalProveedor);
    ajax.post('http://129.80.203.120:5000/post-accounting-entries', calculoTotalProveedor).subscribe((e)=>{
      console.log({ok:e.response});
      this.isalerton=true;
      setTimeout(()=>{
        this.isalerton=false;
      },2000)
    })
    
  }
  

  getAllPays(){
    this.solicService.pays().subscribe((data)=>{
      // console.log(data.response);
      this.allPays=data.response;
      
    })
  }


}
