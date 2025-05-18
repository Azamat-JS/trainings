import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiGatewayService {
  getData(): string {
    return 'Hello World!';
  }
}
