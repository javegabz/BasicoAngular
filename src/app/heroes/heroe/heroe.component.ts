import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})



export class heroeComponent {
    nombre:string='ironman';
    edad:number=45;
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalzado() {
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre='spiderman';
    }
    cambiarEdad ():void{
        this.edad=30;
    }
}