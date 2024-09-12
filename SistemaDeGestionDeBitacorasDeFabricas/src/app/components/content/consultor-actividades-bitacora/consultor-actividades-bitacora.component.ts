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


  limpiarInput() {
    this.actividadAsignada = '';  
    this.horasRequeridas = '';  
    this.actividadRealizada = '';  
  }
  

  valorInput(){
    this.actividadAsignada = 'Revisión de desarrollo';  
    this.horasRequeridas = '8'; 
    this.actividadRealizada = 'Junta para la discusión del desarrollo de avances del proyecto';
    const newDate = new Date('2024-01-13T00:00:00');   // Establecer cualquier fecha
    const year = newDate.getFullYear();
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);  // Asegura dos dígitos en el mes
    const day = ('0' + newDate.getDate()).slice(-2);  // Asegura dos dígitos en el día

    this.selectedDate = `${year}-${month}-${day}`;
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

 // Inicializa con null para que esté vacío

  // Función para establecer la fecha predeterminada en formato yyyy-mm-dd
  resetDate() {
    this.selectedDate = null;  // También puedes usar '' (cadena vacía)
  }

  pestanas = [
    { id: 1, nombre: 'Actividad', activo: true },
    { id: 2, nombre: 'Observaciones', activo: false },
  ];

  listadoEstatus = [
    { folio: 1, nombre: 'En ejecucion', activo: false, total: 5, class: 'ejecucion' },
    { folio: 2, nombre: 'Espera de revisión', activo: false, total: 2, class: 'revision' },
    { folio: 3, nombre: 'Espera de autorización', activo: false, total: 3,  class: 'autorizacion'},
    { folio: 4, nombre: 'Finalizados', activo: false, total: 10, class: 'finalizado'},
    { folio: 5, nombre: 'Rechazados', activo: false, total: 8, class: 'rechazado'},
  ];
  
  actividades = [
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2024', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2024', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2024', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2024', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2024', estatus:'ejecucion'},
    { idConsultor: 1, periodo:'Enero', consultor: 'Luis Eduardo Antes Villa', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas',actividad: 'Revisión de desarrollo', horas: 8, fecha: '13/01/2024', estatus:'ejecucion'},
    { idConsultor: 2, periodo:'Enero', consultor: 'Carlos Fernández López', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Diseño de base de datos', horas: 8, fecha: '10/01/2024', estatus: 'autorizacion' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Desarrollo del backend', horas: 8, fecha: '19/02/2024', estatus:'finalizado' },
    { idConsultor: 3, periodo:'Febrero', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Configuración de hardware', horas: 8, fecha: '20/02/2024', estatus:'rechazado' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '15/03/2024', estatus:'revision' },
    { idConsultor: 3, periodo:'Marzo', consultor: 'Ana Martínez Ruiz', lider: 'Juan Gutiérrez', proyecto: 'Sistema de gestión de bitácoras de fábricas', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '16/03/2024', estatus:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchez', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '20/01/2024', estatus:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Juan Gutiérrez', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '21/01/2024', estatus:'revision' },
    { idConsultor: 4, periodo:'Enero-Febrero', consultor: 'Javier Rodríguez Sánchezs', lider: 'Eduardo Silva', proyecto: 'Proyecto 2', actividad: 'Análisis de vulnerabilidades', horas: 8, fecha: '09/02/2024', estatus:'revision' },
  
  ]


}
