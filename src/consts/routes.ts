/**
 * Main Rotues
 * 메인 라우트
 */
export const ROUTE_ROOT = '/';

// about
export const ROUTE_ABOUT = '/about';

// wanted
export const ROUTE_WANTED = '/wanted';

// project
export const ROUTE_PROJECT = '/project';

// algorithm
export const ROUTE_ALGORITHM = '/algorithm';

// reference
export const ROUTE_REFERENCE = '/reference';

/**
 * Admin Rotues
 * 관리자 라우트
 */
// admin-main
export const ROUTE_ADMIN = '/admin';

// admin-sign-in
export const ROUTE_ADMIN_SIGNIN = `${ROUTE_ADMIN}/sign-in`;

// admin-my-info
export const ROUTE_ADMIN_MYINFO = `${ROUTE_ADMIN}/my-info`;

// admin-imagebank
export const ROUTE_ADMIN_IMAGEBANK = `${ROUTE_ADMIN}/imagebank`;
export const ROUTE_ADMIN_IMAGEBANK_LIST = `${ROUTE_ADMIN}/imagebank/list`;
export const ROUTE_ADMIN_IMAGEBANK_UPLOAD = `${ROUTE_ADMIN}/imagebank/upload`;

// admin-page
export const ROUTE_ADMIN_PAGE = `${ROUTE_ADMIN}/setting-page`;
export const ROUTE_ADMIN_PAGE_MAIN = `${ROUTE_ADMIN_PAGE}/main`;
export const ROUTE_ADMIN_PAGE_POPUP = `${ROUTE_ADMIN_PAGE}/popup`;

// admin-lecture
export const ROUTE_ADMIN_LECTURE = `${ROUTE_ADMIN}/setting-lecture`;
export const ROUTE_ADMIN_LECTURE_LIST = `${ROUTE_ADMIN_LECTURE}/list`;
export const ROUTE_ADMIN_LECTURE_DETAIL = `${ROUTE_ADMIN_LECTURE}/detail`;
export const ROUTE_ADMIN_LECTURE_DETAIL_WITH_ID = (id: string | number) =>
  `${ROUTE_ADMIN_LECTURE_DETAIL}?${id}`;

// admin-guestbook
export const ROUTE_ADMIN_GUEST = `${ROUTE_ADMIN}/setting-guest`;
export const ROUTE_ADMIN_GUEST_BOOK = `${ROUTE_ADMIN_GUEST}/book`;
export const ROUTE_ADMIN_GUEST_BOOK_DETAIL = `${ROUTE_ADMIN_GUEST_BOOK}/detail`;
export const ROUTE_ADMIN_GUEST_BOOK_DETAIL_WITH_ID = (id: string | number) =>
  `${ROUTE_ADMIN_GUEST_BOOK_DETAIL}/${id}`;
