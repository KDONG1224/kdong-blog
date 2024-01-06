interface BaseResponseProps {
  code: number;
  isSuccess: boolean;
  message: string | string[];
}

interface BookAuthorProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  userid: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  role: string;
  status: boolean;
}

interface BookPagesProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  sequence: number;
  originalname: string;
  filename: string;
  encoding: string;
  mimetype: string;
  size: number;
  bucket: string;
  key: string;
  folder: string;
  location: string;
}

export interface BookViewerProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  pageLength: number;
  viewerType: 'vertical' | 'horizontal';
  isCutting: boolean;
  width: number;
  height: number;
  expose: boolean;
  author: BookAuthorProps;
  pages: BookPagesProps[];
}

export interface ResponseBookListsProps extends BaseResponseProps {
  result: {
    booksLists: BookViewerProps[];
  };
}

export interface ResponseBookViewerProps extends BaseResponseProps {
  result: {
    book: BookViewerProps;
  };
}
