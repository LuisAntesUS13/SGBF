import { Controller, HttpStatus, Post } from '@nestjs/common';
import { BaseResponse } from '../model/response/baseResponse';
import { EquiposDeTrabajoService } from '../services/equiposDeTrabajo.service';
import {
  ConsultarConsultorResponse,
  ConsultarContratosResponse,
  ConsultarLiderTecnicoResponse,
} from '../model/response/equipoDeTrabajoResponse';

@Controller('/equiposDeTrabajo')
export class EquiposDeTrabajoController {
  constructor(
    private readonly equiposDeTrabajoService: EquiposDeTrabajoService,
  ) {}

  @Post('/getContratos')
  async getContratos(): Promise<BaseResponse<ConsultarContratosResponse[]>> {
    const datos = await this.equiposDeTrabajoService.getContratos();

    const resultado = {
      message: 'Contratos consultados exitosamente',
      success: true,
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getLiderTecnico')
  async getLiderTecnico(): Promise<
    BaseResponse<ConsultarLiderTecnicoResponse[]>
  > {
    const datos = await this.equiposDeTrabajoService.getLiderTecnico();

    const resultado = {
      message: 'Contratos consultados exitosamente',
      success: true,
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getConsultor')
  async getConsultor(): Promise<BaseResponse<ConsultarConsultorResponse[]>> {
    const datos = await this.equiposDeTrabajoService.getConsultor();

    const resultado = {
      message: 'Contratos consultados exitosamente',
      success: true,
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
