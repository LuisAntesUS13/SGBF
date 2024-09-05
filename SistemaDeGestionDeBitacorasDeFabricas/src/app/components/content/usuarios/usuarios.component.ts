import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  showCamvasPrimario :boolean = false;
  tituloPrimario: string = "";


  tituloCheck: string = "Permitido";
  check: boolean = true;
  constructor(private toastrService: ToastrService,){
    this.datosEnviar = this.datos1;
  
  }

  datosEnviar :any= [];

  datos1 = [    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Daniel", "correo": "daniel@example.com", "activo": true, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Lucía", "correo": "lucia@example.com", "activo": false, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Diego", "correo": "diego@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Clara", "correo": "clara@example.com", "activo": false, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Javier", "correo": "javier@example.com", "activo": true, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "María", "correo": "maria@example.com", "activo": false, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Fernando", "correo": "fernando@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Carmen", "correo": "carmen@example.com", "activo": false, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Andrés", "correo": "andres@example.com", "activo": true, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 1, "nombre": "Isabel", "correo": "isabel@example.com", "activo": false, "conectado": false},
  ]
  datos2 = [   {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Juan", "correo": "juan@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Ana", "correo": "ana@example.com", "activo": false, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Carlos", "correo": "carlos@example.com", "activo": true, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Luisa", "correo": "luisa@example.com", "activo": false, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Pedro", "correo": "pedro@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Marta", "correo": "marta@example.com", "activo": false, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Luis", "correo": "luis@example.com", "activo": true, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Elena", "correo": "elena@example.com", "activo": false, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "José", "correo": "jose@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 2, "nombre": "Sofía", "correo": "sofia@example.com", "activo": false, "conectado": true},
  ]
  datos3 = [   {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Alberto", "correo": "alberto@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Pilar", "correo": "pilar@example.com", "activo": false, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Vicente", "correo": "vicente@example.com", "activo": true, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Rosa", "correo": "rosa@example.com", "activo": false, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Antonio", "correo": "antonio@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Laura", "correo": "laura@example.com", "activo": false, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Raúl", "correo": "raul@example.com", "activo": true, "conectado": true},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Patricia", "correo": "patricia@example.com", "activo": false, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Manuel", "correo": "manuel@example.com", "activo": true, "conectado": false},
    {"total_paginas": 3, "total_registros": 30, "pagina_actual": 3, "nombre": "Celia", "correo": "celia@example.com", "activo": false, "conectado": true}
  ]


  buscar(page: number){
    if (page == 1){
      this.datosEnviar = this.datos1;
    } else if (page == 2){
      this.datosEnviar = this.datos2;
    } else {
      this.datosEnviar = this.datos3;
    }
  }

  obtenerEvento(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual

    console.log(event.pagina_actual);
    this.buscar(page);
  }


  abrirModal(){
    this.tituloPrimario = "Registro de usuario";
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
