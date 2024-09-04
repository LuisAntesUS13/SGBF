import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.css'],
})
export class RequerimientosComponent {
  datosEnviar: any = [];
  showCamvasPrimario: boolean = false;
  tituloPrimario: string = '';

  contrato:string | null = null;

  llaveResultado: string[] = ["identificador","nombre"];
  llaveBusqueda: string = "identificador";

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

  constructor(private route: ActivatedRoute, private toastrService: ToastrService) {
    this.buscar(1);
  }

  ngOnInit(): void {
    // Obtener el parámetro de la ruta si existe
    this.route.paramMap.subscribe((params) => {
      this.contrato = params.get('contrato');
      if ( this.contrato) {
        console.log(`Parámetro contrato: ${ this.contrato}`);
        this.buscar(1);
      } else {
        console.log('El parámetro contrato no está presente en la ruta');
      }
    });
  }

  buscar(page: number) {
    this.datosEnviar = this.datos1;
  }

  eventoBuscar(event: any) {
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

  cerrarCamvasPrimario() {
    this.showCamvasPrimario = false;
  }

  guardar() {
    this.showCamvasPrimario = false;
    this.toastrService.success('Datos guardados correctamente');
  }
}
