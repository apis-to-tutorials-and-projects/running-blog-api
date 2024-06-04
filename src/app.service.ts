import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { get } from './helpers/pagination';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Option that return pagination options depending our working list
   * @param model Select Model with custom Interface
   * @param page  Select page
   * @param itemsPage Items per page
   * @param filter 
   * @returns 
   */
  async pagination(
    model: Model<unknown>,
    page: number = 1,
    itemsPage: number = 20,
    filter = {}
  ) {
    // Check items per page
    if (itemsPage < 1 || itemsPage > 20) {
      itemsPage = 20;
    }
    if (page < 1) {
      page = 1;
    }
    const total = await model.find(filter).count();
    return get(total, itemsPage, page)
  }
}
