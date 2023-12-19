import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class AxiosServerInstanceCreator {
  #instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instance = axios.create(config);
    this.#instance.defaults.params = {};

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
