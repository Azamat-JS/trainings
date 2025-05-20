import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

@Schema({timestamps:true, versionKey:false})
export class Order {
  @Prop()
  productId: string;

  @Prop()
  totalPrice: number;

  @Prop()
  userId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order)