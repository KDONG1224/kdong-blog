// recoil
import { atom } from 'recoil';

const darkModeState = atom({
  key: 'darkModeState',
  default: false
});

const collapsedState = atom({
  key: 'collapsedState',
  default: false
});

export { darkModeState, collapsedState };
