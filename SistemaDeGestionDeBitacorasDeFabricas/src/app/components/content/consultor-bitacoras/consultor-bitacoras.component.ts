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
  
  bitacoras = [
    { id: 1,numConsultor: 1, proyecto: 'Sistema de gestión de bitácoras de fábricas', anho: '2021', periodo: 'Mayo'},
    { id: 2,numConsultor: 1, proyecto: 'Sistema de control de inventarios', anho: '2021', periodo: 'Julio'},
    { id: 3,numConsultor: 1, proyecto: 'Implementación de CRM', anho: '2021', periodo: 'Agosto'},
    { id: 3,numConsultor: 1, proyecto: 'Implementación de CRM', anho: '2021', periodo: 'Septiembre'},
    { id: 4,numConsultor: 1, proyecto: 'Optimización de cadena de suministro', anho: '2021', periodo: 'Octubre'},
  ]
  
  detail(periodo: string) {
    this.router.navigate(['/content/consultor/bitacora/actividades', periodo]);
  }
  
  selectedOption: string | undefined;
  bitacorasFiltradas: any[] | undefined;
  
  ngOnInit(){
    this.selectedOption = 'Todos';
    this.bitacorasFiltradas = this.bitacoras;
  }

  filtrarBitacorasPorProyecto(){
    if(this.selectedOption === 'Todos'){
      return this.bitacorasFiltradas = this.bitacoras;
    }else{
      return this.bitacorasFiltradas = this.bitacoras.filter(bitacoras => bitacoras.proyecto === this.selectedOption);
    }
  };
  
}
