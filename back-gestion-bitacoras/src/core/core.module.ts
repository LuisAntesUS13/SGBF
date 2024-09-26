import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnectionService } from './services/db-connection-service';
import DBConfig from './config/db-config';
import { ConfigModule } from '@nestjs/config';
import { RepositoriosModule } from './repository/repository-module';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt-config';
import { LoginService } from './services/login.service';
import { ContratosService } from './services/contratos.service';
import { CatalogosService } from './services/catalogos.service';
import { LoginController } from './controller/login.controller';
import { ContratosController } from './controller/contratos.controller';
import { CatalogosController } from './controller/catalogos.controller';

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
    JwtModule.register({
      global: true,
      secret: jwtConfig.getJwtSecret(),
      signOptions: { expiresIn: '8h' },
    }),
    RepositoriosModule,
  ],
  controllers: [LoginController, ContratosController, CatalogosController],
  providers: [
    DBConnectionService,
    LoginService,
    ContratosService,
    CatalogosService,
  ],
})
export class BusinessCoreModule {}
