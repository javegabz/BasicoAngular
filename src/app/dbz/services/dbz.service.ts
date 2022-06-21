import { Injectable } from "@angular/core";
import { iPersonaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: iPersonaje[] = [
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
      
    get personajes():iPersonaje[]{
        return [...this._personajes];
    }  

    constructor(){
        console.log('Servicio Inicializado');
    }

    agregarPersonaje(personaje:iPersonaje){
        this._personajes.push(personaje);
    }


}