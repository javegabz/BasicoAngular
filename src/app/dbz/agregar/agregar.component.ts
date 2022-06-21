import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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


  /*@Output()
  onNuevoPersonaje: EventEmitter<iPersonaje> = new EventEmitter();*/

  constructor (private dbzService:DbzService){}

  agregar(){
     if (this.nuevo.nombre.trim().length===0){return;}
       //this.personajes.push(this.nuevo);
       console.log(this.nuevo);
       //this.onNuevoPersonaje.emit(this.nuevo);

       this.dbzService.agregarPersonaje(this.nuevo);
   
       this.nuevo= {
         nombre:'',
         poder: 0,
       }
    // }
   }  



}


