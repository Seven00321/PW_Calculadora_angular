import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Practica Angular #1';

    resultado: number;

    nuevoResultado(resultado: number){
        this.resultado = resultado;
    }
}
