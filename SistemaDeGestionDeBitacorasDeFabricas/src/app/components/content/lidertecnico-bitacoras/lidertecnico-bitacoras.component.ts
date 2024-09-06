import { Component } from '@angular/core';


@Component({
  selector: 'app-lidertecnico-bitacoras',
  templateUrl: './lidertecnico-bitacoras.component.html',
  styleUrls: ['./lidertecnico-bitacoras.component.css']
})

export class LidertecnicoBitacorasComponent {

  actividadesFiltradas: any[] | undefined;
  
  inputValue: string = '';

  ngOnInit(){
    this.actividadesFiltradas = this.actividades;
  }
  
  onInputChange(event: Event){
    const inputElement = event.target as HTMLInputElement;
    if(inputElement.value === ''){
      this.actividadesFiltradas = this.actividades;
    }else{
      this.actividadesFiltradas = this.actividades.filter(actividades => actividades.consultor === inputElement.value);
    }
  }
  


  listadoEstatus = [
    { id: 1, nombre: 'En ejecucion', activo: false, total: 5, class: 'ejecucion' },
    { id: 2, nombre: 'Espera de revisión', activo: false, total: 2, class: 'revision' },
    { id: 3, nombre: 'Espera de autorización', activo: false, total: 3,  class: 'autorizacion'},
    { id: 4, nombre: 'Finalizados', activo: false, total: 10, class: 'finalizado'},
    { id: 5, nombre: 'Rechazados', activo: false, total: 8, class: 'rechazado'},
  ];

  actividades = [
    { folio: 1, periodo:'Mayo', consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/05/2021', estado:'ejecucion' },
    { folio: 2, periodo:'Julio', consultor: 'Javier Martínez', lider: 'Maria López', proyecto: 'Sistema de control de inventarios', actividad: 'Diseño de base de datos', horas: 8, fecha: '10/07/2021', estado: 'autorizacion' },
    { folio: 3, periodo:'Agosto', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/08/2021', estado:'finalizado' },
    { folio: 3, periodo:'Agosto', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Configuración de hardware', horas: 8, fecha: '20/08/2021', estado:'rechazado' },
    { folio: 3, periodo:'Septiembre', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/09/2021', estado:'revision' },
    { folio: 3, periodo:'Septiembre', consultor: 'Maria Rodríguez', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/09/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 3, fecha: '09/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 4, fecha: '09/11/2021', estado:'revision' },
    { folio: 4, periodo:'Octubre', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 1, fecha: '09/11/2021', estado:'revision' },
  ]
}


