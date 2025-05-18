import { Controller, Get, Inject } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';
import { ClientProxy, EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_SERVICE_RABBITMQ, PAYMENT_SERVICE_RABBITMQ } from './constants';

@Controller()
export class OrderServiceController {
  constructor(private readonly orderService: OrderServiceService,
    @Inject(PAYMENT_SERVICE_RABBITMQ) private readonly paymentClient: ClientProxy,
    @Inject(NOTIFICATION_SERVICE_RABBITMQ) private readonly notificationClient: ClientProxy
  ) {}

  @Get()
  getData(): string {
    return this.orderService.getData();
  }

  @EventPattern('order-created')
  handleOrderCreated(@Payload() order:any){
    console.log('Order service received new order', order)
    this.paymentClient.emit("process-payment", order)
    this.notificationClient.emit('order-created', order)
  }
}
