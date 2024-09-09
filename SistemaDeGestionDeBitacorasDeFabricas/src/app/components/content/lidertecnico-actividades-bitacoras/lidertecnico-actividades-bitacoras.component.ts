import { Component } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-lidertecnico-actividades-bitacoras',
  templateUrl: './lidertecnico-actividades-bitacoras.component.html',
  styleUrls: ['./lidertecnico-actividades-bitacoras.component.css']
})
export class LidertecnicoActividadesBitacorasComponent {

  constructor(private route: ActivatedRoute) {}
  
  actividadesFiltradas: any[] | undefined;
  
  inputValue: string = '';
  periodo: string | null = null;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.periodo = params.get('periodo');
    });
  }

  getActividadesPorConsultor(idConsultor: number) {
    return this.actividades.filter(actividad => (actividad.idConsultor === idConsultor && actividad.periodo === this.periodo));
  }





  consultores = [
    { idConsultor: 1, nombre: 'Luis Eduardo Antes Villa'},
    { idConsultor: 2, nombre: 'Carlos Fernández López' },
    { idConsultor: 3, nombre: 'Ana Martínez Ruiz' },
    { idConsultor: 4, nombre: 'Javier Rodríguez Sánchez' },
    { idConsultor: 5, nombre: 'Laura Martínez Ortega' }
  ];

  actividades = [
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Antes', lider: 'Daniel Salazar', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estado:'ejecucion'},
    { idConsultor: 2, periodo:'Enero', consultor: 'Carlos Fernández López', lider: 'Maria López', proyecto: 'Sistema de control de inventarios', actividad: 'Diseño de base de datos', horas: 8, fecha: '10/01/2021', estado: 'autorizacion' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/02/2021', estado:'finalizado' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Configuración de hardware', horas: 8, fecha: '20/02/2021', estado:'rechazado' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/03/2021', estado:'revision' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Implementación de CRM', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/03/2021', estado:'revision' },
    { idConsultor: 4, periodo:'Abril', consultor: 'Javier Rodríguez Sánchez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 3, fecha: '09/04/2021', estado:'revision' },
    { idConsultor: 4, periodo:'Abril', consultor: 'Javier Rodríguez Sánchezs', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 4, fecha: '09/04/2021', estado:'revision' },
    { idConsultor: 4, periodo:'Mayo', consultor: 'Laura Pérez', lider: 'Eduardo Silva', proyecto: 'Optimización de cadena de suministro', actividad: 'Análisis de vulnerabilidades', horas: 1, fecha: '09/05/2021', estado:'revision' },
  ]
  


  




  // listadoEstatus = [
  //   { id: 1, nombre: 'En ejecucion', activo: false, total: 5, class: 'ejecucion' },
  //   { id: 2, nombre: 'Espera de revisión', activo: false, total: 2, class: 'revision' },
  //   { id: 3, nombre: 'Espera de autorización', activo: false, total: 3,  class: 'autorizacion'},
  //   { id: 4, nombre: 'Finalizados', activo: false, total: 10, class: 'finalizado'},
  //   { id: 5, nombre: 'Rechazados', activo: false, total: 8, class: 'rechazado'},
  // ];

  

  
}
