import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface PingResponse {
  status: 'ok';
  time: Date;
  supabaseConfigured: boolean;
}

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getPing(): PingResponse {
    return {
      status: 'ok',
      time: new Date(),
      supabaseConfigured: Boolean(this.config.get('SUPABASE_URL')),
    };
  }
}
