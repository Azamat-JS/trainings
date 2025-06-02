import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ timestamps: true, versionKey: false })
export class Payment {
  @Prop()
  userId: string;

  @Prop()
  productId: string;

  @Prop()
  totalPrice: number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)
