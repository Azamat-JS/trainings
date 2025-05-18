import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NOTIFICATION_SERVICE_RABBITMQ } from './constants';

@Module({
  imports: [ ClientsModule.register([
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
      ]),],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
