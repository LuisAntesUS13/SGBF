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


  tituloCheck: string = "Permitido";
  check: boolean = true;
  constructor(private toastrService: ToastrService,){


  }

  datosEnviar :any= [];

  datos = [
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "02/09/2024", "correo": "daniel@example.com", "activo": true, "conectado": true},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "03/09/2024", "correo": "lucia@example.com", "activo": false, "conectado": false},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "04/09/2024", "correo": "diego@example.com", "activo": true, "conectado": false},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "05/09/2024", "correo": "clara@example.com", "activo": false, "conectado": true},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "06/09/2024", "correo": "javier@example.com", "activo": true, "conectado": true},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "09/09/2024", "correo": "maria@example.com", "activo": false, "conectado": false},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "10/09/2024", "correo": "fernando@example.com", "activo": true, "conectado": false},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "11/09/2024", "correo": "carmen@example.com", "activo": false, "conectado": true},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "12/09/2024", "correo": "andres@example.com", "activo": true, "conectado": true},
    {"total_paginas": 1, "pagina_actual": 1, "fecha": "13/09/2024", "correo": "isabel@example.com", "activo": false, "conectado": false},
  ]


  buscar(page: number){
    if (page == 1){
      this.datosEnviar = this.datos;
    }
  }

  obtenerAsistencia(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual

    console.log(event.pagina_actual);
    this.buscar(page);
  }


  abrirModal(){
    this.tituloPrimario = "Asignar Rol";
    this.showCamvasPrimario = true;
  }
  cerrarCamvasPrimario(){
    this.showCamvasPrimario = false;
  }

  guardar(){
    this.showCamvasPrimario = false;
    this.toastrService.success("Datos guardados correctamente");
  }

  clickchek(){
    this.check = !this.check;
    this.tituloCheck = this.check? "Permitido":"Bloqueado";
  }
}
