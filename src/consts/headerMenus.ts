import {
  ROUTE_ABOUT,
  ROUTE_ADMIN,
  ROUTE_ALGORITHM,
  ROUTE_PROJECT,
  ROUTE_REFERENCE
} from './routes';

export const headerMenus = [
  {
    index: 1,
    name: 'about',
    nameKr: '소개',
    path: ROUTE_ABOUT
  },
  {
    index: 2,
    name: 'projects',
    nameKr: '프로젝트',
    path: ROUTE_PROJECT
  },
  {
    index: 3,
    name: 'references',
    nameKr: '레퍼런스',
    path: ROUTE_REFERENCE
  },
  {
    index: 4,
    name: 'gestbook',
    nameKr: '방명록',
    path: ROUTE_ALGORITHM
  },
  {
    index: 5,
    name: 'admin',
    nameKr: '관리자',
    path: ROUTE_ADMIN
  }
];
