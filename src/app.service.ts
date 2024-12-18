import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private data: any;

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
