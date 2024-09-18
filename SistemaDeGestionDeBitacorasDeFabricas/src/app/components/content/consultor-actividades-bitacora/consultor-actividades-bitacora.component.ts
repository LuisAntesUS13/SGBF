import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultor-actividades-bitacora',
  templateUrl: './consultor-actividades-bitacora.component.html',
  styleUrls: ['./consultor-actividades-bitacora.component.css']
})

export class ConsultorActividadesBitacoraComponent {
  
  actividadesFiltradas: any[] | undefined;
  showCamvasPrimario :boolean = false;
  tituloPrimario: string = "";

  selectedProyecto: string = ''; 
  selectedPeriodo: string = '';  
  isButtonDisabled: boolean = true;
  cardIsVisible: boolean = true;
  visualizarObservaciones: boolean = false;
  mostrarFecha: boolean = true;
  



  ngOnInit(){
    this.filtrarTabla();
  }

  filtrarTabla() {
    this.actividadesFiltradas = this.actividades.filter(actividad => {
      return actividad.proyecto === this.selectedProyecto && actividad.periodo === this.selectedPeriodo;
    });

    console.log(this.selectedPeriodo + ' y '+ this.selectedProyecto)

    if(this.selectedPeriodo != '' && this.selectedProyecto != ''){
      this.isButtonDisabled = false;
    }

    this.periodo = this.selectedPeriodo;
  }

  actividadAsignada: string = '';  
  horasRequeridas: string = ''; 
  actividadRealizada: string = '';  
  periodo: string = '';
  seleccionado: number = 1;
  isInputVisible = true;
  selectedDate: string | null = null; 
  requerimiento:string = '';


  limpiarInput() {
    this.actividadAsignada = '';  
    this.horasRequeridas = '';  
    this.actividadRealizada = '';  
    this.requerimiento = '';
  }
  

  valorInput(): void{
    
    this.actividadAsignada = 'Revisión de desarrollo';  
    this.horasRequeridas = '8'; 
    this.actividadRealizada = 'Junta para la discusión del desarrollo de avances del proyecto';
    this.requerimiento = 'S-1066361';

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

  isVisible = true; // Inicialmente visible
  

  ocultarModal(){
    this.cardIsVisible = !this.cardIsVisible;
  }

  mostrarObservaciones(){
    this.visualizarObservaciones = true;
  }

  toggleVisibility() {
    this.isVisible = false; 
    this.cardIsVisible = true;
    this.visualizarObservaciones = false;
    this.mostrarFecha = false;
  }

  aparecerPestanas(){
    this.isVisible = true;
    this.cardIsVisible = true;
    this.visualizarObservaciones = false;
    this.mostrarFecha = true;
  }
  resetDate() {
    this.selectedDate = null; 
  }

  pestanas = [
    { id: 1, nombre: 'Actividad', activo: true },
    { id: 2, nombre: 'Observaciones', activo: false },
  ];

  listadoEstatus = [
    { folio: 1, nombre: 'Espera de revisión', activo: true, total: 0 },
    { folio: 2, nombre: 'Espera de autorización', activo: false, total: 0 },
    { folio: 7, nombre: 'En observación', activo: false, total: 0 },
    { folio: 8, nombre: 'Finalizada', activo: false, total: 0 },
  ];

  imprimirObservacionesPorPeriodo(){
    return this.observacionPorPeriodo.filter(observacion =>{
      return observacion.proyecto === this.selectedProyecto && observacion.periodo === this.selectedPeriodo;
    })
  }

  
  imprimirObservacionesPorActividad(){
    return this.actividades.filter(actividad =>{
      actividad.observacion
    })

  }

  
  observacionPorActividad = [
    {idConsultor: 1, idActividad: 1, fecha: '13/01/2024', observaciones: 'Observación 1', remitente: 'Juan Guitérrez'},
    {idConsultor: 1, idActividad: 1, fecha: '13/01/2024', observaciones: 'Observación 2', remitente: 'Juan Guitérrez'},
    {idConsultor: 1, idActividad: 2, fecha: '13/01/2024', observaciones: 'Observación 1', remitente: 'Azir Aguilar'},
    {idConsultor: 1, idActividad: 1, fecha: '14/01/2024', observaciones: 'Observación 1', remitente: 'Azir Aguilar'},
    {idConsultor: 1, idActividad: 1, fecha: '15/01/2024', observaciones: 'Observación 1', remitente: 'Azir Aguilar'},
    {idConsultor: 1, idActividad: 1, fecha: '16/01/2024', observaciones: 'Observación 1', remitente: 'Azir Aguilar'},
    {idConsultor: 1, idActividad: 1, fecha: '17/01/2024', observaciones: 'Observación 1', remitente: 'Azir Aguilar'},
  ]

  
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
    { idConsultor: 1, idActividad: 1, 
      periodo:'Enero', 
      consultor: 'Luis Eduardo Antes Villa', 
      lider: 'Juan Gutiérrez', 
      proyecto: 'Sistema de gestión de bitácoras de fábricas',
      actividad: 'Desarrollo del sistema', 
      horas: 8, fecha: '14/01/2024', estatus:'ejecucion', 
      observacion:'Observacion 1', 
      proyectoExcel: "Continuidad Operativa",
      idIncidente: "S-1066361",
      descripcionCorta: "Sistema de gestión de Bitácoras de Fábricas",
      actividadAsignada: "Integración de equipos y orientación de proyecto",
      actividadRealizada: "Lectura de documentación para la creación de propuestas y generación de dudas.",idStatus:7},
    // { idConsultor: 1, idActividad: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Junta para discusión de proyecto', horas: 8, fecha: '15/01/2024', estatus:'ejecucion', observacion:'Observacion 1'},
    // { idConsultor: 1, idActividad: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Testing del módulo de bitácoras', horas: 8, fecha: '16/01/2024', estatus:'ejecucion', observacion:'Observacion 1'},
    // { idConsultor: 1, idActividad: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Documentación de proyecto', horas: 8, fecha: '17/01/2024', estatus:'ejecucion', observacion:'Observacion 1'},
    // { idConsultor: 1, idActividad: 1,periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '18/01/2024', estatus:'ejecucion', observacion:'Observacion 1'},
    // { idConsultor: 2, idActividad: 1,periodo:'Enero', consultor: 'Carlos Fernández López', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Diseño de base de datos', horas: 8, fecha: '19/01/2024', estatus: 'autorizacion', observacion:'Observacion 1'},
    // { idConsultor: 3, idActividad: 1,periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/02/2024', estatus:'finalizado', observacion:'Observacion 1'},
    // { idConsultor: 3, idActividad: 1,periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Configuración de hardware', horas: 8, fecha: '20/02/2024', estatus:'rechazado', observacion:'Observacion 1' },
    // { idConsultor: 3, idActividad: 1,periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/03/2024', estatus:'revision', observacion:'Observacion 1' },
    // { idConsultor: 3, idActividad: 1,periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/03/2024', estatus:'revision', observacion:'Observacion 1' },
    // { idConsultor: 4, idActividad: 1,periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchez', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '20/01/2024', estatus:'revision' },
    // { idConsultor: 4, idActividad: 1,periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '21/01/2024', estatus:'revision' },
    // { idConsultor: 4, idActividad: 1,periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Eduardo Silva', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '09/02/2024', estatus:'revision' },
  
  ]

  observacionPorPeriodo = [
    {idConsultor: 1, proyecto: 'Sistema de gestión de bitácoras de fábricas' , periodo: 'Enero', observaciones: 'Juan Gutiérrez(13/01/2024): Los registros en esta bitácora son demasiado vagos. No se especifican detalles críticos como las fechas exactas o los responsables de cada actividad, lo que la convierte en un documento poco fiable para hacer un seguimiento preciso de los eventos.', remitente: 'Juan Guitérrez'},
    {idConsultor: 1, proyecto: 'Sistema de gestión de bitácoras de fábricas' , periodo: 'Enero', observaciones: 'Azir Aguilar(13/01/2024): Parece que no existe un formato estandarizado para registrar los eventos. Algunas entradas son muy detalladas, mientras que otras apenas mencionan la actividad, lo que genera confusión y dificulta su comprensión.', remitente: 'Juan Guitérrez'},
    {idConsultor: 1, proyecto: 'Sistema de gestión de bitácoras de fábricas' , periodo: 'Enero', observaciones: 'Juan Gutiérrez(13/01/2024): Se nota que la bitácora no se mantiene al día. Hay eventos importantes que no han sido registrados de manera oportuna, lo que afecta su función como herramienta para la toma de decisiones en tiempo real.', remitente: 'Juan Guitérrez'},
  ]


}
