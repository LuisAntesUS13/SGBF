import { Injectable } from '@nestjs/common';
import {
  ConsultaContratoRequest,
  RegistraActualizaContratoRequest,
} from '../model/request/contratoRequest';
import { ContratosRepository } from '../repository/contratos.repository';
import {
  ActualizaRegistraResponse,
  ContratoResponse,
} from '../model/response/contratoResponse';
import { ArchivoRepository } from '../repository/archivo.repository';
import { CustomException } from '../util/errores';
import { folderArchivos, tipoArchivos } from '../util/global-enum';
import { ArchivoRequest } from '../model/request/archivoRequest';
import { GeneralRepository } from '../repository/general.repository';

@Injectable()
export class ContratosService {
  constructor(
    private readonly contratosRepository: ContratosRepository,
    private readonly archivoRepository: ArchivoRepository,
    private readonly generalRepository: GeneralRepository,
  ) {}

  public async getContratos(
    consultaContratoRequest: ConsultaContratoRequest,
  ): Promise<ContratoResponse[]> {
    const datosLogin = await this.contratosRepository.getContratos(
      consultaContratoRequest,
    );

    return datosLogin;
  }

  public async addUpdateContratos(
    registraActualizaContratoRequest: RegistraActualizaContratoRequest,
  ): Promise<ActualizaRegistraResponse> {
    registraActualizaContratoRequest.id_usuario = 1;
    registraActualizaContratoRequest.ip = '127.0.0.1';

    try {
      const nombreArchivo =
        'contrato_' + registraActualizaContratoRequest.no_contrato;

      const ruta = folderArchivos.ruta + 'contratos/';

      const rutaCompleta = await this.generalRepository.guardaArchivo(
        registraActualizaContratoRequest.archivo,
        ruta,
        nombreArchivo,
      );

      const archivo: ArchivoRequest = {
        id_archivo: registraActualizaContratoRequest.id_archivo,
        nombre: nombreArchivo,
        id_extencion: tipoArchivos.pdf,
        ruta: rutaCompleta,
        id_usuario: registraActualizaContratoRequest.id_usuario,
        ip: registraActualizaContratoRequest.ip,
      };

      console.log(archivo);

      const datosArchivos =
        await this.archivoRepository.addUpdateArchivo(archivo);

      registraActualizaContratoRequest.id_archivo = datosArchivos.id_archivo;
    } catch (error) {
      throw new CustomException(error, '2fb67f0a-4af5-42e5-a8a3-a814ebe6c111');
    }

    const datosLogin = await this.contratosRepository.addUpdateContratos(
      registraActualizaContratoRequest,
    );

    return datosLogin;
  }
}
