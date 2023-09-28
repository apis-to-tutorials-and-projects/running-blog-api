import { UrlService } from './url.service';
import { QueryParams, ShortenURLDto } from './url.dto';
import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class UrlController {
  constructor(private service: UrlService) {}

  @Get('urls')
  async getAll(@Query() { page, items, bookmark }: QueryParams,  @Req() req: Request) {
    return await this.service.findAll(page, items, bookmark, `${req.protocol}://${req.get('Host')}`);
  }

  @Get(':code')
  async redirect(
    @Res() res,
    @Param('code')
    code: string
  ) {
    const url = await this.service.redirect(code);
    return res.redirect(`${url.longUrl}`);
  }

  @Post('shorten-url')
  shortenUrl(
    @Body()
    url: ShortenURLDto,
    @Req() req: Request
  ) {
    return this.service.shortenUrl(url, `${req.protocol}://${req.get('Host')}`);
  }
}
