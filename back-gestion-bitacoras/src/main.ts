import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API } from './core/util/db-enum';
import { RUTA_GLOBAL } from './core/util/global-enum';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware para desactivar la caché a nivel global
  app.use((req, res, next) => {
    res.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate',
    );
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
    next();
  });

  // Middleware para eliminar cabeceras condicionales y evitar respuestas 304
  app.use((req, res, next) => {
    delete req.headers['if-modified-since'];
    delete req.headers['if-none-match'];
    next();
  });

  const optionsCors = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(optionsCors);

  app.setGlobalPrefix(RUTA_GLOBAL.PATH);
  app.use(bodyParser.json({ limit: '10mb' })); // Aquí defines el límite de 10MB o el valor que necesites
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  const port = process.env.SGBD_PORT || API.API_PORT;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
