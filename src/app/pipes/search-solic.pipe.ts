import { Pipe, PipeTransform } from '@angular/core';
import { solicitudesI } from '../interfaces/solicitudesI';

@Pipe({
  name: 'searchSolic'
})
export class SearchSolicPipe implements PipeTransform {

  transform(value:solicitudesI[], search: string) {
     
    return (search.length>0)==true? value.filter((element)=>element.proveedorNombre.toLowerCase().includes(search.trim()) || String(element.cContableProveedor).toLowerCase().includes(search.trim())) : value;
    
  }

}
