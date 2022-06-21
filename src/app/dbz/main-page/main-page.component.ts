import { Component, OnInit, Provider } from '@angular/core';
import { iPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
/*
  agregar(evento:any){
    evento.preventDefault();
    console.log("Hey!!!!");
  }*/
  nuevo:iPersonaje={
    nombre:'Maestro Roshi',
    poder: 20,
  }

  cambiarNombre( event:any)
  {
    console.log(event.target.value);
    //console.log(event);
  }

/*
  agregarNuevoPersonaje( argumento:iPersonaje){
    this.personajes.push(argumento);
  }*/

  //se quita por refactorización
  /*get personajes():iPersonaje[]{
    return this.dbzService.personajes;
  }*/
  
  constructor(){


}

}
 