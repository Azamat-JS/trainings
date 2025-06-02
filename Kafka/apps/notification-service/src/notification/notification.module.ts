import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from '../schema/Payment';

@Module({
  imports: [MongooseModule.forFeature([{name: Payment.name, schema: PaymentSchema}])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
