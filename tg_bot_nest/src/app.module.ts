import { Module } from '@nestjs/common';
import { AppUpdate } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';

const sessions = new LocalSession({database: 'session_db.json'})

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath: '.env'}),
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: process.env.TG_TOKEN as string,
    })
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
