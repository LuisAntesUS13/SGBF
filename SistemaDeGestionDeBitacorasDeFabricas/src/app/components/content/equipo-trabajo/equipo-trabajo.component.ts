import { Component } from '@angular/core';

@Component({
  selector: 'app-equipo-trabajo',
  templateUrl: './equipo-trabajo.component.html',
  styleUrls: ['./equipo-trabajo.component.css']
})
export class EquipoTrabajoComponent {

  datosConsultores = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Juan Manuel',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Jose Antonio',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
    },
  ];

  datosConsultoresDisponibles = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Manuel Antonio',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Cesar Daniel',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Analista',
      consultor: 'Juan Manuel',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Roberto Antonio',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
    },
  ];


  datosPefil = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      utilizados: 1,
      cantidad: 5,
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Jr Java',
      utilizados: 2,
      cantidad: 2,
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Analista',
      utilizados: 0,
      cantidad: 1,
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Tester',
      utilizados: 2,
      cantidad: 2,
    },
  ];

  datos1 = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      lider_texnico: "Juan Manuel",
      no_contrato: 'C-1017',
      consultora: 'Tech Solutions S.A.',
      no_consultores: 5,
      responsable: "Mario Alberto",
      total_integrantes : 5
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      lider_texnico: "Juan Manuel",
      no_contrato: 'C-1018',
      consultora: 'Innovative Tech Group',
      responsable: "-",
      total_integrantes : 25
    }
  ];

  tituloPrimario: string = '';
  seleccionado: number = 1;
  showCamvasPrimario: boolean = false;

  pestanasEquipos = [
    { id: 1, nombre: 'Equipo', activo: true },
    { id: 2, nombre: 'Consultores disponibles', activo: false }
  ];

  

  constructor() {

  }

  obtenerEvento(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual;

    console.log(event.pagina_actual);
    this.buscar(page);
  }

  buscar(numero:number){

  }

  abrirModal(){
    this.showCamvasPrimario = true;
    this.tituloPrimario = "Administracion equipo"

  }
  cerrarCamvasPrimario(){
    this.showCamvasPrimario = false;
  }

  cambioSeleccionEquipo(id: number){
    this.seleccionado = id;
    this.pestanasEquipos.forEach((element) => {
      if (element.id == id) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
  }


  guardar(){

  }
}
