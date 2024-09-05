import { Component } from '@angular/core';


@Component({
  selector: 'app-lidertecnico-bitacoras',
  templateUrl: './lidertecnico-bitacoras.component.html',
  styleUrls: ['./lidertecnico-bitacoras.component.css']
})



export class LidertecnicoBitacorasComponent {


  listadoEstatus = [
    { id: 1, nombre: 'En ejecucion', activo: false, total: 5, class: 'ejecucion' },
    { id: 2, nombre: 'Espera de revisión', activo: false, total: 2, class: 'revision' },
    { id: 3, nombre: 'Espera de autorización', activo: false, total: 3,  class: 'autorizacion'},
    { id: 4, nombre: 'Finalizados', activo: false, total: 10, class: 'finalizado'},
    { id: 5, nombre: 'Rechazados', activo: false, total: 8, class: 'rechazado'},
  ];

  personas = [
    { folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 1', horas: 3, fecha: '13/05/2000', estado:'ejecucion' },
    { folio: 3, consultor: 'Ana García', lider: 'Carlos López', proyecto: 'Desarrollo de aplicación móvil', actividad: 'Revisión de requerimientos', horas: 4, fecha: '25/06/2021', estado: 'revision' },
    { folio: 4, consultor: 'Javier Martínez', lider: 'Lucía Fernández', proyecto: 'Implementación de sistema ERP', actividad: 'Diseño de base de datos', horas: 5, fecha: '10/07/2021', estado: 'autorizacion' },
    { folio: 5, consultor: 'Maria Rodríguez', lider: 'Sergio González', proyecto: 'Desarrollo de plataforma e-commerce', actividad: 'Desarrollo del backend', horas: 6, fecha: '15/08/2021', estado:'finalizado' },
    { folio: 6, consultor: 'Pedro Sánchez', lider: 'Isabel Gómez', proyecto: 'Optimización de red de datos', actividad: 'Configuración de hardware', horas: 7, fecha: '20/09/2021', estado:'rechazado' },
    { folio: 7, consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Auditoría de seguridad informática', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '05/10/2021', estado:'revision' }
]
}


