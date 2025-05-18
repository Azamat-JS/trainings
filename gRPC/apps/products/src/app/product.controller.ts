import { Controller } from "@nestjs/common";
import { Observable } from "rxjs";
import {
  ProductServiceControllerMethods,
  ProductServiceController,
  ProductRequest,
  ProductResponse,
} from "types/proto/products";
@Controller("product")
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  getProduct(
    request: ProductRequest
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return {
      productID: 12,
      name: "Laptop",
      price: 3000,
    };
  }
}
