import { atom } from 'recoil';
import { ResponseImagebank } from '../models/imagebank.model';

export const imagebankListState = atom<ResponseImagebank>({
  key: 'imagebankListState',
  default: {
    imageList: [],
    total: 0
  }
});
