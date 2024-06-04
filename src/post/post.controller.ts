import { PostService } from './post.service';
import { QueryParams, ShortenURLDto } from './post.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { marked } from 'marked';

@Controller()
export class PostController {
  constructor(private service: PostService) {}

  @Post('convert')
  convertMarkdownToHtml(@Body('markdown') markdown: string) {
    if (!markdown) {
      return { error: 'No markdown content provided' };
    }

    const html = marked.parse(markdown);

    return { html };
  }

  @Get('posts')
  async getAll(@Query() { page, items }: QueryParams, @Req() req: Request) {
    // return await this.service.findAll(page, items, bookmark, `${req.protocol}://${req.get('Host')}`);
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
