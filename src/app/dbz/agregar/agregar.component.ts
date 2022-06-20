import { Component, Input } from '@angular/core';
import { iPersonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent   {

  @Input()
  personajes:iPersonaje[]=[];

  @Input()
  nuevo:iPersonaje={
    nombre:'',
    poder: 0,
  }


  agregar(){
    // if (this.nuevo.nombre.trim().length!==0){
       this.personajes.push(this.nuevo);
       console.log(this.nuevo);
   
       this.nuevo= {
         nombre:'',
         poder: 0,
       }
    // }
   }  



}


