import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { PRODUCTS_PACKAGE_NAME } from '../constants';

@Module({
  imports: [ClientsModule.register([
    {
      name: PRODUCTS_PACKAGE_NAME
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
