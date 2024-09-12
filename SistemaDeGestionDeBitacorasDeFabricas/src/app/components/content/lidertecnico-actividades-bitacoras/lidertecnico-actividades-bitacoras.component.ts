import { Component } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-lidertecnico-actividades-bitacoras',
  templateUrl: './lidertecnico-actividades-bitacoras.component.html',
  styleUrls: ['./lidertecnico-actividades-bitacoras.component.css']
})
export class LidertecnicoActividadesBitacorasComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  
  actividadesFiltradas: any[] | undefined;
  
  inputValue: string = '';
  periodo: string | null = null;
  nombreProyecto: string | null = null;
  mostrarInput: boolean = true;
  anho: string | null = null;
  fechaActividad: string | null = null;

  tituloModal: string = "";

  periodoTitulo: string | null = null;

  isVisible: boolean = true;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.periodo = params.get('periodo');
      this.nombreProyecto = params.get('nombreProyecto');
      this.anho = params.get('anho');
    });

    
    this.periodoTitulo = this.periodo;
    this.fechaActividad = '13/01/2024';
  }

  
  
  regresarALidertecnicoBitacora() {
    this.router.navigate(['/content/lidertecnico/bitacora']);
  }

  getConsultoresPorProyecto(){
    return this.consultores.filter(consultor => consultor.proyecto === this.nombreProyecto);
  }

  getActividadesPorConsultor(idConsultor: number) {
    return this.actividades.filter(actividad => (actividad.idConsultor === idConsultor &&  actividad.periodo === this.periodo ));
  }

  ocultar() {
    this.mostrarInput = false; // Oculta el input
    this.tituloModal = "Observaciones para el consultor.";
    this.isVisible = false;

    

  }

  mostrar() {
    this.mostrarInput = true; // Oculta el input
    this.tituloModal = "Detalles de la actividad ";
    this.isVisible = true;
  }

  seleccionado: number | any;

  listaActividadesFiltro: number | any;

  cambioSeleccion(id: number) {
    this.seleccionado = id;
    this.listadoEstatus.forEach((element) => {
      if (element.id == id) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
    

    this.listaActividadesFiltro = this.actividades.filter(
      (actividad) => actividad.estatus === this.seleccionado
    );
  }

  
  listadoEstatus = [
    { id: 1, nombre: 'Actividades registradas', activo: true, total: 0 },
    { id: 2, nombre: 'En ejecucion', activo: false, total: 0 },
    { id: 3, nombre: 'Espera de revisión', activo: false, total: 0 },
    { id: 4, nombre: 'Espera de autorización', activo: false, total: 0 },
    { id: 5, nombre: 'Rechazados', activo: false, total: 0 },
    { id: 6, nombre: 'Finalizados', activo: false, total: 0 },
  ];



  consultores = [
    { idConsultor: 1, nombre: 'Luis Eduardo Antes Villa', proyecto:'Sistema de gestión de bitácoras de fábricas' },
    { idConsultor: 2, nombre: 'Carlos Fernández López', proyecto:'Sistema de gestión de bitácoras de fábricas' },
    { idConsultor: 3, nombre: 'Ana Martínez Ruiz', proyecto:'Sistema de gestión de bitácoras de fábricas'},
    { idConsultor: 4, nombre: 'Javier Rodríguez Sánchez', proyecto:'Proyecto 2' },
    { idConsultor: 5, nombre: 'Laura Martínez Ortega', proyecto:'Proyecto 2' }
  ];

  actividades = [
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', estatus:'ejecucion'},
    { idConsultor: 2, periodo:'Enero', consultor: 'Carlos Fernández López', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Diseño de base de datos', horas: 8, fecha: '10/01/2021', estatus: 'autorizacion' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/02/2021', estatus:'finalizado' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Configuración de hardware', horas: 8, fecha: '20/02/2021', estatus:'rechazado' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/03/2021', estatus:'revision' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/03/2021', estatus:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchez', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '20/01/2021', estatus:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '21/01/2021', estatus:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Eduardo Silva', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '09/02/2021', estatus:'revision' },
  
  ]



  // listadoEstatus = [
  //   { id: 1, nombre: 'En ejecucion', activo: false, total: 5, class: 'ejecucion' },
  //   { id: 2, nombre: 'Espera de revisión', activo: false, total: 2, class: 'revision' },
  //   { id: 3, nombre: 'Espera de autorización', activo: false, total: 3,  class: 'autorizacion'},
  //   { id: 4, nombre: 'Finalizados', activo: false, total: 10, class: 'finalizado'},
  //   { id: 5, nombre: 'Rechazados', activo: false, total: 8, class: 'rechazado'},
  // ];

  

  
}
