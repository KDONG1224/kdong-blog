import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

// service
// import { STORAGE_SESSION_ICT } from './storage';
// import { cookieStorage, COOKIE_ACCESS_TOKEN } from './cookie';
// import { isTokenExpired } from 'utils/protocol';

export const extractErrorMsgV2 = (error: AxiosError<any>) => {
  if (!error.response) {
    return '서버에 접속할 수 없습니다';
  } else {
    return error.response.data.error.message || '에러 발생';
  }
};

class AxiosInstanceCreator {
  #instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instance = axios.create(config);
    // this.#instance.defaults.paramsSerializer = (
    //   params: ParamsSerializerOptions | any
    // ) => {
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
    this.#instance.interceptors.request.use((config: any) => {
      if (!config.headers) return;

      if (typeof window === 'object') {
        if (!config.headers['ownerId']) {
          Object.assign(config.headers, {
            Accept: 'application/json',
            ownerId: process.env.NEXT_PUBLIC_KDONG_OWNER_ID
          });
        }
        // if (!config.headers['access-token']) {
        //   if (accessToken) {
        //     if (!isTokenExpired(accessToken)) {
        //       Object.assign(config.headers, {
        //         Accept: 'application/json',
        //         'access-token': accessToken
        //       });
        //     }
        //   }
        // }

        // if (!config.headers['x-access-token']) {
        //   Object.assign(config.headers, {
        //     Accept: 'application/json'
        //     // 'x-access-token': process.env.NEXT_PUBLIC_OASIS_MASTER_ACCESS_TOKEN!
        //   });
        // }
      }

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

export default AxiosInstanceCreator;
