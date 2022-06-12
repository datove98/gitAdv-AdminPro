import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso:number = 50;
  @Input() btnClass:string = "btn-primary";

  @Output() valorSalida:EventEmitter<number> = new EventEmitter<number>();
  //@Input("valor") progreso:number = 50;
  // get getPorcentaje(){
  //   return `${this.progreso}%`
  // }

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  cambiarValor( valor: number ) :any{
 
    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
 
    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
 
    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso );
  }

  onChange( nuevoValor:number ){

    // if( nuevoValor >= 100 ) {
    //   this.progreso = 100;
    // } else if ( nuevoValor <= 0 ) {
    //   this.progreso = 0;
    // } else {
    //   this.progreso = nuevoValor;
    // }
    console.log(nuevoValor);
    console.log(this.progreso);
    this.progreso = nuevoValor;
    if( nuevoValor >= 100 ) {
        nuevoValor = 100
      } else if ( nuevoValor <= 0 ) {
        nuevoValor = 0;
      }
      console.log(nuevoValor);
    console.log(this.progreso);
    this.valorSalida.emit( this.progreso );
  }
}
