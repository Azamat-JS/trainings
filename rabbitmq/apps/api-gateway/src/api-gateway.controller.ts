import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ORDER_SERVICE_RABBITMQ } from './constants';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService,
  @Inject(ORDER_SERVICE_RABBITMQ) private readonly client: ClientProxy
  ) {}

  @Get()
  getData(): string {
    return this.apiGatewayService.getData();
  }

  @Post('order')
  createOrder(@Body() order:any){
    this.client.emit('order-created', order);
    console.log('order sent ') 
    return {message: 'Order sent to RMQ from api-gateway'}
  }
}
