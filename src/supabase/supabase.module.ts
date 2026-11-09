import { Module } from '@nestjs/common';
import { supabaseProvider } from './supabase.provider';
import { SUPABASE_CLIENT } from './supabase.constants';

@Module({
  providers: [supabaseProvider],
  exports: [SUPABASE_CLIENT],
})
export class SupabaseModule {}
