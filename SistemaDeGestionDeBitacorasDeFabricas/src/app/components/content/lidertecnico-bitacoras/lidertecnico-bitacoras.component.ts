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
    {folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 1', horas: 3, fecha: '13/05/2000' },
    {folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 1', horas: 3, fecha: '13/05/2000' },
    {folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 1', horas: 3, fecha: '13/05/2000' },
    {folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 1', horas: 3, fecha: '13/05/2000' },
    {folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 1', horas: 3, fecha: '13/05/2000' },
    {folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 2', horas: 3, fecha: '13/05/2000' },
    {folio: 2, consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Descripción 3', horas: 3, fecha: '13/05/2000' }
  ]
}


