import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';


@Component({
  selector: 'app-reasignar-lider-equipo',
  templateUrl: './reasignar-lider-equipo.component.html',
  styleUrls: ['./reasignar-lider-equipo.component.css']
})


export class ReasignarLiderEquipoComponent {

  datosConsultores : any= [
  ];

  datosConsultoresDisponibles : any = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Manuel Antonio',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Cesar Daniel',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Analista',
      consultor: 'Juan Manuel',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Roberto Antonio',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
    },
  ];


  datosPefil = [
    {
      id: 1,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      utilizados: 1,
      cantidad: 5,
    },
    {
      id: 2,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Jr Java',
      utilizados: 2,
      cantidad: 2,
    },
    {
      id: 3,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Analista',
      utilizados: 0,
      cantidad: 1,
    },
    {
      id: 4,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Tester',
      utilizados: 2,
      cantidad: 2,
    },
  ];

  datos1:any = [];

  tituloPrimario: string = '';
  seleccionado: number = 1;
  mostrarConsultores: boolean = false;
  mostrarLider: boolean = false;


  tipoSeleccionLider:boolean = false;
  guardadoLider:boolean = false;
  formularioLider!: FormGroup;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private confirmarModalService: ConfirmarModalService
  ) {
   this.createFormPerfil();
  }


  createFormPerfil() {
    this.formularioLider = this.fb.group({
      no_contrato: [''],
      lider_texnico: [''],
      nuevo_lider_texnico: [''],
      observaciones: [''],
    });
  }

  obtenerEvento(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual;

    console.log(event.pagina_actual);
    this.buscar(page);
  }
  
  regresarInicio(){
    this.mostrarLider = false;
    this.guardadoLider = false;
  }

  regresarLider(){
    this.mostrarConsultores = false;
  }

  buscar(numero:number){

  }

  mostrarSeccionLider(tipo:boolean, datos:any){
    this.createFormPerfil();
    this.tipoSeleccionLider = tipo;

    this.mostrarLider = true;

    this.guardadoLider = false;

    if(!tipo){
      this.guardadoLider = true;
      this.formularioLider.get('lider_texnico')?.setValue(datos.lider_texnico);
      this.formularioLider.get('no_contrato')?.setValue(datos.no_contrato);
      this.formularioLider.get('nuevo_lider_texnico')?.setValue(datos.nuevo_lider_texnico);
      this.formularioLider.get('observaciones')?.setValue(datos.observaciones);
    }
  }

  cerrarCamvasPrimario(){
    this.mostrarConsultores = false;
  }

  guardar(){

  }

  guardarLider(){
    this.guardadoLider = true;
    this.toastrService.success('Lidear asignado correctamente');

    this.datos1.push({
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      lider_texnico: this.formularioLider.get('lider_texnico')?.value,
      no_contrato: this.formularioLider.get('no_contrato')?.value,
      nuevo_lider_texnico: this.formularioLider.get('nuevo_lider_texnico')?.value,
      observaciones:this.formularioLider.get('observaciones')?.value ,
      total_integrantes : 5
    });

    console.log(this.datos1);
  }

  agregarConsultor(id: number){

     // Remueve el objeto de array1 y lo almacena en una variable
    let objetoRemovido = this.datosConsultoresDisponibles.splice(id, 1)[0];
    
    // Añade el objeto removido a array2
    this.datosConsultores.push(objetoRemovido);

  }

  quitarConsultor(id: number){
        // Remueve el objeto de array1 y lo almacena en una variable
        let objetoRemovido = this.datosConsultores.splice(id, 1)[0];
    
        // Añade el objeto removido a array2
        this.datosConsultoresDisponibles.push(objetoRemovido);
  }
}
