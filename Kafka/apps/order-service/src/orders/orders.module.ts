import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./schema/Order";
import { OrderController } from "./orders.controller";
import { OrderService } from "./orders.service";
import { ClientsModule, Transport } from "@nestjs/microservices";


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
    MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
