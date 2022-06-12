import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
                <h1>{{titulo}}</h1>
                <h3>La base es: <strong>{{base}}</strong></h3>
                <button (click)="acomular(+base);">+ {{base}}</button>
                <span>{{numero}}</span>
                <button (click)="acomular(-base);">- {{base}}</button>
                `
})
export class ContadorComponent {
  titulo = 'Contado App';
  numero:number=10;
  base:number = 5;
  //sumar ():number => { return this.numero += this.numero};
  acomular (valor:number){
    this.numero += valor;
  }
} 