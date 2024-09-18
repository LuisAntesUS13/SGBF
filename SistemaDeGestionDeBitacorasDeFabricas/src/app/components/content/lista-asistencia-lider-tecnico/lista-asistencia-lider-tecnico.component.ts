import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-asistencia-lider-tecnico',
  templateUrl: './lista-asistencia-lider-tecnico.component.html',
  styleUrls: ['./lista-asistencia-lider-tecnico.component.css']
})
export class ListaAsistenciaLiderTecnicoComponent {

  showCamvasPrimario :boolean = false;

  tituloPrimario: string = "";
  mostrarConsultores: boolean = false;
  mostrarHrs: boolean = false;
  listaHoras :boolean = false;


  tipoSeleccionLider:boolean = false;
  guardadoLider:boolean = false;
  formularioLider!: FormGroup;



  constructor(private toastrService: ToastrService,
    private fb: FormBuilder,
  ){


  }

  datoPermisos :any= [];

  datosAsistencia = [
    {"total_paginas": 1, "pagina_actual": 1, "puesto": "Consultor", "nombre": "Miguel Angel Espinoza", "perfil": "Desarrollador Java Sr", "modal": true},
    {"total_paginas": 1, "pagina_actual": 1, "puesto": "Consultor", "nombre": "Omar Castro Ramirez", "perfil": "Desarrollador Java Sr", "modal": true},
    {"total_paginas": 1, "pagina_actual": 1, "puesto": "Consultor", "nombre": "Luis Eduardo Antes Villa", "perfil": "Desarrollador Java Sr", "modal": true},
  ]
  datosPermisos2 = [
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "17/09/2024", "inicioact": "9:00", "iniciocom": "15:15", "regresocom": "16:00", "terminoat": "19:01"},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "18/09/2024", "inicioact": "8:54", "iniciocom": "15:02", "regresocom": "15:53", "terminoat": "19:00"},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "19/09/2024", "inicioact": "8:56", "iniciocom": "15:00", "regresocom": "15:50", "terminoat": "19:05"},

  ]

  createFormPerfil() {
    this.formularioLider = this.fb.group({
      no_contrato: [''],
      lider_texnico: [''],
      nuevo_lider_texnico: [''],
      observaciones: [''],
    });
  }


  buscar(page: number){
    if (page == 1){
      this.datoPermisos = this.datosAsistencia;
    }
  }

  obtenerAsistencia(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual

    console.log(event.pagina_actual);
    this.buscar(page);
  }


  mostrarSeccionHoras(tipo:boolean, datos:any){
    this.createFormPerfil();
    this.tipoSeleccionLider = tipo;

    this.mostrarHrs = true;

    this.guardadoLider = false;
  }

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue === 'periodo9') {
      this.listaHoras = true; // Cambia listaHoras a false
    } else {
      this.listaHoras = false; // O cualquier otra lógica que necesites
    }
  }

  mostrarListaHoras(){
    this.listaHoras = true;
  }
  cerrarCamvasPrimario(){
    this.showCamvasPrimario = false;
    this.mostrarHrs = false;
    this.listaHoras = false;
  }

  guardar(){
    this.showCamvasPrimario = false;
    this.toastrService.success("Datos guardados correctamente");
  }

}
