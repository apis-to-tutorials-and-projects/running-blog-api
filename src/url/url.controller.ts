import { UrlService } from './url.service';
import { QueryParams, ShortenURLDto } from './url.dto';
import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';

@Controller()
export class UrlController {
  constructor(private service: UrlService) {}

  @Get('urls')
  async getAll(@Query() { page, items, bookmark }: QueryParams) {
    return await this.service.findAll(page, items, bookmark);
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
    url: ShortenURLDto
  ) {
    return this.service.shortenUrl(url);
  }
}
