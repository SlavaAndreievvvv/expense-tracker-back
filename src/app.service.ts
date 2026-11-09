import { Inject, Injectable } from '@nestjs/common';
import { SUPABASE_CLIENT } from './supabase/supabase.constants';
import { SupabaseClient } from '@supabase/supabase-js';

export interface PingResponse {
  status: 'ok';
  time: Date;
  supabaseConnected: boolean;
}

@Injectable()
export class AppService {
  private readonly supabase: SupabaseClient;

  constructor(@Inject(SUPABASE_CLIENT) supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getPing(): Promise<PingResponse> {
    const { error } = await this.supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1,
    });

    return {
      status: 'ok',
      time: new Date(),
      supabaseConnected: !error,
    };
  }
}
