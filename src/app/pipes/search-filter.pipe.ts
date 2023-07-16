import { Pipe, PipeTransform } from '@angular/core';
import { proveedoresI } from '../interfaces/proveedoresI';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value:proveedoresI[], search: string) {
     
    return (search.length>0)==true? value.filter((element)=>element.cedula.includes(search.trim()) || element.nombre.toLowerCase().includes(search.trim())) : value;
    
  }

}
