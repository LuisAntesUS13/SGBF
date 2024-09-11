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
  nombreProyecto: string | null = null;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.periodo = params.get('periodo');
      this.nombreProyecto = params.get('nombreProyecto');
    });
  }

  abrirCanvas(){
  }

  getConsultoresPorProyecto(){
    return this.consultores.filter(consultor => consultor.proyecto === this.nombreProyecto);
  }

  getActividadesPorConsultor(idConsultor: number) {
    return this.actividades.filter(actividad => (actividad.idConsultor === idConsultor &&  actividad.periodo === this.periodo ));
  }


  consultores = [
    { idConsultor: 1, nombre: 'Luis Eduardo Antes Villa', proyecto:'Proyecto 1' },
    { idConsultor: 2, nombre: 'Carlos Fernández López', proyecto:'Proyecto 1' },
    { idConsultor: 3, nombre: 'Ana Martínez Ruiz', proyecto:'Proyecto 1'},
    { idConsultor: 4, nombre: 'Javier Rodríguez Sánchez', proyecto:'Proyecto 2' },
    { idConsultor: 5, nombre: 'Laura Martínez Ortega', proyecto:'Proyecto 2' }
  ];

  actividades = [
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Daniel Salazar', proyecto: 'Proyecto 1',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estado:'ejecucion'},
    { idConsultor: 2, periodo:'Enero', consultor: 'Carlos Fernández López', lider: 'Maria López', proyecto: 'Proyecto 1', actividad: 'Diseño de base de datos', horas: 8, fecha: '10/01/2021', estado: 'autorizacion' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Proyecto 1', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/02/2021', estado:'finalizado' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Proyecto 1', actividad: 'Configuración de hardware', horas: 8, fecha: '20/02/2021', estado:'rechazado' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Proyecto 1', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/03/2021', estado:'revision' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Lucía Fernández', proyecto: 'Proyecto 1', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/03/2021', estado:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchez', lider: 'Eduardo Silva', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 3, fecha: '09/04/2021', estado:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Eduardo Silva', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 4, fecha: '09/04/2021', estado:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Eduardo Silva', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 1, fecha: '09/05/2021', estado:'revision' },
  
  ]



  // listadoEstatus = [
  //   { id: 1, nombre: 'En ejecucion', activo: false, total: 5, class: 'ejecucion' },
  //   { id: 2, nombre: 'Espera de revisión', activo: false, total: 2, class: 'revision' },
  //   { id: 3, nombre: 'Espera de autorización', activo: false, total: 3,  class: 'autorizacion'},
  //   { id: 4, nombre: 'Finalizados', activo: false, total: 10, class: 'finalizado'},
  //   { id: 5, nombre: 'Rechazados', activo: false, total: 8, class: 'rechazado'},
  // ];

  

  
}
