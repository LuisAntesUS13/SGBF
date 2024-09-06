import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AccionRepository } from './prueba.repository'; // Ajusta la ruta
// import DBConfig from '../config/db-config';

@Module({
  imports: [
    // TypeOrmModule.forFeature([AccionRepository], DBConfig.getDBNombre()), // Exclusivo si hya enyidades
  ],
  providers: [AccionRepository],
  exports: [AccionRepository], // Exporta el repositorio si necesitas usarlo en otros módulos
})
export class RepositoriosModule {}
