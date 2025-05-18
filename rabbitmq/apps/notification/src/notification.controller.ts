import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

  @EventPattern('payment-succed')
  handlePaymentSucced(@Payload() order: any){
    console.log('Payment carried out successfully', order)    
  }

  @EventPattern("order-created")
  handleOrderCreate(@Payload() order: any){
    console.log('Order created successfully', order)    
  }
}
