export interface BannerFileListProps {
  contents: string;
  expose: boolean;
  link: string;
  tags: string[];
  title: string;
  url: string;
}

export interface BannerTitleListProps {
  title: string;
  playSpeed: number;
  seq: number;
}

export interface MainBannerProps {
  autoPlay: boolean;
  fileList: BannerFileListProps[];
  playSpeed: number;
  titleLists: BannerTitleListProps[];
}

export interface MainFaqProps {
  seq: number;
  faqType: string;
  question: string;
  answer: string;
}

export interface ResponseFaqList {
  seq: number;
  faqType: string;
  contents: ResponseFaqContent[];
}

export interface ResponseFaqContent {
  question: string;
  answer: string;
}

export interface ResponseProfile {
  createdAt: string;
  email: string;
  isSuperuser: boolean;
  mainBanner: MainBannerProps;
  faq: MainFaqProps[];
  name: string;
  nameKor: string;
  ownerId: string;
  phone: string;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface CreateMainBannerProps {
  autoPlay: boolean;
  playSpeed: number;
  titleLists: BannerTitleListProps[];
}
