import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PAGINACION } from '../constantes/constantes';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss'],
})
export class PaginadorComponent {
  pagina_actual: number = PAGINACION.pagina_inicial;
  total_paginas: number = 0;
  total_registros: number = 0;
  registros_por_pagina: number = PAGINACION.registros_por_pagina;

  registro_inicial: number = 0;
  registro_final: number = 0;

  primero: boolean = true;
  atras: boolean = true;
  siguiente: boolean = true;
  ultimo: boolean = true;


  @Output() cambio = new EventEmitter<any>();
  @Input() datos: any[] = [];

  constructor() {
    this.asignaPaginador();
  }

  ngOnChanges(changes: any) {
    if (
      changes['datos'].currentValue != undefined &&
      changes['datos'].currentValue != null
    ) {
      this.asignaPaginador();
    }
  }

  asignaPaginador() {
    if(this.datos != null && this.datos.length > 0){
      this.total_paginas = this.datos[0].total_paginas;
      this.total_registros = this.datos[0].total_registros;
      this.pagina_actual = this.datos[0].pagina_actual;
      console.log(this.registros_por_pagina);
      console.log(this.pagina_actual);
      console.log(this.registros_por_pagina * this.pagina_actual);
      console.log(((this.registros_por_pagina * this.pagina_actual) - this.registros_por_pagina) + 1);
      this.registro_inicial = (((this.registros_por_pagina * this.pagina_actual) - this.registros_por_pagina) + 1);
      this.registro_final = ((this.registros_por_pagina * this.pagina_actual) > this.total_registros) ? this.total_registros : (this.registros_por_pagina * this.pagina_actual);

      if ( this.total_paginas == 1) {
        this.primero = false;
        this.atras = false;
        this.siguiente = false;
        this.ultimo = false;
      } else {
        if( this.pagina_actual == 1){
          this.primero = false;
          this.atras = false;
          this.siguiente = true;
          this.ultimo = true;
        } else if (this.pagina_actual ==  this.total_paginas ){
          this.primero = true;
          this.atras = true;
          this.siguiente = false;
          this.ultimo = false;
        } else {
          this.primero = true;
          this.atras = true;
          this.siguiente = true;
          this.ultimo = true;
        }
       
      }
    } else {
      this.primero = false;
      this.atras = false;
      this.siguiente = false;
      this.ultimo = false;
      this.total_paginas = 0;
      this.total_registros = 0;
      this.registro_inicial = 0;
      this.registro_final = 0;
    }

  }

  CambioPaginador() {
    this.pagina_actual = PAGINACION.pagina_inicial;
    this.cambio.emit({
      pagina_actual:  this.pagina_actual,
      registros_por_pagina: this.registros_por_pagina,
    });
  }

  Paginador(accion: number) {
    switch (accion) {
      case 1:
        this.pagina_actual = 1;
        break;
      case 2:
        this.pagina_actual -= 1;
        break;
      case 3:
        this.pagina_actual += 1;
        break;
      case 4:
        this.pagina_actual = this.total_paginas;
        break;
      default:
        break;
    }
    
    this.cambio.emit({
      pagina_actual:  this.pagina_actual,
      registros_por_pagina: this.registros_por_pagina,
    });
  }
}
