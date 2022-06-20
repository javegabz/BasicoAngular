import { Component, OnInit, Provider } from '@angular/core';
import { iPersonaje } from '../interfaces/dbz.interface';



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
  personajes: iPersonaje[] = [
    {
      nombre:'Gokú',
      poder: 70000,
    },
    {
      nombre:'Vegeta',
      poder: 65000,
    },
    {
      nombre:'trunks',
      poder: 30000,
    },
    {
      nombre:'Gothen',
      poder: 30000,
    },
    {
      nombre:'Gohan',
      poder: 65000,
    },
    {
      nombre:'Bills',
      poder: 1000000,
    },
  ];




  cambiarNombre( event:any)
  {
    console.log(event.target.value);
    //console.log(event);
  }


  agregarNuevoPersonaje( argumento:iPersonaje){
    this.personajes.push(argumento);
  }

}
