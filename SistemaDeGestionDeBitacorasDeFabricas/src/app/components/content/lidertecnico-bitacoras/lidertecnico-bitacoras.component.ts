import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lidertecnico-bitacoras',
  templateUrl: './lidertecnico-bitacoras.component.html',
  styleUrls: ['./lidertecnico-bitacoras.component.css']
})

export class LidertecnicoBitacorasComponent {

  constructor(private router: Router) {}

  inputContrato: string = "";
  selectedFabrica: string = "";


  navigateWithPeriodo(periodo: string, nombreProyecto: string, anho: string) {
    this.router.navigate(['/content/lidertecnico/bitacora/actividades/' + periodo + '/' + nombreProyecto + '/' + anho])
  }

  get filtrarFabricasPorContrato() {
    if (!this.inputContrato) {
      return [];
    }
    
    return this.fabricas.filter(fabrica => 
      fabrica.contrato.toUpperCase() === this.inputContrato.toUpperCase());
  }

  get filtrarProyectosPorFabrica(){
    if (!this.selectedFabrica) {
      return [];
    }
    return this.proyectos.filter(proyecto => proyecto.fabrica  === this.selectedFabrica)
  }

  proyectos = [
    {idProyecto: 1, fabrica:'Ultrasist', nombreProyecto: 'Sistema de gestión de bitácoras de fábricas', requerimiento:'S-1066361', lider: 'Juan Luis Guitérrez Lopez', responsable: 'Azir Lenin Herrera Aguilar'},
    {idProyecto: 2, fabrica:'Ultrasist', nombreProyecto: 'Proyecto 2', requerimiento:'S-1066361',lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
    {idProyecto: 3, fabrica:'Fabrica 2', nombreProyecto: 'Proyecto 1', requerimiento:'T-1066362',lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
    {idProyecto: 4, fabrica:'Fabrica 2', nombreProyecto: 'Proyecto 2', requerimiento:'U-1066363',lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
    {idProyecto: 4, fabrica:'Fabrica 2', nombreProyecto: 'Proyecto 2', requerimiento:'U-1066363',lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
  ];

  periodos = [
    {idProyecto: 1, periodo: 'Enero', anho: '2024'},
    {idProyecto: 1, periodo: 'Febrero', anho:'2024'},
    {idProyecto: 1, periodo: 'Marzo', anho:'2024'},
    {idProyecto: 1, periodo: 'Abril', anho:'2024'},
    {idProyecto: 1, periodo: 'Mayo', anho:'2024'},
    {idProyecto: 2, periodo: 'Enero-Febrero', anho:'2024'},
    {idProyecto: 2, periodo: 'Febrero-Marzo', anho:'2024'},
    {idProyecto: 2, periodo: 'Marzo-Abril', anho:'2024'},
    {idProyecto: 2, periodo: 'Abril-Mayo', anho:'2024'},
    {idProyecto: 2, periodo: 'Mayo-Junio', anho:'2024'},
    {idProyecto: 3, periodo: 'Enero-Febrero', anho:'2024'},
    {idProyecto: 3, periodo: 'Febrero-Marzo', anho:'2024'},
    {idProyecto: 3, periodo: 'Marzo-Abril', anho:'2024'},
    {idProyecto: 3, periodo: 'Abril-Mayo', anho:'2024'},
    {idProyecto: 3, periodo: 'Mayo-Junio', anho:'2024'},
    {idProyecto: 4, periodo: 'Enero-Febrero', anho:'2024'},
    {idProyecto: 4, periodo: 'Febrero-Marzo', anho:'2024'},
    {idProyecto: 4, periodo: 'Marzo-Abril', anho:'2024'},
    {idProyecto: 4, periodo: 'Abril-Mayo', anho:'2024'},
    {idProyecto: 4, periodo: 'Mayo-Junio', anho:'2024'},
  ]
  
  getPeriodosPorProyecto(idProyecto: number) {
    return this.periodos.filter(p => p.idProyecto === idProyecto);
  }

  
  fabricas = [
    {idFabrica: 1, nombreFabrica: 'Ultrasist', contrato: 'CT-0015-24'},
    {idFabrica: 2, nombreFabrica: 'Fabrica 2', contrato: 'CT-0015-24'},
    {idFabrica: 3, nombreFabrica: 'Fabrica 3', contrato: 'CT-0015-25'},
    {idFabrica: 4, nombreFabrica: 'Fabrica 4', contrato: 'CT-0015-26'},
    {idFabrica: 5, nombreFabrica: 'Fabrica 5', contrato: 'CT-0015-26'},
  ]

}


