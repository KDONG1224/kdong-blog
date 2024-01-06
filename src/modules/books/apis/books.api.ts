import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/api';
import AxiosServerInstanceCreator from 'services/reqeust-server';
import {
  ResponseBookListsProps,
  ResponseBookViewerProps
} from '../models/books.model';

export class BooksApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    // server
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL + '/books'
    }).create();

    // client
    this.AxiosClient = new AxiosInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/books'
    }).create();
  }

  /**
   * SERVER
   */
  async getBookLists() {
    return await this.Axios.get<ResponseBookListsProps>(`/`).then(
      (res) => res.data
    );
  }

  /**
   * CLIENT
   */
  async getBookById(id: string) {
    return await this.AxiosClient.get<ResponseBookViewerProps>(`/${id}`).then(
      (res) => res.data
    );
  }
}
