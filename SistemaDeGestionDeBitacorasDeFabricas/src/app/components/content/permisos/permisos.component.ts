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
  listaPermisos :boolean = false;


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
    {"id": 1,"total_paginas": 1, "pagina_actual": 1, "menu": "Usuarios", "descripcion": "Asignar a usuarios permisos", "permisos1": false, "asignarPermisos": "", "conectado": true,  "conectado1": true,  "conectado2": true,  "conectado3": true,  "conectado4": true, "t1": 1, "t2": 2, "t3": 3, "t4": 4, "t5": 5},
    {"id": 2,"total_paginas": 1, "pagina_actual": 1, "menu": "Asistencia", "descripcion": "Asignar a asistencias permisos", "permisos2": false, "asignarPermisos": "", "conectado": false,  "conectado1": true,  "conectado2": true,  "conectado3": true,  "conectado4": true, "t1": 1, "t2": 2, "t3": 3, "t4": 4, "t5": 5},
    {"id": 3,"total_paginas": 1, "pagina_actual": 1, "menu": "Contratos y Requerimientos", "descripcion": "Asignar permisos", "permisos3": false, "asignarPermisos": "", "conectado": true,  "conectado1": true,  "conectado2": true,  "conectado3": true,  "conectado4": true, "t1": 1, "t2": 2, "t3": 3, "t4": 4, "t5": 5},
    {"id": 4,"total_paginas": 1, "pagina_actual": 1, "menu": "Permisos", "descripcion": "Asignar permisos", "permisos4": false, "asignarPermisos": "", "permisos5": false, "asignarPermisos2": "", "conectado": false,  "conectado1": true,  "conectado2": true,  "conectado3": true,  "conectado4": true, "t1": 1, "t2": 2, "t3": 3, "t4": 4, "t5": 5},

  ]

  cambio(dato: any, tipo: any){
    this.datosPermisos2.forEach((elemento: any) =>{
      if(elemento.id == dato.id){
        if(elemento.t1 == tipo){
          elemento.conectado = !elemento.conectado
        }else if(elemento.t2 == tipo){
          elemento.conectado1 = !elemento.conectado1
        }else if(elemento.t3 == tipo){
          elemento.conectado2 = !elemento.conectado2
        }else if(elemento.t4 == tipo){
          elemento.conectado3 = !elemento.conectado3
        }else if(elemento.t5 == tipo){
          elemento.conectado4 = !elemento.conectado4
        }
      }
    })
  }
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
      dato.conectado = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 2){
      dato.conectado = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 3){
      dato.conectado = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 4){
      dato.conectado = true;
      dato.asignarPermisos = "Asignado"
    }else if(Permisos == 5){
      dato.conectado = true;
      dato.asignarPermisos = "Asignado"
  }
  }

  mostrarPermisos(){
    this.listaPermisos = true;
  }
}
