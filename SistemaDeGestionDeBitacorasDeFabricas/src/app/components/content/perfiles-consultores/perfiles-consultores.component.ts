import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'app-perfiles-consultores',
  templateUrl: './perfiles-consultores.component.html',
  styleUrls: ['./perfiles-consultores.component.css']
})
export class PerfilesConsultoresComponent {

  mostrarCargaCunsultor: boolean = false;

  mostrarRegistroConsultor: boolean = false;


  datosPefilDIsp :any  = [];

  datoSeleccionado: any = null;
  datosPefil:any = [
   {
    id: 1,
    total_paginas: 1,
    total_registros: 10,
    pagina_actual: 1,
    perfil: "Analista",
    monto: 1000,
    desc: "Aaaliasta de sistemas",
    cantidad: "10",
    asignados: 0
   },
   {
    id: 2,
    total_paginas: 1,
    total_registros: 10,
    pagina_actual: 1,
    perfil: "Programador",
    monto: 1000,
    desc: "Analiasta de programador",
    cantidad: "8",
    asignados: 0
   },
   {
    id: 3,
    total_paginas: 1,
    total_registros: 10,
    pagina_actual: 1,
    perfil: "Diseñador",
    monto: 1000,
    desc: "Analiasta de diseñador",
    cantidad: "2",
    asignados: 0
   }
    
  ];

  datosConsultores: any = [];

  formularioConsultor!: FormGroup;

  constructor( private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private confirmarModalService: ConfirmarModalService){


      this.createFormConsultor();
  }

  createFormConsultor() {
    this.formularioConsultor = this.fb.group({
      nombre: [''],
      primer_apellido: [''],
      segundo_apellido: [''],
      correo: [''],
      curp: [''],
      rfc: [''],
    });
  }


  buscar(){
    this.datosPefilDIsp =  this.datosPefil;
  }


  abrirCargaConsultor(dato: any) {
    this.datoSeleccionado = dato;
    this.mostrarCargaCunsultor = true;
  }

  regresar() {
    this.mostrarCargaCunsultor = false;
    this.mostrarRegistroConsultor = false;
  }
  
  nuevoConsultor(datos : any){
    this.createFormConsultor();

    if (datos != null) {
      this.formularioConsultor.get('nombre')?.setValue(datos.nombre);
      this.formularioConsultor.get('primer_apellido')?.setValue(datos.primer_apellido);
      this.formularioConsultor.get('segundo_apellido')?.setValue(datos.segundo_apellido);
      this.formularioConsultor.get('correo')?.setValue(datos.correo);
      this.formularioConsultor.get('rfc')?.setValue(datos.rfc);
      this.formularioConsultor.get('curp')?.setValue(datos.curp);
    }


    this.mostrarRegistroConsultor = true;
  }

  guardarConsultor(){

    this.toastrService.success('Datos del consultor guardado correctamente');

    let existe = this.datosConsultores.some((dato : any) => dato.nombre === this.formularioConsultor.get('nombre')?.value);

    if(!existe){
      this.datosConsultores.push({
        total_paginas: 1,
        total_registros: 10,
        pagina_actual: 1,
        nombre: this.formularioConsultor.get('nombre')?.value,
        primer_apellido: this.formularioConsultor.get('primer_apellido')?.value,
        segundo_apellido: this.formularioConsultor.get('segundo_apellido')?.value,
        correo: this.formularioConsultor.get('correo')?.value,
        rfc: this.formularioConsultor.get('rfc')?.value,
        curp: this.formularioConsultor.get('curp')?.value,
      });
    }
  
    this.mostrarRegistroConsultor = false;

  }

  eliminarConsultor() {

    this.confirmarModalService
      .abriraModalPregunta('Estas seguro de eliminar este consultor')
      .subscribe(async (result) => {
        if (result) {
          this.toastrService.success('Consultor eliminado correctamente');
          this.datosConsultores.shift();
        }
      });
      this.mostrarRegistroConsultor = false;
  }

}
