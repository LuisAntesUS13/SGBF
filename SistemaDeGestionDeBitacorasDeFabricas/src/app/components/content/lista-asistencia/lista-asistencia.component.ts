import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.component.html',
  styleUrls: ['./lista-asistencia.component.css']
})
export class AsistenciaComponent {
  showCamvasPrimario :boolean = false;
  tituloPrimario: string = "";


  tituloCheck: string = "Permitido";
  check: boolean = true;
  dateFlagIA: boolean = true;
  constructor(private toastrService: ToastrService,){


  }

  datosAsistencia :any= [];

  datos1 = [
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "02/09/2024", "inicio": true, "FechaInicio": " 8:55", "salidaComer": true, "FechaSalidaComida": "15:05", "RegresoComer": true, "FechaRegresoComer": " 15:55", "Salida": true, "FechaSalida": "19:03",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "03/09/2024", "inicio": true, "FechaInicio": " 8:50", "salidaComer": true, "FechaSalidaComida": "15:00", "RegresoComer": false, "FechaRegresoComer": "", "Salida": false, "FechaSalida": "",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "04/09/2024", "inicio": false, "FechaInicio": "", "salidaComer": false, "FechaSalidaComida": "", "RegresoComer": false, "FechaRegresoComer": "", "Salida": false, "FechaSalida": "",},
  ]


  buscar(page: number){
    if (page == 1){
      this.datosAsistencia = this.datos1;
    }
  }

  obtenerAsistencia(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual

    console.log(event.pagina_actual);
    this.buscar(page);
  }

  asistencia(){
    this.dateFlagIA = false;
  }
  marcarAsistencia(dato: any, numero: number){
    this.toastrService.success("Asistencia registrada correctamente");
    if(numero == 1){
      dato.inicio = true;
      dato.FechaInicio = "8:57"
    }else if(numero == 2){
      dato.salidaComer = true;
      dato.FechaSalidaComida = "15:10"
    }else if(numero == 3){
      dato.RegresoComer = true;
      dato.FechaRegresoComer = "16:00"
    }else if(numero == 4){
      dato.Salida = true;
      dato.FechaSalida = "19:06"
    }
  }

}
