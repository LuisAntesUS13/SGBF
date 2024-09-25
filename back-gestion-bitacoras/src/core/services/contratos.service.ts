import { Injectable } from '@nestjs/common';
import { ConsultaContratoRequest } from '../model/request/contratoRequest';
import { ContratosRepository } from '../repository/contratos.repository';
import { ContratoResponse } from '../model/response/contratoResponse';

@Injectable()
export class ContratosService {
  constructor(private readonly contratosRepository: ContratosRepository) {}

  public async getContratos(
    consultaContratoRequest: ConsultaContratoRequest,
  ): Promise<ContratoResponse> {
    const datosLogin = await this.contratosRepository.getContratos(
      consultaContratoRequest,
    );

    return datosLogin;
  }
}
