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

    updateSolicitud(id:number,monto:number,  estado:string){ // 
        return ajax.post(`https://localhost:7279/solicitudes/update/?idSolic=${id}&monto=${monto}&estado=${estado}`)
        
    }

    newPay(nombre:string,cc:number,fecha:string,monto:number){
        return ajax.post(`https://localhost:7279/pago/nuevo?nombreProv=${nombre}&cc=${cc}&fecha=${fecha}&monto=${monto}`)
    }

    pays(){
        return ajax.get(`https://localhost:7279/pago/all`)
    }
     
} 




