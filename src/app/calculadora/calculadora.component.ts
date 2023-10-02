import { Component } from '@angular/core';

@Component({
    selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
    operadorA = 0;
    operadorB = 0;
    resultado = 0;

    sumar(){
        this.resultado = this.operadorA + this.operadorB
    }

    restar(){
        this.resultado = this.operadorA - this.operadorB
    }
}
