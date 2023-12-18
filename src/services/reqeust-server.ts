import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

export const extractErrorMsgV3 = (error: AxiosError<any>) => {
  if (!error.response) {
    return '서버에 접속할 수 없습니다';
  } else {
    return error.response.data.error.message || '에러 발생';
  }
};

class AxiosServerInstanceCreator {
  #instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instance = axios.create(config);
    this.#instance.defaults.params = {};
    // this.#instance.defaults.paramsSerializer = (params = {}) => {
    //   return qs.stringify(params, { encode: true });
    // };

    this.interceptors();
  }
  interceptors() {
    this.#instance.interceptors.request.use((config) => {
      if (!config.headers) return config;

      Object.assign(config.headers, {
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
        Expires: '-1'
      });

      return config;
    });
  }
  create() {
    return this.#instance;
  }
}

export default AxiosServerInstanceCreator;
