import { Controller, Get, Inject } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_SERVICE_RABBITMQ } from './constants';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService,
    @Inject(NOTIFICATION_SERVICE_RABBITMQ) private readonly notificatioClient: ClientProxy,

  ) {}

  @Get()
  getHello(): string {
    return this.paymentService.getHello();
  }

  @EventPattern("process-payment")
  handleProcessPayment(@Payload() order: any){
    console.log('Payment service in process', order);
    this.notificatioClient.emit("payment-succed", order)
  }
}
