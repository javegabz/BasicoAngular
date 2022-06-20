import { Component, Input } from '@angular/core';
import { iPersonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {
  @Input('data')
  personajes:iPersonaje[]=[];
}
