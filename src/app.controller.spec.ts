import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SUPABASE_CLIENT } from './supabase/supabase.constants';

describe('AppController', () => {
  let appController: AppController;
  let listUsersResult: { error: { message: string } | null };

  const supabaseMock = {
    auth: { admin: { listUsers: async () => listUsersResult } },
  };

  beforeEach(async () => {
    listUsersResult = { error: null };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: SUPABASE_CLIENT, useValue: supabaseMock },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('ping', () => {
    it('returns supabaseConnected: true when Supabase responds without error', async () => {
      const result = await appController.getPing();
      expect(result.supabaseConnected).toBe(true);
    });

    it('returns supabaseConnected: false when Supabase returns an error', async () => {
      listUsersResult = { error: { message: 'Invalid API key' } }; // змінюємо "відповідь"
      const result = await appController.getPing();
      expect(result.supabaseConnected).toBe(false);
    });
  });
});
