import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtected(@Request() req){
    return {message: 'This is protected route', user: req.user}
  }
}
