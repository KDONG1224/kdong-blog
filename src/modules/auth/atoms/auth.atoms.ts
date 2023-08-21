// libraries
import { atom } from 'recoil';
import { ResponseProfile } from '../models/auth.model';

export const kdongProfileState = atom<ResponseProfile>({
  key: 'kdongProfileState',
  default: undefined
});

export const authRoleState = atom<'isSuperuser' | 'isGroupuser'>({
  key: 'authRoleState',
  default: 'isSuperuser'
});
