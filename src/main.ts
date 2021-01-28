import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ModuleNotFoundExceptionFilter } from './exception-filter/model-not-found.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ModuleNotFoundExceptionFilter());
  await app.listen(3333);
}
bootstrap();
