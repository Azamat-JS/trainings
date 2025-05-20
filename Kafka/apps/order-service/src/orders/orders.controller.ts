import { Controller } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateOrderDto } from "../dtos/order.dto";

@Controller()
export class OrderController {
    constructor(private readonly orderService: OrderService){}

    @MessagePattern('order-created')
    handleOrderCreated(@Payload() order: CreateOrderDto){
        console.log('Order service received new order', order);
        return this.orderService.createOrder(order)
    }
}