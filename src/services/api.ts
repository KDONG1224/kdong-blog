import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ErrorCode } from 'enums';

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
    // this.#instance.defaults.paramsSerializer = (params = {}) => {
    //   if (params.filter) {
    //     params.filter = `${encodeURIComponent(JSON.stringify(params.filter))}`;
    //   }

    //   if (params.where) {
    //     params.where = `${encodeURIComponent(JSON.stringify(params.where))}`;
    //   }

    //   return qs.stringify(params, { encode: false });
    // };

    this.interceptors();
  }

  interceptors() {
    this.#instance.interceptors.request.use((config) => {
      // const icToken = sessionStorage.getItem(STORAGE_SESSION_ICT);

      // if (!config.headers['ictoken']) {
      //   if (icToken) {
      //     Object.assign(config.headers, {
      //       ictoken: icToken,
      //       ictrace: 'admin ',
      //     });
      //   }
      // }

      return config;
    });

    this.#instance.interceptors.response.use(
      (res) => {
        // if (res.data.code) {
        //   throw new Error(res.data.message).message;
        // }

        return res;
      },
      (error) => {
        if (axios.isCancel(error)) {
          // clearUserToken();

          throw error;
        } else {
          if (
            error.response.data.error.code === ErrorCode.AUTHORIZATION_REQUIRED
          ) {
            // clearUserToken();

            return;
          }

          throw extractErrorMsg(error);
        }
      }
    );
  }

  create() {
    return this.#instance;
  }
}

export default AxiosInstanceCreator;
