import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    operadorA: number;
    operadorB: number;
    

    @Output() resultado = new EventEmitter<number>();

    sumar():void {
        //this.resultado = this.operadorA + this.operadorB
        let resultadoSuma = this.operadorA + this.operadorB;
        this.resultado.emit(resultadoSuma);
    }

    restar():void {
        //this.resultado = this.operadorA - this.operadorB
        let resultadoResta = this.operadorA - this.operadorB;
        this.resultado.emit(resultadoResta);
    }
}
