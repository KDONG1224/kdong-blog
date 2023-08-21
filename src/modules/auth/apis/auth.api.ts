import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';
import { ResponseProfile } from '../models/auth.model';

export class AuthApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    // server
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL + '/auth'
    }).create();

    // client
    this.AxiosClient = new AxiosInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/auth'
    }).create();
  }

  // server
  async getKdongProfile() {
    return await this.Axios.get<ResponseProfile>('/portfolio').then(
      (res) => res.data
    );
  }

  // client
  async getKdongProfileClient() {
    return await this.AxiosClient.get<ResponseProfile>('/portfolio').then(
      (res) => res.data
    );
  }

  async createKdongProfile(data: ResponseProfile) {
    return await this.AxiosClient.post('/create', { ...data }).then(
      (res) => res.data
    );
  }
}
