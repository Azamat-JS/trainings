import { Module } from '@nestjs/common';
import { OrderModule } from '../orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath:'.env'}),
    MongooseModule.forRoot(process.env.MONGO_URI),
  OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
