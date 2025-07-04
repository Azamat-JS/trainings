import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config"
import {MongooseModule} from "@nestjs/mongoose"

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath:'.env'}),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
