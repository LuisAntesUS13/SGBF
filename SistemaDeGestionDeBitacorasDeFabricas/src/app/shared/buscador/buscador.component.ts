import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  @Input() datos: any[] | null = null; //Datos para realizar busqueda
  @Input() setValor: string = "";
  @Input() llaves: string[] = []; // El primer valor sera la llave a obtener, los  demas son los  campos que se  mostraran visualmente y el filtro aplica a todos  los campos  
  @Input() campoHabilitado: boolean = true; 
  @Output() valor: EventEmitter<string> = new EventEmitter();
  Formulario!: FormGroup;
  mostrar: boolean = false;

  datosFiltrados: any[] = [];
  constructor(private fb: FormBuilder) {
    this.generarFormulario();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( this.setValor != "") {
      this.generarFormulario();
      this.Formulario.get('busqueda')?.setValue(this.setValor);
    } else {
      this.Formulario.get('busqueda')?.setValue("");
    }

    if (this.campoHabilitado) {
      this.Formulario.get('busqueda')?.enable();
    } else {
      this.Formulario.get('busqueda')?.disable();
    }
  }

  generarFormulario() {
    this.Formulario = this.fb.group({
      busqueda: [''],
    });
  }

  cambioBusqueda() {
    if (this.datos != null && this.datos.length > 1) {
      if (this.Formulario.get('busqueda')?.value == '') {
        this.mostrar = false;
        this.valor.emit("");
      } else {
        this.datosFiltrados = [];
        if(this.validandoExisteCampo() && this.validandoExisteCampoBuqueda()){
          this.mostrar = true;
          const regex = new RegExp(this.Formulario.get('busqueda')?.value, 'i');
          this.datosFiltrados = this.datos
          .filter(dato => 
            this.llaves.some(campo => regex.test(dato[campo])) // Filtrar datos por varios campos
          )
          .map(dato => {
            // Crear una cadena concatenando todos los valores de las claves en llaves
            const valores = this.llaves.slice(1).map(key => dato[key]).filter(value => value !== undefined);
            return { identificador: dato[this.llaves[0]], valor: valores.join(' - ') }; // Unir los valores con un espacio
          });
          this.mostrar = this.datosFiltrados.length > 0? true: false;
        }
      }
    } else {
      this.mostrar = false;
     // this.Formulario.get('busqueda')?.setValue("")
      this.valor.emit("");
    }
  }

  seleccion(dato: any){
    this.mostrar = false;
    this.Formulario.get('busqueda')?.setValue(dato.valor);
    this.valor.emit(dato.identificador);
  }

  validandoExisteCampo() {
    for (const elemento of this.llaves) {
      let arreglo = this.datos != null ? this.datos : [];
      const existeTipoAccion = arreglo.some((item) =>
        item.hasOwnProperty(elemento)
      );
  
      if (!existeTipoAccion) {
        return false; // Retorna false si algún parámetro no existe
      }
    }
  
    return true; // Retorna true si todos los parámetros existen
  }

  validandoExisteCampoBuqueda() {
    for (const elemento of this.llaves) {
      let arreglo = this.datos != null ? this.datos : [];
      const existeTipoAccion = arreglo.some((item) =>
        item.hasOwnProperty(elemento)
      );
  
      if (!existeTipoAccion) {
        return false; // Retorna false si algún parámetro no existe
      }
    }
  
    return true; // Retorna true si todos los parámetros existen
  }



}
