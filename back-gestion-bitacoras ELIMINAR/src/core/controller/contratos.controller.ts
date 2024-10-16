import { Body, Controller, HttpStatus, Ip, Post } from '@nestjs/common';
import { BaseResponse } from '../model/response/baseResponse';
import { ContratosService } from '../services/contratos.service';
import {
  ConsultaContratoRequest,
  ConsultaPErfilesContratoRequest,
  RegistraActualizaContratoRequest,
} from '../model/request/contratoRequest';
import {
  ActualizaRegistraPerfilContratoResponse,
  ActualizaRegistraResponse,
  ContratoResponse,
  PerfilContratoResponse,
} from '../model/response/contratoResponse';
import { ipDefecto } from '../util/global-enum';
import { CatalogoAddUpdatePerfilContratoRequest } from '../model/request/catalogosRequest';

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
      success: true,
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

    const respuesta =
      await this.contratosService.addUpdateContratos(bodyRequest);

    const resultado = {
      message: respuesta.mensaje,
      success: respuesta.correcto,
      data: respuesta.data,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/addUpdatePerfilContrato')
  async addUpdatePerfilesContratos(
    @Body() bodyRequest: CatalogoAddUpdatePerfilContratoRequest,
    @Ip() ip,
  ): Promise<BaseResponse<ActualizaRegistraPerfilContratoResponse>> {
    const extractedIP = ip.match(/(?:\w+:)*(\d+\.\d+\.\d+\.\d+)/);
    const finalIP = extractedIP ? extractedIP[1] : ipDefecto.ip;
    bodyRequest.ip = finalIP;

    const respuesta =
      await this.contratosService.addUpdatePerfilesContratos(bodyRequest);

    const resultado = {
      message: respuesta.mensaje,
      success: respuesta.correcto,
      data: respuesta.data,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }

  @Post('/getPerfilesContratos')
  async getPerfilesContratos(
    @Body() bodyRequest: ConsultaPErfilesContratoRequest,
  ): Promise<BaseResponse<PerfilContratoResponse[]>> {
    const datos = await this.contratosService.getPerfilesContratos(bodyRequest);

    const resultado = {
      message: 'Perfiles del contrato consultados exitosamente',
      success: true,
      data: datos,
      statusCode: HttpStatus.ACCEPTED,
    };

    return resultado;
  }
}
