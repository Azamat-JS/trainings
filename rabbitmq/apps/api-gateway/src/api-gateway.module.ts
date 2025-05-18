import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_SERVICE_RABBITMQ } from './constants';

@Module({
  imports: [ClientsModule.register([
    {
      name: ORDER_SERVICE_RABBITMQ,
      transport: Transport.RMQ,
      options: {
        urls: ["amqp://guest:guest@localhost:5672"],
        queue: "order_queue",
        queueOptions: {
          durable: true
        },
        exchange: 'order_exchange'
      }
    }
  ])],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
