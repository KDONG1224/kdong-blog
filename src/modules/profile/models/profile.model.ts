import { BaseResponseProps } from 'modules/common';

/**
 * Main Profile
 */
export interface ResponseMainProfileProps extends BaseResponseProps {
  result: {
    bannerLists: BannerListsProps;
    faqLists: FaqListsProps[];
  };
}

export interface BannerImageProps {
  id: string;
  bucket: string;
  key: string;
  filename: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  location: string;
  createdAt: string;
  updatedAt: string;
  sequence: number;
  folder: string;
  contentType: string;
}

export interface BannerTitleProps {
  title: string;
  playSpeed: number;
  sequence: number;
}

export interface BannerListsProps {
  id: string;
  autoPlay: boolean;
  playSpeed: number;
  createdAt: string;
  updatedAt: string;
  bannerImages: BannerImageProps[];
  bannerTitles: BannerTitleProps[];
}

export interface ResponseProfileProps extends BaseResponseProps {
  result: {
    bannerLists: BannerListsProps[];
  };
}

export interface RequestProfileBannerUpdate {
  bannerTitles: string;
  playSpeed: string & number & Blob;
  autoPlay: boolean & string & Blob;
}

/**
 * FAQ
 */
export interface FaqListsProps {
  id: string;
  question: string;
  answer: string;
  faqType: string;
  sequence: number;
  expose: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RequestProfileFaqFormProps {
  question: string;
  answer: string;
  faqType: string;
}

export interface ResponseProfileFaqProps extends BaseResponseProps {
  result: {
    faqLists: FaqListsProps[];
  };
}
