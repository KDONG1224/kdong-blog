import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import {
  RequestWantedProps,
  ResponseWantedProps
} from '../models/wanted.model';

export class WantedApi {
  Axios: AxiosInstance;

  constructor() {
    // server
    this.Axios = new AxiosInstanceCreator({
      baseURL: 'http://localhost:24181'
    }).create();
  }

  async postMailer(data: RequestWantedProps) {
    return await this.Axios.post<ResponseWantedProps>('/mailer', data).then(
      (res) => res.data
    );
  }
}
