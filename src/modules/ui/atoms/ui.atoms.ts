// libraries
import { atom } from 'recoil';

export const selectThemeState = atom({
  key: 'selectThemeState',
  default: 'dark'
});
