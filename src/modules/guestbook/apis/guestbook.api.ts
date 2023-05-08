import { AxiosInstance } from 'axios';
import AxiosServerInstanceCreator from 'services/reqeust-server';

export class GuestbookApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL + '/guestbook'
    }).create();

    this.AxiosClient = new AxiosServerInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/guestbook'
    }).create();
  }

  // client
  async getAllGuestbookClient() {
    return await this.AxiosClient.get(`/all`).then((res) => res.data);
  }

  async createGuestbook(data: FormData) {
    return await this.AxiosClient.post(`/create`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }

  // server
  async getAllGuestbook() {
    return await this.Axios.get(`/all`).then((res) => res.data);
  }

  async updateGuestbook(id: string, data: FormData) {
    return await this.AxiosClient.patch<any>(`/update/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }

  async getGuestbookLists(filter: any) {
    return await this.Axios.get<any>(`/${JSON.stringify(filter)}`).then(
      (res) => res.data
    );
  }

  async getGuestbookById(id: string) {
    return await this.Axios.get<any>(`/${id}`).then((res) => res.data);
  }
}
