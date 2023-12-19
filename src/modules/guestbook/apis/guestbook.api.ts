import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';
import qs from 'qs';

export class GuestbookApi {
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
  async getAllGuestbooks() {
    return await this.Axios.get('/guestbooks').then((res) => res.data);
  }

  /**
   * CLIENT
   */

  async getClientAllGuestbook(query?: any) {
    const queryString = qs.stringify(query, { addQueryPrefix: true });

    return await this.AxiosClient.get('/guestbooks' + queryString).then(
      (res) => res.data
    );
  }

  async createGuestbook(data: FormData) {
    return await this.AxiosClient.post(`/guestbooks`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }
}
