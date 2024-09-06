import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultor-actividades-bitacora',
  templateUrl: './consultor-actividades-bitacora.component.html',
  styleUrls: ['./consultor-actividades-bitacora.component.css']
})

export class ConsultorActividadesBitacoraComponent {
  
  actividadesFiltradas: any[] | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      const periodo = params['periodo'];
      this.filtrarActividades(periodo)
    })
  }

  filtrarActividades(periodo: string){
    this.actividadesFiltradas = this.actividades.filter(actividad => actividad.periodo === periodo)
  }

  nuevoPerfil(estatus: number) {
    this.listadoEstatus.forEach((element) => {
      if (element.folio == estatus) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
  }


  listadoEstatus = [
    { folio: 1, nombre: 'En ejecucion', activo: false, total: 5, class: 'ejecucion' },
    { folio: 2, nombre: 'Espera de revisión', activo: false, total: 2, class: 'revision' },
    { folio: 3, nombre: 'Espera de autorización', activo: false, total: 3,  class: 'autorizacion'},
    { folio: 4, nombre: 'Finalizados', activo: false, total: 10, class: 'finalizado'},
    { folio: 5, nombre: 'Rechazados', activo: false, total: 8, class: 'rechazado'},
  ];
  
  actividades = [
    { folio: 1, periodo:'Mayo', consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/05/2021', estado:'ejecucion' },
    { folio: 1, periodo:'Mayo', consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Revisión de requerimientos', horas: 8, fecha: '14/05/2021', estado: 'revision' },
    { folio: 2, periodo:'Julio', consultor: 'Javier Martínez', lider: 'Maria López', proyecto: 'Sistema de control de inventarios', actividad: 'Diseño de base de datos', horas: 8, fecha: '10/07/2021', estado: 'autorizacion' },
    { folio: 3, periodo:'Agosto', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Desarrollo del backend', horas: 8, fecha: '15/08/2021', estado:'finalizado' },
    { folio: 3, periodo:'Agosto', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Desarrollo del backend', horas: 8, fecha: '17/08/2021', estado:'finalizado' },
    { folio: 3, periodo:'Agosto', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Desarrollo del backend', horas: 8, fecha: '18/08/2021', estado:'finalizado' },
    { folio: 3, periodo:'Agosto', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/08/2021', estado:'finalizado' },
    { folio: 3, periodo:'Agosto', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Configuración de hardware', horas: 8, fecha: '20/08/2021', estado:'rechazado' },
    { folio: 3, periodo:'Septiembre', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/09/2021', estado:'revision' },
    { folio: 3, periodo:'Septiembre', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/09/2021', estado:'revision' },
    { folio: 3, periodo:'Septiembre', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '17/09/2021', estado:'revision' },
    { folio: 3, periodo:'Septiembre', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '18/09/2021', estado:'revision' },
    { folio: 3, periodo:'Septiembre', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '19/09/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '05/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '06/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '07/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '08/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 3, fecha: '09/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 4, fecha: '09/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 1, fecha: '09/11/2021', estado:'revision' },
  ]

}
