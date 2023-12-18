import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/api';
import { ResponseSubCategoryLists } from '../models/category.model';
import AxiosServerInstanceCreator from 'services/reqeust-server';

export class CategoryApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    // server
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL
    }).create();

    // client
    this.AxiosClient = new AxiosInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL
    }).create();
  }

  /**
   * SERVER
   */

  /**
   * CLIENT
   */
  async getAllSubCategories() {
    return await this.AxiosClient.get<ResponseSubCategoryLists>(
      `/categories/sub`
    ).then((res) => res.data);
  }
}
