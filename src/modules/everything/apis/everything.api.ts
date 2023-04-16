import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import { ResponseEverything } from '../models/everything.model';

export class EverythingApi {
  Axios: AxiosInstance;

  constructor() {
    this.Axios = new AxiosInstanceCreator({
      baseURL: 'http://localhost:80' + '/everything'
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
