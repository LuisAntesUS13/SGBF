import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  @Input() datos: any[] | null = null; //Datos para realizar busqueda
  @Input() llaveBusqueda: string = ''; // llave del campo de busqueda
  @Input() llaveResultado: string[] = []; // llaves del campo de resultado, el primero debera ser el resultado que buscas y los demas solo referencias visuales
  @Output() valor: EventEmitter<string> = new EventEmitter();
  Formulario!: FormGroup;
  mostrar: boolean = false;

  datosFiltrados: any[] = [];
  constructor(private fb: FormBuilder) {
    this.generarFormulario();
  }

  generarFormulario() {
    this.Formulario = this.fb.group({
      busqueda: [''],
    });
  }

  cambioBusqueda() {
    if (this.datos != null && this.datos.length > 0) {
      if (this.Formulario.get('busqueda')?.value == '') {
        this.mostrar = false;
        this.valor.emit("");
      } else {
        if(this.validandoExisteCampo() && this.validandoExisteCampoBuqueda()){
          this.mostrar = true;
          const regex = new RegExp(this.Formulario.get('busqueda')?.value, 'i');
          this.datosFiltrados = this.datos
          .filter(dato => regex.test(dato[this.llaveBusqueda])) // Filtrar datos
          .map(dato => {
            // Crear una cadena concatenando todos los valores de las claves en llaveResultado
            const valores = this.llaveResultado.map(key => dato[key]).filter(value => value !== undefined);
            return { identificador: dato[this.llaveResultado[0]], valor: valores.join(' - ') }; // Unir los valores con un espacio
          });
          this.mostrar = this.datosFiltrados.length > 0? true: false;
        }
      }
    } else {
      this.mostrar = false;
      this.Formulario.get('busqueda')?.setValue("")
      this.valor.emit("");
    }
  }

  seleccion(dato: any){
    this.mostrar = false;
    this.Formulario.get('busqueda')?.setValue(dato.valor);
    this.valor.emit(dato.identificador);
  }

  validandoExisteCampo() {
    for (const elemento of this.llaveResultado) {
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
    let arreglo = this.datos != null ? this.datos : [];
    return  arreglo.some((item) =>
      item.hasOwnProperty(this.llaveBusqueda)
    );; // Retorna true si todos los parámetros existen
  }
}
