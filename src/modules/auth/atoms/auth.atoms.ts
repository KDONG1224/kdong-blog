// base
import { atom } from 'recoil';

// modules
import { ResponseMainProfileProps } from 'modules/profile';

export const kdongProfileState = atom<ResponseMainProfileProps>({
  key: 'kdongProfileState',
  default: undefined
});
