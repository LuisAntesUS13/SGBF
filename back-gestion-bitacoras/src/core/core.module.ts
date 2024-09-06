import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnectionService } from './services/db-connection-service';
import DBConfig from './config/db-config';
import { ConfigModule } from '@nestjs/config';
import { RepositoriosModule } from './repository/repository-module';
import { ProcesoController } from './controller/proceso-controller';
import { AccionService } from './services/prueba.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Esto lo hace accesible globalmente en toda la app
      envFilePath: '.env', // Especifica el archivo .env a usar
    }),
    TypeOrmModule.forRootAsync({
      name: DBConfig.getDBNombre(),
      useClass: DBConnectionService,
      inject: [DBConnectionService],
    }),
    RepositoriosModule,
  ],
  controllers: [ProcesoController],
  providers: [DBConnectionService, AccionService],
})
export class BusinessCoreModule {}
