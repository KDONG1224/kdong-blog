import { AxiosInstance } from 'axios';
import {
  CreateLectureProps,
  ResponseLecture,
  UpdateLectureProps
} from '../models/lecture.model';
import AxiosInstanceCreator from 'services/reqeust-client';
import AxiosServerInstanceCreator from 'services/reqeust-server';
import qs from 'qs';

export class LectureApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    // server
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL + '/lecture'
    }).create();

    // client
    this.AxiosClient = new AxiosInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/lecture'
    }).create();
  }

  // server
  async createLecture(data: CreateLectureProps) {
    return await this.Axios.post('/create', { ...data }).then(
      (res) => res.data
    );
  }

  // client
  async getLecture(filter: {
    skip: number;
    limit: number;
    type: string;
    where: any;
  }) {
    return await this.AxiosClient.get<ResponseLecture[]>(
      `?${qs.stringify({ filter })}`
    ).then((res) => res.data);
  }

  async findLecture(id: string) {
    return await this.AxiosClient.get<ResponseLecture>(`/${id}`).then(
      (res) => res.data
    );
  }

  async createLectureClient(data: CreateLectureProps) {
    return await this.AxiosClient.post('/create', { ...data }).then(
      (res) => res.data
    );
  }

  async updateLectureClient(data: UpdateLectureProps) {
    return await this.AxiosClient.patch(`/update/${data.id}`, { ...data }).then(
      (res) => res.data
    );
  }

  async deleteLectureClient(deleteId: string) {
    return await this.AxiosClient.delete(`/delete/${deleteId}`).then(
      (res) => res.data
    );
  }
}
