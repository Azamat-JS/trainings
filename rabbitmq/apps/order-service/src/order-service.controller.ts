import { Controller, Get } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) {}

  @Get()
  getData(): string {
    return this.orderServiceService.getData();
  }

  @EventPattern('order-created')
  handleOrderCreated(@Payload() order:any){
    console.log('Order service received new order', order)
  }
}
