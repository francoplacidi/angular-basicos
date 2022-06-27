import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //const heroeBorrado = this.heroes.shift();
    //console.log(heroeBorrado);   Muestra los datos borrados.

    this.heroeBorrado = this.heroes.shift() || '';
  }
}
