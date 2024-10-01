import { Body, Controller, HttpStatus, Ip, Post } from '@nestjs/common';
import { BaseResponse } from '../model/response/baseResponse';
import { ContratosService } from '../services/contratos.service';
import {
  ConsultaContratoRequest,
  RegistraActualizaContratoRequest,
} from '../model/request/contratoRequest';
import {
  ActualizaRegistraResponse,
  ContratoResponse,
} from '../model/response/contratoResponse';
import { ipDefecto } from '../util/global-enum';

@Controller('/contratos')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @Post('/getContratos')
  async ExecuteStoredProcedure(
    @Body() bodyRequest: ConsultaContratoRequest,
  ): Promise<BaseResponse<ContratoResponse[]>> {
    const datos = await this.contratosService.getContratos(bodyRequest);

    const resultado = {
      message: 'Contratos consultados exitosamente',
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/addUpdateContrato')
  async addUpdateContratos(
    @Body() bodyRequest: RegistraActualizaContratoRequest,
    @Ip() ip,
  ): Promise<BaseResponse<ActualizaRegistraResponse>> {
    const extractedIP = ip.match(/(?:\w+:)*(\d+\.\d+\.\d+\.\d+)/);
    const finalIP = extractedIP ? extractedIP[1] : ipDefecto.ip;
    bodyRequest.ip = finalIP;
    const datos = await this.contratosService.addUpdateContratos(bodyRequest);

    const resultado = {
      message: datos.mensaje,
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
