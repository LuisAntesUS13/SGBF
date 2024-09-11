import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.css'],
})
export class RequerimientosComponent {
  datosEnviar: any = [];
  showCamvasPrimario: boolean = false;
  showCamvaPerfiles: boolean = false;
  showCamvaConsultores: boolean = false;
  tituloPrimario: string = '';
  tituloSecundario: string = '';
  seleccionado: number = 1;
  seleccionadoPerfil: number = 1;

  contrato: string | null = null;

  llavesBuscador: string[] = ['identificador','identificador', 'nombre'];

  pestanas = [
    { id: 1, nombre: 'Requerimiento', activo: true },
    // { id: 2, nombre: 'Perfiles requeridos', activo: false },
    // { id: 3, nombre: 'Registro de consultores', activo: false },
  ];

  pestanasPerfiles = [
    { id: 1, nombre: 'Seleccion de perfil', activo: true },
    { id: 2, nombre: 'Registro perfiles', activo: false },
  ];

  pestanasConsultores = [
    { id: 1, nombre: 'Asignacion de consultor', activo: true },
    { id: 2, nombre: 'Registro de consultor', activo: false },
  ];

  datosPefil = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      cantidad: 5,
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Jr Java',
      cantidad: 2,
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Analista',
      cantidad: 1,
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Tester',
      cantidad: 2,
    },
  ];

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
  datos1 = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      identificador: 'S-SDFR61',
      nombre: 'Gestion de bitacora',
      descripcion: 'Descripcion del sistema de bitacora 1',
      no_consultores: 150,
      lider_proyecto: 'Juan Lopez',
      responsable: 'Fernando Dominges',
      area: 'Direccion informatica',
      tipo_accion: 'XMAX',
      modulo: 'inscripcion remots',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      identificador: 'S-CVFG62',
      nombre: 'Auditoria de sistema',
      descripcion: 'Descripcion del sistema de auditoria',
      no_consultores: 120,
      lider_proyecto: 'Maria Fernandez',
      responsable: 'Carlos Sanchez',
      area: 'Auditoria interna',
      tipo_accion: 'Incidente',
      modulo: 'servicio',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      identificador: 'S-1RTGF63',
      nombre: 'Monitoreo de red',
      descripcion: 'Descripcion del sistema de monitoreo de red',
      no_consultores: 200,
      lider_proyecto: 'Luis Ramirez',
      responsable: 'Pedro Martinez',
      area: 'Redes y comunicaciones',
      tipo_accion: 'XMAX',
      modulo: 'aplicacion',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      identificador: 'S-CVDFG64',
      nombre: 'Gestion de recursos',
      descripcion: 'Descripcion del sistema de gestion de recursos',
      no_consultores: 180,
      lider_proyecto: 'Ana Torres',
      responsable: 'Roberto Gonzalez',
      area: 'Recursos humanos',
      tipo_accion: 'Incidente',
      modulo: 'inscripcion remots',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      identificador: 'S-1RYMK65',
      nombre: 'Control de inventario',
      descripcion: 'Descripcion del sistema de control de inventario',
      no_consultores: 140,
      lider_proyecto: 'Elena Diaz',
      responsable: 'Javier Ruiz',
      area: 'Logistica',
      tipo_accion: 'XMAX',
      modulo: 'servicio',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private confirmarModalService: ConfirmarModalService,
    private spinnerService: SpinnerService
  ) {
    this.buscar(1);
  }

  ngOnInit(): void {
    // Obtener el parámetro de la ruta si existe
    this.route.paramMap.subscribe((params) => {
      this.contrato = params.get('contrato');
      if (this.contrato) {
        console.log(`Parámetro contrato: ${this.contrato}`);
        this.buscar(1);
      } else {
        console.log('El parámetro contrato no está presente en la ruta');
      }
    });
  }

  cambioSeleccion(id: number) {
    this.seleccionado = id;
    this.pestanas.forEach((element) => {
      if (element.id == id) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
  }

  cambioSeleccionPerfiles(id: number) {
    this.seleccionadoPerfil = id;
    this.pestanasPerfiles.forEach((element) => {
      if (element.id == id) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
  }

  cambioSeleccionConsultores(id: number) {
    this.seleccionadoPerfil = id;
    this.pestanasConsultores.forEach((element) => {
      if (element.id == id) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
  }

  buscar(page: number) {
    this.datosEnviar = this.datos1;
    
    this.spinnerService.mostrarSpinner();
    // Simulate an async operation
    setTimeout(() => {
      this.spinnerService.ocultarSpinner();
    }, 2000);
  }

  eventoBuscar(event: any) {
    console.log(event)
  }

  obtenerEvento(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual;
    this.buscar(page);
  }

  abrirModal() {
    this.tituloPrimario = 'Registro de requerimientos';
    this.showCamvasPrimario = true;
    this.datosEnviar = [];
    this.datosEnviar = this.datos1;
  }

  abrirModalPerfiles(num: number) {
    if (num == 1) {
      this.tituloSecundario = 'Asignación de perfiles';
    } else if (num == 2) {
      this.tituloSecundario = 'Actualización de perfiles';
    }
    this.showCamvaPerfiles = true;
  }

  abrirModalConsultores(num: number) {
    if (num == 1) {
      this.tituloSecundario = 'Asignación de consultores';
    } else if (num == 2) {
      this.tituloSecundario = 'Actualización de consultores';
    }
    this.showCamvaConsultores = true;
  }

  cerrarCamvasPrimario() {
    this.showCamvasPrimario = false;
  }

  cerrarCamvasPerfiles() {
    this.showCamvaPerfiles = false;
  }

  cerrarCamvasConsultores() {
    this.showCamvaConsultores = false;
  }

  guardar() {
    if (this.seleccionado == 1) {
    } else if (this.seleccionado == 2) {
    } else if (this.seleccionado == 3) {
    }
    this.toastrService.success('Datos guardados correctamente');
    this.showCamvasPrimario = false;
  }

  guardarSecundario() {
    if (this.seleccionadoPerfil == 1) {
    } else if (this.seleccionadoPerfil == 2) {
      this.seleccionadoPerfil = 1;
      this.pestanasPerfiles.forEach((element) => {
        if (element.id == this.seleccionadoPerfil) {
          element.activo = true;
        } else {
          element.activo = false;
        }
      });
    } else if (this.seleccionadoPerfil == 3) {
    }

    this.confirmarModalService
      .abriraModalPregunta('Estas seguro de ...')
      .subscribe(async (result) => {
        if (result) {
          this.toastrService.success('Datos guardados correctamente');
        }
      });
  }

  nuevoPerfil() {
    this.seleccionadoPerfil = 2;
    this.pestanasPerfiles.forEach((element) => {
      if (element.id == this.seleccionadoPerfil) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
  }
}
