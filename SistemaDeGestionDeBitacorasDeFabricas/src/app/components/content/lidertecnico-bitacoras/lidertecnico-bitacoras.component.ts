import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lidertecnico-bitacoras',
  templateUrl: './lidertecnico-bitacoras.component.html',
  styleUrls: ['./lidertecnico-bitacoras.component.css']
})

export class LidertecnicoBitacorasComponent {

  constructor(private router: Router) {}

  navigateWithPeriodo(periodo: string) {
    this.router.navigate(['/content/lidertecnico/bitacora/actividades/' + periodo])
  }

  proyectos = [
    {idProyecto: 1, nombre: 'Proyecto 1', lider: 'Juan Guitérrez', responsable: 'Azir Aguilar'},
    {idProyecto: 2, nombre: 'Proyecto 2', lider: 'María Pérez', responsable: 'Luis Gómez'},
  ];

  periodos = [
    {idProyecto: 1, periodo: 'Enero'},
    {idProyecto: 1, periodo: 'Febrero'},
    {idProyecto: 1, periodo: 'Marzo'},
    {idProyecto: 1, periodo: 'Abril'},
    {idProyecto: 1, periodo: 'Mayo'},
    {idProyecto: 2, periodo: 'Enero-Febrero'},
    {idProyecto: 2, periodo: 'Febrero-Marzo'},
    {idProyecto: 2, periodo: 'Marzo-Abril'},
    {idProyecto: 2, periodo: 'Abril-Mayo'},
    {idProyecto: 2, periodo: 'Mayo-Junio'},

  ]
  
  getPeriodosPorProyecto(idProyecto: number) {
    return this.periodos.filter(p => p.idProyecto === idProyecto);
  }

}


