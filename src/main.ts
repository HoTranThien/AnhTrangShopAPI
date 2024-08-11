import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from'fs'

declare const module: any;

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('./secrets/private-key.pem'),
  //   cert: fs.readFileSync('./secrets/public-certificate.pem'),
  // };
  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions,
  // });
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }));
  app.enableCors();
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
