import { Injectable } from "@angular/core"; 
import { ajax } from 'rxjs/ajax';

 
 @Injectable()
export class SolicitudService{

    

    all(){
        return ajax.get('https://localhost:7279/solicitudes/all')
    }

    setSolicitud( numeroSolicitud:number,fechaRegistro:string, estado:string, proveedorId:number, cContableProveedor :string,  monto:number, nombreProveedor:string){ // 
        return ajax.post(`https://localhost:7279/solicitudes/nuevo?numeroSolicitud=${numeroSolicitud}&fechaRegistro=${fechaRegistro}&estado=${estado}&proveedorId=${proveedorId}&cContableProveedor=${cContableProveedor}&monto=${monto}&nombreProveedor=${nombreProveedor}`)
        
    }
} 


