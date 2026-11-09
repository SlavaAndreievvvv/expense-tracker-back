import { Controller, Get } from '@nestjs/common';
import { AppService, type PingResponse } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  getPing(): PingResponse {
    return this.appService.getPing();
  }
}
