import { AppService } from './app.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/current-path')
  current(
    @Req() req: Request
  ): {
    all: string;
    host: string;
  } {
    console.log(req.originalUrl);
    return {
      all: `${req.protocol}://${req.get('Host')}${req.originalUrl}`,
      host: `${req.protocol}://${req.get('Host')}`,
    };
  }
}
