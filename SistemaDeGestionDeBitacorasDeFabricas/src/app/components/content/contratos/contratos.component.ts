import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css'],
})
export class ContratosComponent {
  showCamvasPrimario: boolean = false;
  tituloPrimario: string = '';

  datosEnviar: any = [];

  datos1 = [
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1017',
      fecha_inicio: '2024-02-15',
      fecha_termino: '2024-05-20',
      monto: 18000,
      consultora: 'Tech Solutions S.A.',
      metodo_pago: 'Transferencia',
      Formapago: 'Pago Único',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1018',
      fecha_inicio: '2024-03-10',
      fecha_termino: '2024-06-15',
      monto: 17000,
      consultora: 'Innovative Tech Group',
      metodo_pago: 'Tarjeta de Crédito',
      Formapago: 'Mensual',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1019',
      fecha_inicio: '2024-01-20',
      fecha_termino: '2024-04-25',
      monto: 16000,
      consultora: 'SoftTech Solutions',
      metodo_pago: 'Cheque',
      Formapago: 'Pago Único',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1020',
      fecha_inicio: '2024-04-01',
      fecha_termino: '2024-07-05',
      monto: 18500,
      consultora: 'NextGen IT Services',
      metodo_pago: 'Transferencia',
      Formapago: 'Trimestral',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1021',
      fecha_inicio: '2024-05-05',
      fecha_termino: '2024-08-10',
      monto: 19000,
      consultora: 'Digital Innovators Ltd.',
      metodo_pago: 'Tarjeta de Débito',
      Formapago: 'Mensual',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1022',
      fecha_inicio: '2024-02-25',
      fecha_termino: '2024-05-30',
      monto: 17500,
      consultora: 'Cloud Computing Corp.',
      metodo_pago: 'Efectivo',
      Formapago: 'Pago Único',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1023',
      fecha_inicio: '2024-03-20',
      fecha_termino: '2024-06-25',
      monto: 16500,
      consultora: 'CyberTech Systems',
      metodo_pago: 'Transferencia',
      Formapago: 'Trimestral',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1024',
      fecha_inicio: '2024-01-30',
      fecha_termino: '2024-05-05',
      monto: 15500,
      consultora: 'Digital Solutions Co.',
      metodo_pago: 'Tarjeta de Crédito',
      Formapago: 'Mensual',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1025',
      fecha_inicio: '2024-02-10',
      fecha_termino: '2024-05-15',
      monto: 20000,
      consultora: 'DataSoft Technologies',
      metodo_pago: 'Cheque',
      Formapago: 'Pago Único',
    },
    {
      total_paginas: 1,
      total_registros: 10,
      pagina_actual: 1,
      no_contrato: 'C-1026',
      fecha_inicio: '2024-04-10',
      fecha_termino: '2024-07-15',
      monto: 19500,
      consultora: 'InfoTech Global',
      metodo_pago: 'Transferencia',
      Formapago: 'Trimestral',
    },
  ];

  constructor(private toastrService: ToastrService, private router: Router) {
    this.datosEnviar = this.datos1;
  }

  abrirModal() {
    this.tituloPrimario = 'Registro de contrato';
    this.showCamvasPrimario = true;
  }

  cerrarCamvasPrimario() {
    this.showCamvasPrimario = false;
  }

  guardar() {
    this.showCamvasPrimario = false;
    this.toastrService.success('Datos guardados correctamente');
  }

  buscar(page: number) {
    this.datosEnviar = this.datos1;
  }

  obtenerEvento(event: any) {
    const pageSize = event.registros_por_pagina;
    const page = event.pagina_actual;

    console.log(event.pagina_actual);
    this.buscar(page);
  }

  adminRequerimientos() {
    this.router.navigate(['/content/requerimientos']);
  }
}
