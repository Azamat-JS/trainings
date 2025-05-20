import { Controller, Inject } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { ClientKafka, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateOrderDto } from "../dtos/order.dto";

@Controller()
export class OrderController {
    constructor(private readonly orderService: OrderService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka
    ){}

    @MessagePattern('order-created')
    handleOrderCreated(@Payload() order: CreateOrderDto){
        console.log('Order service received new order', order);
        this.kafkaClient.emit('process-payment', order)
        return this.orderService.createOrder(order)
    }


}