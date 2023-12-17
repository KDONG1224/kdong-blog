import { BaseResponseProps } from 'modules/common';

export interface ArticleDetailStateProps {
  articleId: string;
}

export interface ArticleTagsProps {
  id: string;
  name: string;
}

export interface ArticleThumbnaiProps {
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

export interface ArticleListsProps {
  id: string;
  author: {
    role: 'ADMIN' | 'CLIENT' | 'USER';
    username: string;
    email: string;
  };
  catergoty?: {
    id: string;
    catergotyName: string;
    catergotyNumber: number;
    subCatergotyNumber: number;
  };
  title: string;
  content: string;
  expose: boolean;
  mainExpose: boolean;
  commentCount: number;
  likeCount: number;
  readCount: number;
  createdAt: string;
  updatedAt: string;
  mainColor: string;
  subColor: string;
  tags: ArticleTagsProps[];
  thumbnails: ArticleThumbnaiProps[];
}

export interface ResponseArticleListsResultProps {
  articles: ArticleListsProps[];
  currentTotal: number;
  total: number;
}

export interface ResponseArticleLists extends BaseResponseProps {
  result: ResponseArticleListsResultProps;
}