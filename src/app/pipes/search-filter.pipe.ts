import { Pipe, PipeTransform } from '@angular/core';
import { proveedoresI } from '../interfaces/proveedoresI';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value:proveedoresI[], search: string) {
     
    return value.filter((element)=>element.cedula.includes(search) || element.nombre.toLowerCase().includes(search));
  }

}
