import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 26;

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        console.log('hey...');
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        console.log('hey...');
        this.edad = 40;
    }
}