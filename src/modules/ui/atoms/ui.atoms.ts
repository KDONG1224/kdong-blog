// libraries
import { atom } from 'recoil';

export const selectThemeState = atom({
  key: 'selectThemeState',
  default: 'dark'
});

export const collapsedState = atom({
  key: 'collapsedState',
  default: false
});

export const loadingState = atom({
  key: 'loadingState',
  default: false
});
