import {
  Injectable,
  BadRequestException,
  UnprocessableEntityException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShortenURLDto } from './post.dto';
import { nanoid } from 'nanoid';
import { isURL } from 'class-validator';
import { Url, UrlDocument } from './post.schema';
import { AppService } from 'src/app.service';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Url.name) private urlModel: Model<UrlDocument>,
    private appService: AppService
  ) {}

  async shortenUrl(url: ShortenURLDto, host?: string) {
    const { longUrl, title, description, keywords, bookmark } = url;

    // checks if longurl is a valid URL
    if (!isURL(longUrl)) {
      throw new BadRequestException('String Must be a Valid URL');
    }

    const urlCode = nanoid(10);

    try {
      // Check if the longUrl already exists in the database
      let existingUrl = await this.urlModel.findOne({ longUrl });

      // Return existing URL if it already exists
      if (existingUrl) return existingUrl;

      // Create and save the new URL record in the database
      const newUrl = new this.urlModel({
        longUrl,
        urlCode,
        title,
        description,
        keywords,
        bookmark,
      });
      
      // Send data to persist new short url with data
      await newUrl.save();

      return {
        ...url,
        shortUrl: `${host}/${urlCode}`,
      };
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException('Server Error');
    }
  }

  async redirect(urlCode: string) {
    try {
      const existingUrl = await this.urlModel.findOne({ urlCode });
      if (existingUrl) return existingUrl;
      throw new NotFoundException('Resource Not Found');
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Resource Not Found');
    }
  }

  private completeResults(results: UrlDocument[], host: string) {
    return results.map((item) => {
      item.shortUrl = `${host}/${item.urlCode}`;
      return item;
    });
  }

  async findAll(page = 1, itemsPerPage = 20, bookmark = 0, host: string) {
    const findFilter = bookmark
      ? { bookmark: { $eq: 1 } }
      : { bookmark: { $ne: 1 } };

    const pageOptions = await this.appService.pagination(
      this.urlModel,
      page,
      itemsPerPage,
      findFilter
    );

    return {
      pagination: pageOptions,
      results: this.completeResults(
        await this.urlModel
          .find(findFilter)
          .sort({ _id: 1 })
          .skip(pageOptions.skip)
          .limit(itemsPerPage),
        host
      ),
    };
  }
}
