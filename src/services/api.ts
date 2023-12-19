import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export const extractErrorMsg = (error: AxiosError) => {
  if (!error.response) {
    return '서버에 접속할 수 없습니다';
  } else {
    // const err = error.response.data.error.message || '에러 발생'
    const err = '에러 발생';
    return err;
  }
};

const source = axios.CancelToken.source();

class AxiosInstanceCreator {
  #instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instance = axios.create(config);

    this.#instance.defaults.cancelToken = source.token;

    this.interceptors();
  }

  interceptors() {
    this.#instance.interceptors.request.use((config) => {
      return config;
    });

    this.#instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        throw error;
      }
    );
  }

  create() {
    return this.#instance;
  }
}

export default AxiosInstanceCreator;
