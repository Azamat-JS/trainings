import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from '../schema/Payment';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dtos/order.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
  ) {}

  async orderCreate(createOrderDto: CreateOrderDto) {
    const newPayment = await this.paymentModel.create(createOrderDto);
    if (!newPayment)
      throw new BadRequestException('Payment not saved to database');
    return newPayment;
  }
}
