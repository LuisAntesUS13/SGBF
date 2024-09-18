import { BootstrapOptions, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.css'],
})
export class RequerimientosComponent {
  datosEnviar: any = [];

  mostrarFormularioRequerimiento: boolean = false;
  formularioRequerimientoGuardado: boolean = false;
 requerimientoSeleccionado: any = null;
 tipoSeleccionado: boolean = false;


 formularioRequerimiento!: FormGroup;


  llavesBuscador: string[] = ['identificador','identificador', 'nombre'];


  datosConsultoresDisponibles : any = [
    {
      id: 1,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Manuel Antonio',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
      estatus: false
    },
    {
      id: 2,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Cesar Daniel',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
      estatus: false
    },
    {
      id: 3,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: 'Analista',
      consultor: 'Juan Manuel',
      fecha_inicio: '31/05/2024',
      fecha_termino: '',
      estatus: false
    },
    {
      id: 4,
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      perfil: ' Programador Sr Java',
      consultor: 'Roberto Antonio',
      fecha_inicio: '15/05/2024',
      fecha_termino: '',
      estatus: false
    },
  ];


  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private confirmarModalService: ConfirmarModalService,
    private spinnerService: SpinnerService,
    private fb: FormBuilder,
  ) {
    // this.buscar();
    this.createFormPerfil();
  }

  ngOnInit(): void {
    // Obtener el parámetro de la ruta si existe
    // this.route.paramMap.subscribe((params) => {
    //   this.contrato = params.get('contrato');
    //   if (this.contrato) {
    //     console.log(`Parámetro contrato: ${this.contrato}`);
    //   } else {
    //     console.log('El parámetro contrato no está presente en la ruta');
    //   }
    // });
  }


  nuevoRequerimiento(tipo: boolean, dato:any){
    this.mostrarFormularioRequerimiento = true;
    this.formularioRequerimientoGuardado = false;

    this.createFormPerfil();
    if(!tipo){
      this.formularioRequerimientoGuardado = true;

      this.formularioRequerimiento.get('no_contrato')?.setValue(dato.no_contrato);
      this.formularioRequerimiento.get('identificador_req')?.setValue(dato.identificador_req);
      this.formularioRequerimiento.get('nombre_req')?.setValue(dato.nombre_req);
      this.formularioRequerimiento.get('descripcion_req')?.setValue(dato.descripcion_req);
      this.formularioRequerimiento.get('lider_tecnico')?.setValue(dato.lider_tecnico);
      this.formularioRequerimiento.get('responsable')?.setValue(dato.responsable);
      this.formularioRequerimiento.get('tipo_accion')?.setValue(dato.tipo_accion);
      this.formularioRequerimiento.get('modulo_aplicativo')?.setValue(dato.modulo_aplicativo);
      this.formularioRequerimiento.get('area_sol')?.setValue(dato.area_sol);

    }

  }

  guardarRequerimiento(){
    this.toastrService.success('Requerimiento guardado con exito');


    this.datosConsultoresDisponibles[0].identificador_req = this.formularioRequerimiento.get('identificador_req')?.value;
    this.datosConsultoresDisponibles[0].nombre_req = this.formularioRequerimiento.get('nombre_req')?.value;
    this.datosConsultoresDisponibles[0].descripcion_req = this.formularioRequerimiento.get('descripcion_req')?.value;
    this.datosConsultoresDisponibles[0].lider_tecnico = this.formularioRequerimiento.get('lider_tecnico')?.value;
    this.datosConsultoresDisponibles[0].responsable = this.formularioRequerimiento.get('responsable')?.value;
    this.datosConsultoresDisponibles[0].tipo_accion = this.formularioRequerimiento.get('tipo_accion')?.value;
    this.datosConsultoresDisponibles[0].modulo_aplicativo = this.formularioRequerimiento.get('modulo_aplicativo')?.value;
    this.datosConsultoresDisponibles[0].area_sol = this.formularioRequerimiento.get('area_sol')?.value;

    // this.datosEnviar.push({
    //   total_paginas: 1,
    //   total_registros: 10,
    //   pagina_actual: 1,
    //   no_contrato:  this.formularioRequerimiento.get('no_contrato')?.value,
    //   identificador_req:  this.formularioRequerimiento.get('identificador_req')?.value,
    //   nombre_req:  this.formularioRequerimiento.get('nombre_req')?.value,
    //   descripcion_req:  this.formularioRequerimiento.get('descripcion_req')?.value,
    //   lider_tecnico:  this.formularioRequerimiento.get('lider_tecnico')?.value,
    //   responsable:  this.formularioRequerimiento.get('responsable')?.value,
    //   tipo_accion:  this.formularioRequerimiento.get('tipo_accion')?.value,
    //   modulo_aplicativo:  this.formularioRequerimiento.get('modulo_aplicativo')?.value,
    //   area_sol:  this.formularioRequerimiento.get('area_sol')?.value,

    // });
  }

  regresarInicio(){
    this.mostrarFormularioRequerimiento = false;
  }


  createFormPerfil() {
    this.formularioRequerimiento = this.fb.group({
      no_contrato: [''],
      lider_tecnico: ['Jose Luis'],
      identificador_req: [''],
      nombre_req: [''],
      descripcion_req: [''],
      responsable: [''],
      tipo_accion: [''],
      modulo_aplicativo: [''],
      area_sol: ['']
    });

    this.formularioRequerimiento.get('lider_tecnico')?.disable();
  }

  eliminar(){
    this.confirmarModalService
    .abriraModalPregunta('Estas seguro de eliminar este consultor')
    .subscribe(async (result) => {
      if (result) {
        this.toastrService.success('Consultor eliminado correctamente');
        this.datosEnviar.shift();
      }
    });
  }




  buscar() {    
    this.spinnerService.mostrarSpinner();
    // Simulate an async operation
    setTimeout(() => {
      this.spinnerService.ocultarSpinner();
    }, 2000);
  }

}
