import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { PRODUCTS_PACKAGE_NAME } from '../../constants';
import { ClientGrpc } from '@nestjs/microservices';
import {PRODUCT_SERVICE_NAME, ProductServiceClient} from 'types/proto/products'

@Controller('product')
export class ProductController implements OnModuleInit{
    private productService: ProductServiceClient;
    constructor(@Inject(PRODUCTS_PACKAGE_NAME) private client: ClientGrpc){}

    onModuleInit() {
        this.productService = this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME)
    }

    @Get()
    findOne(){
        return this.productService.getProduct({productID: 12})
    }
}
