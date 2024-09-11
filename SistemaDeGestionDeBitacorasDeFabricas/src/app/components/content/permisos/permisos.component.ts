import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent {
  showCamvasPrimario :boolean = false;
  tituloPrimario: string = "";



  constructor(private toastrService: ToastrService,){


  }

  datoPermisos :any= [];

  datosPermisos = [
    {"total_paginas": 1, "pagina_actual": 1, "roles": "Gestor de Contratos", "modal": true},
    {"total_paginas": 1, "pagina_actual": 1, "roles": "Lider Tecnico", "modal": true},
    {"total_paginas": 1, "pagina_actual": 1, "roles": "Responsable", "modal": true},
    {"total_paginas": 1, "pagina_actual": 1, "roles": "Reportes", "modal": true},
    {"total_paginas": 1, "pagina_actual": 1, "roles": "Administrador", "modal": true},
  ]
  datosPermisos2 = [
    {"total_paginas": 1, "pagina_actual": 1, "menu": "Usuarios", "descripcion": "Asignar a usuarios permisos", "permisos1": false, "asignarPermisos": ""},
    {"total_paginas": 1, "pagina_actual": 1, "menu": "Asistencia", "descripcion": "Asignar a asistencias permisos", "permisos2": false, "asignarPermisos": ""},
    {"total_paginas": 1, "pagina_actual": 1, "menu": "Contratos y Requerimientos", "descripcion": "Asignar permisos", "permisos3": false, "asignarPermisos": ""},
    {"total_paginas": 1, "pagina_actual": 1, "menu": "Permisos", "descripcion": "Asignar permisos", "permisos4": false, "asignarPermisos": "", "permisos5": false, "asignarPermisos2": ""},

  ]


  buscar(page: number){
    if (page == 1){
      this.datoPermisos = this.datosPermisos;
    }
  }

  obtenerAsistencia(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual

    console.log(event.pagina_actual);
    this.buscar(page);
  }


  abrirModal(){
    this.tituloPrimario = "Asignar Permisos";
    this.showCamvasPrimario = true;
  }
  cerrarCamvasPrimario(){
    this.showCamvasPrimario = false;
  }

  guardar(){
    this.showCamvasPrimario = false;
    this.toastrService.success("Datos guardados correctamente");
  }

  marcarPermisos(dato: any, Permisos: number){
    this.toastrService.success("Permiso asignado correctamente");
    if(Permisos == 1){
      dato.permisos1 = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 2){
      dato.permisos2 = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 3){
      dato.permisos3 = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 4){
      dato.permisos4 = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 5){
      dato.permisos5 = true;
      dato.asignarPermisos = "Asignado"
  }
  }
}
