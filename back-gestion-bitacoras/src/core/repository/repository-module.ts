import { Module } from '@nestjs/common';
import { LoginRepository } from './login.repository';
import { PermisosRepository } from './permisos.repository';

@Module({
  imports: [
    // TypeOrmModule.forFeature([AccionRepository], DBConfig.getDBNombre()), // Exclusivo si hya enyidades
  ],
  providers: [LoginRepository, PermisosRepository],
  exports: [LoginRepository, PermisosRepository], // Exporta el repositorio si necesitas usarlo en otros módulos
})
export class RepositoriosModule {}
