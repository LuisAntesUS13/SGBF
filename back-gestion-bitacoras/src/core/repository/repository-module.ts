import { Module } from '@nestjs/common';
import { LoginRepository } from './login.repository';
import { PermisosRepository } from './permisos.repository';
import { ContratosRepository } from './contratos.repository';
import { CatalogoRepository } from './catalogos.repository';
import { ArchivoRepository } from './archivo.repository';
import { GeneralRepository } from './general.repository';

@Module({
  imports: [
    // TypeOrmModule.forFeature([AccionRepository], DBConfig.getDBNombre()), // Exclusivo si hya enyidades
  ],
  providers: [
    LoginRepository,
    PermisosRepository,
    ContratosRepository,
    CatalogoRepository,
    ArchivoRepository,
    GeneralRepository,
  ],
  exports: [
    LoginRepository,
    PermisosRepository,
    ContratosRepository,
    CatalogoRepository,
    ArchivoRepository,
    GeneralRepository,
  ], // Exporta el repositorio si necesitas usarlo en otros módulos
})
export class RepositoriosModule {}
