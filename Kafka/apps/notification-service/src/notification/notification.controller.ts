import { Controller } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateOrderDto } from "./dtos/order.dto";

@Controller()
export class NotificationController {
    constructor(private readonly notificationService: NotificationService){}

    @MessagePattern('order-created')
    orderCreatedNotification(@Payload() data: CreateOrderDto){
        console.log('Notification received order created message', data)
        return this.notificationService.orderCreate(data)
    }

    @MessagePattern('payment-succeed')
    paymentSucceedNotification(@Payload() data:any){
        console.log('Notification received payment succeed message', data)
        return this.notificationService.orderCreate(data)
    }
}