import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { BaseResponse } from '../model/response/baseResponse';
import { ContratosService } from '../services/contratos.service';
import { ConsultaContratoRequest } from '../model/request/contratoRequest';
import { ContratoResponse } from '../model/response/contratoResponse';

@Controller('/contratos')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @Post('/getContratos')
  async ExecuteStoredProcedure(
    @Body() consultaContratoRequest: ConsultaContratoRequest,
  ): Promise<BaseResponse<ContratoResponse[]>> {
    const datos = await this.contratosService.getContratos(
      consultaContratoRequest,
    );

    const resultado = {
      message: 'Contratos consultados exitosamente',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
