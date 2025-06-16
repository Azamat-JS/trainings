import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class BotCommandService implements OnModuleInit {
  private bot = new Telegraf(process.env.TG_TOKEN!);

  async onModuleInit() {
    await this.bot.telegram.setMyCommands([
      { command: 'start', description: 'Start the bot' },
      { command: 'help', description: 'Get help' },
      { command: 'about', description: 'About this bot' },
    ]);
    console.log('✅ Telegram commands registered');
  }
}
