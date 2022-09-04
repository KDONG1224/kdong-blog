import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import qs from 'qs';

// service
import { STORAGE_SESSION_ICT } from './storage';
import { cookieStorage, COOKIE_ACCESS_TOKEN } from './cookie';
import { isTokenExpired } from 'utils/protocol';

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
    this.#instance.defaults.paramsSerializer = (params = {}) => {
      if (params.filter) {
        params.filter = `${encodeURIComponent(JSON.stringify(params.filter))}`;
      }

      if (params.where) {
        params.where = `${encodeURIComponent(JSON.stringify(params.where))}`;
      }

      return qs.stringify(params, { encode: false });
    };

    this.interceptors();
  }
  interceptors() {
    this.#instance.interceptors.request.use((config) => {
      if (!config.headers) return;

      if (typeof window === 'object') {
        const icToken = sessionStorage.getItem(STORAGE_SESSION_ICT);
        const accessToken = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);
        // if (!config.headers['savezone-app']) {
        //   const appCheck = isAppIos || isAppAndroid ? 'isApp' : 'isWeb';
        //   Object.assign(config.headers, {
        //     'savezone-app': appCheck,
        //     'savezone-isios': isAppIos ? 'ios' : 'android'
        //   });
        // }
        if (!config.headers['ictoken']) {
          if (icToken) {
            Object.assign(config.headers, {
              ictoken: icToken,
              ictrace: 'admin '
            });
          }
        }
        if (!config.headers['access-token']) {
          if (accessToken) {
            if (!isTokenExpired(accessToken)) {
              Object.assign(config.headers, {
                Accept: 'application/json',
                'access-token': accessToken
              });
            }
          }
        }

        if (!config.headers['x-access-token']) {
          Object.assign(config.headers, {
            Accept: 'application/json'
            // 'x-access-token': process.env.NEXT_PUBLIC_OASIS_MASTER_ACCESS_TOKEN!
          });
        }
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
