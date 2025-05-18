import { Module } from "@nestjs/common";
import { OrderServiceController } from "./order-service.controller";
import { OrderServiceService } from "./order-service.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import {
  NOTIFICATION_SERVICE_RABBITMQ,
  PAYMENT_SERVICE_RABBITMQ,
} from "./constants";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PAYMENT_SERVICE_RABBITMQ,
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://guest:guest@localhost:5672"],
          queue: "payment_queue",
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: NOTIFICATION_SERVICE_RABBITMQ,
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://guest:guest@localhost:5672"],
          queue: "notification_queue",
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
