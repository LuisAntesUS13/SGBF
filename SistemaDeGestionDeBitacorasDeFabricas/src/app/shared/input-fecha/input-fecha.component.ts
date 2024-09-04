import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-input-fecha',
  templateUrl: './input-fecha.component.html',
  styleUrls: ['./input-fecha.component.scss'],
})
export class InputFechaComponent {
  @Output() valor: EventEmitter<string> = new EventEmitter();
  @Input() setFecha!: string; //dd/mm/yyyy
  @Input() campoHabilitado: boolean = true; 

  
  semana: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];

  meses: any[] = [
    { id: '1', mes: 'Enero' },
    { id: '2', mes: 'Febrero' },
    { id: '3', mes: 'Marzo' },
    { id: '4', mes: 'Abril' },
    { id: '5', mes: 'Mayo' },
    { id: '6', mes: 'Junio' },
    { id: '7', mes: 'Julio' },
    { id: '8', mes: 'Agosto' },
    { id: '9', mes: 'Septiembre' },
    { id: '10', mes: 'Octubre' },
    { id: '11', mes: 'Noviembre' },
    { id: '12', mes: 'Diciembre' },
  ];

  anios: number[] = [];
  mountSelect!: any[];
  mostrar: boolean = false;
  Formulario!: FormGroup;
  mostrarTooltip: boolean = false;
  tooltip: string = "dd/mm/yyyy"
  mostrarMensaje: boolean = false;

  constructor(private fb: FormBuilder) {
    moment.locale('es');
    this.generaanios();
    const fechaActual = moment().format('DD/MM/YYYY');
    const fecha = fechaActual.split('/');
    const ObjectDate = moment.utc(`${fecha[2]}-${fecha[1]}-${fecha[0]}`);
    this.generarFormulario(ObjectDate);
  }

  ngOnChanges() {
    if (this.setFecha != '' && this.setFecha != null) {
      try{
        const fecha = this.setFecha.split('/');
        const ObjectDate = moment.utc(`${fecha[2]}-${fecha[1]}-${fecha[0]}`);
        const fechaString = ObjectDate.format("DD/MM/YYYY")
        this.generarFormulario(ObjectDate);
        this.Formulario.get('fecha_string')?.setValue(fechaString);
        this.Formulario.get('fecha_seleccionada')?.setValue(ObjectDate);
        this.validaFecha();
      }catch (ex) {

      }
    } 
    if(this.setFecha == '' || this.setFecha == null){
      this.Formulario.get('fecha_string')?.setValue("");
    }

    if (this.campoHabilitado) {
      this.Formulario.get('fecha_string')?.enable();
    } else {
      this.Formulario.get('fecha_string')?.disable();
    }
  }

  cambioFechaManual(){
    this.validaFecha();
  }

  generarFormulario(fechaActual: moment.Moment) {
    this.Formulario = this.fb.group({
      dia: [fechaActual.date()],
      mes: [fechaActual.month() + 1],
      anio: [fechaActual.year()],
      fecha_string: [''],
      fecha_seleccionada: [fechaActual],
    });
    if (this.campoHabilitado) {
      this.Formulario.get('fecha_string')?.enable();
    } else {
      this.Formulario.get('fecha_string')?.disable();
    }
    this.getDayFromDate(
      this.Formulario.get('mes')?.value,
      this.Formulario.get('anio')?.value,
    );
  }

  cambioAnio(event: Event) {
    this.Formulario.get('anio')?.setValue(
      (event.target as HTMLInputElement).value,
    );
    const ObjectDate = moment.utc(
      `${this.Formulario.get('anio')?.value}-${this.Formulario.get('mes')?.value.toString().padStart(2, '0')}-01`,
    );
    this.Formulario.get('fecha_seleccionada')?.setValue(ObjectDate);

    this.getDayFromDate(
      this.Formulario.get('mes')?.value,
      this.Formulario.get('anio')?.value,
    );
  }

  cambioMes(event: Event) {
    this.Formulario.get('mes')?.setValue(
      (event.target as HTMLInputElement).value,
    );
    const ObjectDate = moment.utc(
      `${this.Formulario.get('anio')?.value}-${this.Formulario.get('mes')?.value.toString().padStart(2, '0')}-01`,
    );
    this.Formulario.get('fecha_seleccionada')?.setValue(ObjectDate);

    this.getDayFromDate(
      this.Formulario.get('mes')?.value,
      this.Formulario.get('anio')?.value,
    );
  }

  generaanios() {
    const year = moment().year();
    const inicio = year - 100;
    const final = year + 100;
    let contador = inicio;
    do {
      contador++;
      this.anios.push(contador);
    } while (contador != final);
  }

  getDayFromDate(mount: number, year: number) {
    const startDate = moment.utc(
      `${year}-${mount.toString().padStart(2, '0')}-01`,
    );
    const endDate = startDate.clone().endOf('month');
    const diffDays = endDate.diff(startDate, 'days', true);
    const numberDays = Math.round(diffDays);
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const diaFormato = a > 9 ? a : '0' + a;
      const dayObject = moment(
        `${year}-${mount.toString().padStart(2, '0')}-${diaFormato}`,
      );
      return {
        name: dayObject.format('dddd'),
        value: a,
        indexWeek: dayObject.isoWeekday(),
      };
    });
    this.mountSelect = arrayDays;
  }

  changeMount(flag: any) {
    if (flag < 0) {
      const prevDate = this.Formulario.get('fecha_seleccionada')
        ?.value.clone()
        .subtract(1, 'month');
      this.Formulario.get('mes')?.setValue(prevDate.format('M'));
      this.Formulario.get('anio')?.setValue(prevDate.format('YYYY'));
      const ObjectDate = moment.utc(
        `${this.Formulario.get('anio')?.value}-${this.Formulario.get('mes')?.value.toString().padStart(2, '0')}-01`,
      );
      this.Formulario.get('fecha_seleccionada')?.setValue(ObjectDate);

      this.getDayFromDate(
        this.Formulario.get('mes')?.value,
        this.Formulario.get('anio')?.value,
      );
    } else {
      const nextDate = this.Formulario.get('fecha_seleccionada')
        ?.value.clone()
        .add(1, 'month');
      this.Formulario.get('mes')?.setValue(nextDate.format('M'));
      this.Formulario.get('anio')?.setValue(nextDate.format('YYYY'));
      const ObjectDate = moment.utc(
        `${this.Formulario.get('anio')?.value}-${this.Formulario.get('mes')?.value.toString().padStart(2, '0')}-01`,
      );
      this.Formulario.get('fecha_seleccionada')?.setValue(ObjectDate);

      this.getDayFromDate(
        this.Formulario.get('mes')?.value,
        this.Formulario.get('anio')?.value,
      );
    }
  }

  clickDay(day: any) {
    const mountYear =
      this.Formulario.get('fecha_seleccionada')?.value.format('YYYY-MM');
    const dia = day.value > 9 ? day.value : '0' + day.value;
    const parse = `${mountYear}-${dia}`;
    const ObjectDate = moment(parse);
    this.Formulario.get('dia')?.setValue(day.value);
    this.Formulario.get('fecha_string')?.setValue(
      moment.utc(ObjectDate).format('DD/MM/YYYY'),
    );
    this.Formulario.get('fecha_seleccionada')?.setValue(ObjectDate);
    this.mostrar = false;
    this.validaFecha();
    
    this.valor.emit(this.Formulario.get('fecha_string')?.value);
  }

  mostrarCalendario() {
    if(this.campoHabilitado){
      this.mostrar = true;
    }
  }

  onBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
        // input.focus();
        this.validaFecha();
  }

  validaFecha(){
    let fecha = this.Formulario.get('fecha_string')?.value
    const regex = /^((0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](19|20)\d\d)?$/;

    if(fecha == ""){
      this.mostrarTooltip = false;
      this.mostrarMensaje = false;
      this.mostrar = false;

     } else if (regex.test(fecha)) {
      this.mostrarTooltip = false;
      this.mostrarMensaje = false;
      this.tooltip =  "dd/mm/yyyy";

      const formato = 'DD/MM/YYYY';
      // Intenta analizar la fecha
      const fechaMoment = moment(fecha, formato, true);
    
      // Verifica si es una fecha válida y el formato es correcto
      if(fechaMoment.isValid()){
        this.mostrarTooltip = false;
        this.mostrarMensaje = false;
        this.mostrar = false
      } else {
        this.mostrarTooltip = true;
        this.mostrarMensaje = true;
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 2000);
      }

    } else {
      this.mostrarTooltip = true;
      this.tooltip = "Formato incorrecto";
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 2000);
    }
  }
}
