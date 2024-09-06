import { Injectable } from '@nestjs/common';
import { AccionRepository } from '../repository/prueba.repository';

@Injectable()
export class AccionService {
  constructor(private readonly accionRepository: AccionRepository) {}

  public async ExecuteStoredProcedure(): Promise<any> {
    return this.accionRepository.executeStoredProcedure();
  }
}
