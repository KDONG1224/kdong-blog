import qs from 'qs';
import { AxiosInstance } from 'axios';
import { ResponseImagebank } from 'modules';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';
// import { UploadFile } from 'antd';

export class ImagebankApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    // server
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL + '/imagebank'
    }).create();

    // client
    this.AxiosClient = new AxiosInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/imagebank'
    }).create();
  }

  // server
  async getImageList(query: { skip: number; limit: number }) {
    return await this.Axios.get<ResponseImagebank>(
      `?${qs.stringify(query)}`
    ).then((res) => res.data);
  }

  async getAllImage() {
    return await this.Axios.get<ResponseImagebank>('/all').then(
      (res) => res.data
    );
  }

  // client
  async getImageListClient(query: { skip: number; limit: number }) {
    return await this.AxiosClient.get<ResponseImagebank>(
      `?${qs.stringify(query)}`
    ).then((res) => res.data);
  }

  async getAllImageClient() {
    return await this.AxiosClient.get<ResponseImagebank>('/all').then(
      (res) => res.data
    );
  }

  async uploadImagebank(type: string, image: FormData) {
    return await this.AxiosClient.post(`/upload/${type}`, image, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }

  async deleteImagebank(deleteId: string) {
    return await this.AxiosClient.delete(`/${deleteId}`).then(
      (res) => res.data
    );
  }
}
