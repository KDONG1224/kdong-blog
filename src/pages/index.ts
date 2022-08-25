import { lazy } from 'react';

export * from './html';
export * from './css';
export * from './js';
export * from './algorithm';
export * from './figma';
export * from './notion';
export * from './alcholcup';

export const LazyHomePage = lazy(() => import('./HomePage'));