import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/api';
import {
  CreateCommentFormProps,
  ResponseComment,
  ResponseCreateComment,
  ResponseUpdateComment,
  UpdateCommentFormProps
} from '../models/comment.model';

export class CommentApi {
  Axios: AxiosInstance;

  constructor() {
    // client
    this.Axios = new AxiosInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL
    }).create();
  }

  /**
   * CLIENT
   */
  async getComments(postId: string) {
    return await this.Axios.get<ResponseComment>(`/comments/${postId}`).then(
      (res) => res.data
    );
  }

  async getCommentById(postId: string, commentId: string) {
    return await this.Axios.get<ResponseUpdateComment>(
      `/comments/${postId}/${commentId}`
    ).then((res) => res.data);
  }

  async createComment(postId: string, data: CreateCommentFormProps) {
    return await this.Axios.post<ResponseCreateComment>(
      `/comments/${postId}`,
      data
    ).then((res) => res.data);
  }

  async updateComment(
    postId: string,
    commentId: string,
    data: UpdateCommentFormProps
  ) {
    return await this.Axios.patch<ResponseUpdateComment>(
      `/comments/${postId}/${commentId}`,
      data
    ).then((res) => res.data);
  }

  async deleteComment(
    postId: string,
    commentId: string,
    data: UpdateCommentFormProps
  ) {
    return await this.Axios.patch<ResponseUpdateComment>(
      `/comments/${postId}/${commentId}`,
      data
    ).then((res) => res.data);
  }
}
