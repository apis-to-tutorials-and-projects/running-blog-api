import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Url, UrlSchema } from './post.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from 'src/app.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),],
  providers: [PostService, AppService],
  controllers: [PostController]
})
export class PostModule {}
