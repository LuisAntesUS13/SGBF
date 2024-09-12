import { Component } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-lista-asistencia-lider-tecnico',
  templateUrl: './lista-asistencia-lider-tecnico.component.html',
  styleUrls: ['./lista-asistencia-lider-tecnico.component.css']
})
export class ListaAsistenciaLiderTecnicoComponent {

  datos1 = [
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "02/09/2024", "inicio": true, "FechaInicio": " 8:55", "salidaComer": true, "FechaSalidaComida": "15:05", "RegresoComer": true, "FechaRegresoComer": " 15:55", "Salida": true, "FechaSalida": "19:03",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "03/09/2024", "inicio": true, "FechaInicio": " 8:50", "salidaComer": true, "FechaSalidaComida": "15:00", "RegresoComer": false, "FechaRegresoComer": "No Registrado", "Salida": false, "FechaSalida": "19:00",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "04/09/2024", "inicio": false, "FechaInicio": "No Registrado", "salidaComer": false, "FechaSalidaComida": "15:00", "RegresoComer": false, "FechaRegresoComer": "17:00", "Salida": false, "FechaSalida": "19:02",},
  ]
  datos2 = [
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "02/09/2024", "inicio": true, "FechaInicio": " 9:00", "salidaComer": true, "FechaSalidaComida": "15:15", "RegresoComer": true, "FechaRegresoComer": " 16:00", "Salida": true, "FechaSalida": "19:03",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "03/09/2024", "inicio": true, "FechaInicio": " 8:50", "salidaComer": true, "FechaSalidaComida": "15:00", "RegresoComer": false, "FechaRegresoComer": "15:45", "Salida": false, "FechaSalida": "19:00",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "04/09/2024", "inicio": false, "FechaInicio": "8:57", "salidaComer": false, "FechaSalidaComida": "15:10", "RegresoComer": false, "FechaRegresoComer": "15:52", "Salida": false, "FechaSalida": "19:06",},
  ]
  datos3 = [
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "02/09/2024", "inicio": true, "FechaInicio": " 9:00", "salidaComer": true, "FechaSalidaComida": "15:15", "RegresoComer": true, "FechaRegresoComer": " 16:00", "Salida": true, "FechaSalida": "19:03",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "03/09/2024", "inicio": true, "FechaInicio": " 8:50", "salidaComer": true, "FechaSalidaComida": "15:00", "RegresoComer": false, "FechaRegresoComer": "15:45", "Salida": false, "FechaSalida": "19:00",},
    {"total_paginas": 1, "total_registros": 10, "pagina_actual": 1, "fecha": "04/09/2024", "inicio": false, "FechaInicio": "8:57", "salidaComer": false, "FechaSalidaComida": "15:10", "RegresoComer": false, "FechaRegresoComer": "", "Salida": false, "FechaSalida": "",},
  ]

}
