import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';

export class ProfileApi {
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
  async getMainProfile() {
    return await this.Axios.get('/common/profile').then((res) => res.data);
  }

  /**
   * CLIENT
   */
}
