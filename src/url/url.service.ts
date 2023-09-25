import {
  Injectable,
  BadRequestException,
  UnprocessableEntityException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShortenURLDto } from './url.dto';
import { nanoid } from 'nanoid';
import { isURL } from 'class-validator';
import { Url, UrlDocument } from './url.schema';
import { AppService } from 'src/app.service';

@Injectable()
export class UrlService {
  constructor(
    @InjectModel(Url.name) private urlModel: Model<UrlDocument>,
    private appService: AppService
  ) {}

  async shortenUrl(url: ShortenURLDto) {
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
      const savedUrl = await newUrl.save();

      return savedUrl;
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

  async findAll(page = 1, itemsPerPage = 20, bookmark = 0) {
    const findFilter =
      bookmark === 1 ? { bookmark: { $eq: 1 } } : { bookmark: { $ne: 1 } };

    const pageOptions = await this.appService.pagination(
      this.urlModel,
      page,
      itemsPerPage,
      findFilter
    );

    return {
      pagination: pageOptions,
      results: await this.urlModel
        .find(findFilter)
        .sort({ _id: 1 })
        .skip(pageOptions.skip)
        .limit(itemsPerPage),
    };
  }
}
