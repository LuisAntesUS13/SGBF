import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consultor-bitacoras',
  templateUrl: './consultor-bitacoras.component.html',
  styleUrls: ['./consultor-bitacoras.component.css']
})
export class ConsultorBitacorasComponent {

  constructor(private router: Router){}

  options = [
    {value: 'Todos', label:'Todos'},
    {value: 'Sistema de gestión de bitácoras de fábricas', label:'Sistema de gestión de bitácoras de fábricas'},
    {value: 'Sistema de control de inventarios', label:'Sistema de control de inventarios'},
    {value: 'Implementación de CRM', label:'Implementación de CRM'},
    {value: 'Optimización de cadena de suministro', label:'Optimización de cadena de suministro'},
  ]

  proyectos = [
    {idProyecto: 1, nombre: 'Proyecto 1', lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
    {idProyecto: 2, nombre: 'Proyecto 2', lider: 'María Pérez', responsable: 'Luis Gómez'},
  ];

  periodos = [
    {idProyecto: 1, periodo: 'enero'},
    {idProyecto: 1, periodo: 'febrero'},
    {idProyecto: 1, periodo: 'Marzo'},
    {idProyecto: 1, periodo: 'Abril'},
    {idProyecto: 1, periodo: 'Mayo'},
    {idProyecto: 2, periodo: 'Enero/Febrero'},
    {idProyecto: 2, periodo: 'Febrero/Marzo'},
    {idProyecto: 2, periodo: 'Marzo/Abril'},
    {idProyecto: 2, periodo: 'Abril/Mayo'},
    {idProyecto: 2, periodo: 'Mayo/Junio'},

  ]

  

  detail(periodo: string) {
    this.router.navigate(['/content/consultor/bitacora/actividades', periodo]);
  }
  
  selectedOption: string | undefined;
  
  ngOnInit(){
    this.selectedOption = 'Todos';
  }

  getPeriodosPorProyecto(idProyecto: number) {
    return this.periodos.filter(p => p.idProyecto === idProyecto);
  }
  
}
