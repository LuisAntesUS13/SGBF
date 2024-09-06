import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API } from './core/util/db-enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SGBD_PORT || API.PORT;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
