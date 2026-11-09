import { Injectable } from '@nestjs/common';

export interface PingResponse {
  status: 'ok';
  time: Date;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPing(): PingResponse {
    return { status: 'ok', time: new Date() };
  }
}
