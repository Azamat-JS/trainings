import { Module } from '@nestjs/common';
import { OrderModule } from '../orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: "KAFKA_SERVICE",
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ["localhost:9092"]
        }
      }
    }
  ]),
    ConfigModule.forRoot({isGlobal:true, envFilePath:'.env'}),
    MongooseModule.forRoot(process.env.MONGO_URI),
  OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
