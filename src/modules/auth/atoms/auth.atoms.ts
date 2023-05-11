// libraries
import { atom } from 'recoil';

export const authRoleState = atom<'isSuperuser' | 'isGroupuser'>({
  key: 'authRoleState',
  default: 'isSuperuser'
});
