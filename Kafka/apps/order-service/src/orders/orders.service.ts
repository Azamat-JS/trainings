import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order, OrderDocument } from "./schema/Order";
import { Model } from "mongoose";
import { CreateOrderDto } from "../dtos/order.dto";

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>){}

    async createOrder(createOrderDto: CreateOrderDto){
        const newOrder = await this.orderModel.create(createOrderDto);
        if(!newOrder) throw new NotFoundException('Order not created');
        return newOrder
    }
}