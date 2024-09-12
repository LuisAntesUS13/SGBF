import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css'],
})
export class ContratosComponent {
  contratoTipo: boolean = false;
  mostrarFormContrato: boolean = false;

  mostrarAgregarPerfil: boolean = false;

  formularioContrato!: FormGroup;
  formularioPerfil!: FormGroup;

  contratoGuardado: boolean = false;

  datosPefil:any = [];


  datosEnviar: any = [];



  // showCamvasPrimario: boolean = false;
  // tituloPrimario: string = '';


  // tituloSecundario: string = '';
  // seleccionado: number = 1;
  // seleccionadoPerfil: number = 1;
  // seleccionadoConsultores: number = 1;
  // showCamvaConsultores: boolean = false;
  // showCamvaPerfiles: boolean = false;


  datosConsultores = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Juan Manuel',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Jose Antonio',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
    },
  ];

  

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private confirmarModalService: ConfirmarModalService
  ) {
    this.createFormContrato();
    this.createFormPerfil();
  }

  createFormContrato() {
    this.formularioContrato = this.fb.group({
      no_contrato: [''],
      fecha_inicio: [''],
      fecha_termino: [''],
      monto: [''],
      consultora: [''],
      metodo_pago: [''],
      formapago: [''],
      cantidad: [''],
    });
  }

  createFormPerfil() {
    this.formularioPerfil = this.fb.group({
      perfil: [''],
      monto: [''],
      desc: [''],
      cantidad: [''],
    });
  }

  buscarContratos() {
    this.datosEnviar = [];
  }

  mostrarFormularioContrato(tipo: boolean, dato: any) {
    this.contratoTipo = tipo;
    this.createFormContrato();

    this.contratoGuardado = false;
    if (!tipo) {
      this.formularioContrato.get('no_contrato')?.setValue(dato.no_contrato);
      this.formularioContrato.get('fecha_inicio')?.setValue(dato.fecha_inicio);
      this.formularioContrato
        .get('fecha_termino')
        ?.setValue(dato.fecha_termino);
      this.formularioContrato.get('monto')?.setValue(dato.monto);
      this.formularioContrato.get('consultora')?.setValue(dato.consultora);
      this.formularioContrato.get('metodo_pago')?.setValue(dato.metodo_pago);
      this.formularioContrato.get('formapago')?.setValue(dato.formapago);
      this.formularioContrato.get('cantidad')?.setValue(dato.cantidad);
      this.contratoGuardado = true;
    }
    this.mostrarFormContrato = true;
  }

  mostrarForumarioCargaPerfil(tipo: boolean, dato: any) {
    this.createFormPerfil();
    if (!tipo) {
      this.formularioPerfil.get('perfil')?.setValue(dato.perfil);
      this.formularioPerfil.get('monto')?.setValue(dato.monto);
      this.formularioPerfil.get('desc')?.setValue(dato.desc);
      this.formularioPerfil.get('cantidad')?.setValue(dato.cantidad);
    }
    this.mostrarAgregarPerfil = true;
  }

  guardarContrato() {
    this.toastrService.success('Datos del contrato guardado correctamente');
    this.datosEnviar.push({
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: this.formularioContrato.get('no_contrato')?.value,
      fecha_inicio: this.formularioContrato.get('fecha_inicio')?.value,
      fecha_termino: this.formularioContrato.get('fecha_termino')?.value,
      monto: this.formularioContrato.get('monto')?.value,
      consultora: this.formularioContrato.get('consultora')?.value,
      metodo_pago: this.formularioContrato.get('metodo_pago')?.value,
      formapago: this.formularioContrato.get('formapago')?.value,
      cantidad: this.formularioContrato.get('cantidad')?.value,
      perfiles: []
    });

    this.contratoGuardado = true;

    // this.mostrarFormContrato = true;
  }

  guardarPerfil() {
    this.toastrService.success('Perfil guardado correctamente');

    let existe = this.datosPefil.some((dato : any) => dato.perfil === this.formularioPerfil.get('perfil')?.value);

    if(!existe){
      this.datosPefil.push({
        total_paginas: 1,
        total_registros: 10,
        pagina_actual: 1,
        perfil: this.formularioPerfil.get('perfil')?.value,
        monto: this.formularioPerfil.get('monto')?.value,
        desc: this.formularioPerfil.get('desc')?.value,
        cantidad: this.formularioPerfil.get('cantidad')?.value,
      });
    }

    this.mostrarAgregarPerfil = false;
  }


  eliminarPerfil() {
    this.mostrarAgregarPerfil = false;
    this.confirmarModalService
      .abriraModalPregunta('Estas seguro de eliminar el perfil')
      .subscribe(async (result) => {
        if (result) {
          this.toastrService.success('Perfil eliminado correctamente');
          this.datosPefil.shift();
        }
      });
  }



  recibeValorFechaInicio(nuevoValor: string) {
    this.formularioContrato.get('fecha_inicio')?.setValue(nuevoValor);
  }

  recibeValorFechaTermino(nuevoValor: string) {
    this.formularioContrato.get('fecha_termino')?.setValue(nuevoValor);
  }


  regresar() {
    this.mostrarFormContrato = false;
    this.mostrarAgregarPerfil = false;
  }

  buscar(page: number) {
    this.datosEnviar = [];
  }

  obtenerEvento(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual;

    console.log(event.pagina_actual);
    this.buscar(page);
  }

}
