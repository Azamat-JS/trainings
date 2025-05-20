import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderDto } from '../dtos/order.dto';
import { ClientKafka } from '@nestjs/microservices';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka
  ) {}

  @Post('order')
  createOrder(@Body() order: CreateOrderDto){
    this.kafkaClient.emit('order-created', order);
    return {message: 'Order sent to kafka', order}
  }
}
