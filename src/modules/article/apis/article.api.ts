import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';
import qs from 'qs';
import { ResponseArticleLists } from '../models/article.model';

export class ArticleeApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    // server
    this.Axios = new AxiosServerInstanceCreator({
      // baseURL: process.env.KDONG_API_URL + "/profile",
      baseURL: 'http://localhost:24181'
    }).create();

    // client
    this.AxiosClient = new AxiosInstanceCreator({
      baseURL: 'http://localhost:24181'
    }).create();
  }

  /**
   * SERVER
   */
  async getAllArticles() {
    return await this.Axios.get('/posts').then((res) => res.data);
  }

  async getArticleById(id: string) {
    return await this.Axios.get(`/posts/${id}`).then((res) => res.data);
  }

  /**
   * CLIENT
   */

  async getClientAllArticles(query?: any) {
    console.log(query);

    const queryString = qs.stringify(query, { addQueryPrefix: true });

    return await this.Axios.get<ResponseArticleLists>(
      '/posts' + queryString
    ).then((res) => res.data);
  }
}
