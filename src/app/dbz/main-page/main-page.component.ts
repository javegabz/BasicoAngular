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
    nombre:'Trunks',
    poder: 7000,
  }

  agregar(){
    console.log(this.nuevo);
  }  

  cambiarNombre( event:any)
  {
    console.log(event.target.value);
    //console.log(event);
  }

}
