import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

   heroeBorrado:string="";
   heroes:string[] = ['Spiderman',
    'Ironman',
    'Hulk',
    'Thor'
  ];


  constructor() {
  }

  borrarHeroe(){
    //console.log("Borrar...");
    this.heroeBorrado=this.heroes.pop() || '';

  }


}
