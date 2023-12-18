import Cookies, { CookieAttributes, CookiesStatic } from 'js-cookie';

const CookieStorageBuilder = (cookies: CookiesStatic) => ({
  setCookie: (key: string, value: string, options?: CookieAttributes) =>
    cookies.set(key, value, {
      path: '/',
      ...options
    }),
  getCookie: (key: string) => cookies.get(key),
  removeCookie: (key: string) => cookies.remove(key),
  removeCookies: () => {
    const cookiesKeys = cookies.get();

    Object.keys(cookiesKeys).forEach((key) => cookies.remove(key));
  },
  dotremoveCookie: (key: string, domain?: string) =>
    cookies.remove(key, { domain: domain ?? '' })
});

export const cookieStorage = CookieStorageBuilder(Cookies);
export const sessionStorage = globalThis?.sessionStorage;

const COOKIE_BASE_NAME = 'kdong';
const COOKIE_BRANCH_NAME = 'front';
const KAKAO_BASE_NAME = 'kakao';

export const COOKIE_ACCESS_TOKEN = `${COOKIE_BASE_NAME}_acst`;
export const COOKIE_ACCESS_TOKEN_BRANCH = `${COOKIE_BRANCH_NAME}_acst`;
export const REFRESH_ACCESS_TOKEN = `${COOKIE_BASE_NAME}_acst_re`;
export const KAKAO_ACCESS_TOKEN = `${KAKAO_BASE_NAME}_acst`;
export const KAKAO_REFRESH_TOKEN = `${KAKAO_BASE_NAME}_rfst`;
export const NEXT_AUTH_CSRF_TOKEN = `next-auth.csrf-token`;
export const NEXT_AUTH_SESSION_TOKEN = `next-auth.session-token`;

export const SESSION_THEME_TEXT = `${COOKIE_BASE_NAME}_theme`;
