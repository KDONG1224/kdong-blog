// recoil
import { atom } from 'recoil';

const guestbookListsState = atom<any[]>({
  key: 'guestbookListsState',
  default: []
});

export { guestbookListsState };
