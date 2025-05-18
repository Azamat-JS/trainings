import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderServiceService {
  getData(): string {
    return 'Hello World!';
  }
}
