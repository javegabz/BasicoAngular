import { Component, OnInit, Provider } from '@angular/core';

interface iPersonaje {
  nombre:string;
  poder:number;
}

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
    nombre:'',
    poder: 0,
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
//anotacion
 
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

  cambiarNombre( event:any)
  {
    console.log(event.target.value);
    //console.log(event);
  }

}
