import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lidertecnico-bitacoras',
  templateUrl: './lidertecnico-bitacoras.component.html',
  styleUrls: ['./lidertecnico-bitacoras.component.css']
})

export class LidertecnicoBitacorasComponent {

  constructor(private router: Router) {}

  navigateWithPeriodo(periodo: string, nombreProyecto: string, anho: string) {
    this.router.navigate(['/content/lidertecnico/bitacora/actividades/' + periodo + '/' + nombreProyecto + '/' + anho])
  }



  proyectos = [
    {idProyecto: 1, nombreProyecto: 'Sistema de gestión de bitácoras de fábricas', lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
    {idProyecto: 2, nombreProyecto: 'Proyecto 2', lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
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
  ]
  
  getPeriodosPorProyecto(idProyecto: number) {
    return this.periodos.filter(p => p.idProyecto === idProyecto);
  }

}


