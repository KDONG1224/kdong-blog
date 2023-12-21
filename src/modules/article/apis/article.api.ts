import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';
import qs from 'qs';
import {
  ResponseArticleDetailProps,
  ResponseArticleLists,
  ResponseRecommendLists
} from '../models/article.model';

export class ArticleeApi {
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
  async getAllArticles() {
    return await this.Axios.get('/posts').then((res) => res.data);
  }

  async getAllArticlesXml() {
    return await this.Axios.get('/posts/xml').then((res) => res.data);
  }

  async getArticleById(id: string) {
    return await this.Axios.get<ResponseArticleDetailProps>(
      `/posts/${id}`
    ).then((res) => res.data);
  }

  async getRecommendArticles() {
    return await this.Axios.post<ResponseRecommendLists>(
      '/posts/recommend'
    ).then((res) => res.data);
  }

  /**
   * CLIENT
   */

  async getClientAllArticles(query?: any) {
    const queryString = qs.stringify(query, { addQueryPrefix: true });

    return await this.AxiosClient.get<ResponseArticleLists>(
      '/posts' + queryString
    ).then((res) => res.data);
  }
}
