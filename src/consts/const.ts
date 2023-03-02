import { canvasThumbs } from './images';

// defines
export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_SELCET = [10, 20, 50, 100];
export const DEFAULT_REFERENCE_SELCET = [
  {
    key: 'all',
    value: '전체보기'
  },
  {
    key: 'html',
    value: 'HTML'
  },
  {
    key: 'css',
    value: 'CSS'
  },
  {
    key: 'js',
    value: 'JAVASCRIPT'
  }
];

export const CANVAS_LISTS = [
  {
    key: '1',
    title: '콘페티 만들기',
    date: '2023.02.25',
    type: 'canvas',
    img: canvasThumbs.CANVAS_CONFETTI
  }
];
