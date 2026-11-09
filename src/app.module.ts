import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './supabase/supabase.module';
import { SUPABASE_CLIENT } from './supabase/supabase.constants';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SupabaseModule],
  controllers: [AppController],
  providers: [AppService, { provide: SUPABASE_CLIENT, useValue: {} }],
})
export class AppModule {}
