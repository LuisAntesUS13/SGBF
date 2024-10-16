import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessCoreModule } from './core/core.module';
@Module({
  imports: [BusinessCoreModule, TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {}
