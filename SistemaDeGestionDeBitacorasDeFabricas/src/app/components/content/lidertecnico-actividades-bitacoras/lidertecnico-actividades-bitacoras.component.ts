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
  estado: boolean = false;

  seleccionado: number | any;

  listaActividadesFiltro: number | any;

  inputNombre: string ='';
  
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



  get getConsultoresPorProyecto(){
    if(this.inputNombre ===''){
      return this.consultores.filter(consultor => consultor.proyecto === this.nombreProyecto);
    }else{
      return this.consultores.filter(consultor => consultor.proyecto === this.nombreProyecto && consultor.nombre === this.inputNombre);
    }
  }

  getActividadesPorConsultor(idConsultor: number) {

    let actividadesYaFiltradas = this.actividades.filter(actividad => (actividad.idConsultor === idConsultor &&  actividad.periodo === this.periodo ));

    return actividadesYaFiltradas
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



  cambioSeleccion(id: number) {
    this.seleccionado = id;
    this.listadoEstatus.forEach((element) => {
      if (element.idStatus == id) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
    

    this.listaActividadesFiltro = this.actividades.filter(
      (actividad) => actividad.idStatus === this.seleccionado
    );
  }

  
  listadoEstatus = [
    { idStatus: 1, nombre: 'Espera de revisión', activo: true, total: 0 },
    { idStatus: 2, nombre: 'Espera de autorización', activo: false, total: 0 },
    { idStatus: 7, nombre: 'En observación', activo: false, total: 0 },
    { idStatus: 8, nombre: 'Finalizada', activo: false, total: 0 },
  ];



  consultores = [
    { idConsultor: 1, nombre: 'Luis Eduardo Antes Villa', proyecto:'Sistema de gestión de bitácoras de fábricas' },
    { idConsultor: 2, nombre: 'Carlos Fernández López', proyecto:'Sistema de gestión de bitácoras de fábricas' },
    { idConsultor: 3, nombre: 'Ana Martínez Ruiz', proyecto:'Sistema de gestión de bitácoras de fábricas'},
    { idConsultor: 4, nombre: 'Javier Rodríguez Sánchez', proyecto:'Proyecto 2' },
    { idConsultor: 5, nombre: 'Laura Martínez Ortega', proyecto:'Proyecto 2' }
  ];

  actividades = [
    { idConsultor: 1, idActividad: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Analisis de requerimiento', horas: 5, fecha: '13/01/2024', estatus:'ejecucion', observacion:'Observacion 1', proyectoExcel: "Continuidad Operativa",
      idIncidente: "S-1066361",
      descripcionCorta: "Sistema de gestión de Bitácoras de Fábricas",
      actividadAsignada: "Integración de equipos y orientación de proyecto",
      actividadRealizada: "Elaboración de junta para la orientación de proyecto", idStatus:7},
    { idConsultor: 1, idActividad: 2, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Desarrollo del sistema', horas: 3, fecha: '13/01/2024', estatus:'ejecucion', observacion:'Observacion 2', proyectoExcel: "Continuidad Operativa",
      idIncidente: "S-1066361",
      descripcionCorta: "Sistema de gestión de Bitácoras de Fábricas",
      actividadAsignada: "Integración de equipos y orientación de proyecto",
      actividadRealizada: "Ambientación de proyecto y lectura de documentación sobre el este.", idStatus:7},
    { idConsultor: 1, idActividad: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Desarrollo del sistema', horas: 8, fecha: '14/01/2024', estatus:'ejecucion', observacion:'Observacion 1', proyectoExcel: "Continuidad Operativa",
      idIncidente: "S-1066361",
      descripcionCorta: "Sistema de gestión de Bitácoras de Fábricas",
      actividadAsignada: "Integración de equipos y orientación de proyecto",
      actividadRealizada: "Lectura de documentación para la creación de propuestas y generación de dudas.", idStatus:0},
    //   actividadRealizada: "Lectura de documentación para la creación de propuestas y generación de dudas."},
    // { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Analisis de requerimiento', horas: 8, fecha: '13/01/2021', idStatus:7},
    // { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Desarollo del sistema', horas: 8, fecha: '13/01/2021', idStatus:0},
    // { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Desarrollo del sistema', horas: 8, fecha: '13/01/2021', idStatus:0},
    // { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Junta para discusión de proyecto', horas: 8, fecha: '13/01/2021', idStatus:0},
    // { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Testing del módulo de bitácoras', horas: 8, fecha: '13/01/2021', idStatus:7},
    // { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2021', idStatus:7},
    // { idConsultor: 2, periodo:'Enero', consultor: 'Carlos Fernández López', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Diseño de base de datos', horas: 8, fecha: '10/01/2021', idStatus:0},
    // { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/02/2021', idStatus:0},
    // { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Configuración de hardware', horas: 8, fecha: '20/02/2021', idStatus:0},
    // { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/03/2021', idStatus:0},
    // { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/03/2021', idStatus:0},
    // { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchez', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '20/01/2021', idStatus:0},
    // { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '21/01/2021', idStatus:0},
    // { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Eduardo Silva', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '09/02/2021', idStatus:0},
  
  ]


  
}
