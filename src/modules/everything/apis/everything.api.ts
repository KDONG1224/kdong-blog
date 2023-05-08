import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import { ResponseEverything } from '../models/everything.model';

export class EverythingApi {
  Axios: AxiosInstance;

  constructor() {
    this.Axios = new AxiosInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/everything'
    }).create();
  }

  // client
  async getEverything() {
    return await this.Axios.get<ResponseEverything[]>('').then(
      (res) => res.data
    );
  }

  async getFilterEverything(number: number) {
    return await this.Axios.get<ResponseEverything[]>(
      `/slice?select=${number}`
    ).then((res) => res.data);
  }
}
