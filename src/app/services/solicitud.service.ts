import { Injectable } from "@angular/core"; 
import { ajax } from 'rxjs/ajax';

 
 @Injectable()
export class SolicitudService{

    

    all(){
        return ajax.get('https://localhost:7279/solicitudes/all')
    }

    setSolicitud( ){
        return ajax.post(` `)
        
    }
} 


