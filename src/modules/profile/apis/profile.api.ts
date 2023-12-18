import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';

export class ProfileApi {
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
  async getMainProfile() {
    return await this.Axios.get('/common/profile').then((res) => res.data);
  }

  /**
   * CLIENT
   */
}
