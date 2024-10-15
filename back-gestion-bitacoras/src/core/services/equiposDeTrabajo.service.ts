import { Injectable } from '@nestjs/common';
import { EquiposDeTrabajoRepository } from '../repository/equiposDeTrabajo.repository';
import {
  ConsultarConsultorResponse,
  ConsultarContratosResponse,
  ConsultarLiderTecnicoResponse,
} from '../model/response/equipoDeTrabajoResponse';

@Injectable()
export class EquiposDeTrabajoService {
  constructor(
    private readonly equiposDeTrabajoRepository: EquiposDeTrabajoRepository,
  ) {}

  public async getContratos(): Promise<ConsultarContratosResponse[]> {
    return await this.equiposDeTrabajoRepository.getContratos();
  }

  public async getLiderTecnico(): Promise<ConsultarLiderTecnicoResponse[]> {
    return await this.equiposDeTrabajoRepository.getLiderTecnico();
  }
  public async getConsultor(): Promise<ConsultarConsultorResponse[]> {
    return await this.equiposDeTrabajoRepository.getConsultor();
  }
}
