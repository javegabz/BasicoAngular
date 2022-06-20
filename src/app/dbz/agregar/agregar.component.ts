import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPersonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent   {

  /*@Input()
  personajes:iPersonaje[]=[];*/

  @Input()
  nuevo:iPersonaje={
    nombre:'',
    poder: 0,
  }


  @Output()
  onNuevoPersonaje: EventEmitter<iPersonaje> = new EventEmitter();

  agregar(){
    // if (this.nuevo.nombre.trim().length!==0){
       //this.personajes.push(this.nuevo);
       console.log(this.nuevo);
       this.onNuevoPersonaje.emit(this.nuevo);
   
       this.nuevo= {
         nombre:'',
         poder: 0,
       }
    // }
   }  



}


