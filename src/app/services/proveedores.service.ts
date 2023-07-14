import { Injectable } from "@angular/core";
import { pluck } from "rxjs";
import { ajax } from 'rxjs/ajax';

 
 @Injectable()
export class ProveedoresService{

    constructor(){ }

    all(){
        return fetch('https://localhost:7279/proveedores/all')
    }

    setProveedor(nombre:string,tipo:string,cedula:string,balance:number,cuentaContable:number,estado:string){
        return ajax.post(`https://localhost:7279/proveedores/nuevo?nombre=${nombre}&tipo=${tipo}&Cedula=${cedula}&balance=${balance}&cuentaContable=${cuentaContable}&estado=${estado}`)  
    }

    deleteProveedor(id:number){
        return ajax.post(`https://localhost:7279/proveedores/delete/?id_proveedor=${id}`)  
    }


    updateProveedor(id:number,nombre:string,tipo:string,cedula:string,balance:number,cuentaContable:number,estado:string){
        return ajax.post(`https://localhost:7279/proveedores/update?id_proveedor=${id}&nombre=${nombre}&tipo=${tipo}&Cedula=${cedula}&balance=${balance}&cuentaContable=${cuentaContable}&estado=${estado}`)  
    }

    
    byid(id:number){
        return ajax.get(`https://localhost:7279/proveedores/byid?id_proveedor=${id}`)
    }
    
} 


