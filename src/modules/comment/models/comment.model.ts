import { BaseResponseProps } from 'modules/common';

export interface CreateCommentFormProps {
  username: string;
  password: string;
  comment: string;
  isPrivate?: boolean;
}

export interface ResponseCreateComment {
  username: string;
  comment: string;
  isPrivate: boolean;
  post: {
    id: string;
  };
}

export interface ResponseCreateComment extends BaseResponseProps {
  result: {
    comment: ResponseCreateComment[];
  };
}

export interface UpdateCommentFormProps
  extends Partial<CreateCommentFormProps> {
  id: string;
  createdAt: string;
  updateAt: string;
}

export interface BaseComment {
  id: string;
  createdAt: string;
  updateAt: string;
  username: string;
  comment: string;
  isPrivate: boolean;
  isDeleted: boolean;
}

export interface ResponseUpdateComment extends BaseResponseProps {
  result: {
    comment: BaseComment;
  };
}

export interface ResponseComment extends BaseResponseProps {
  result: {
    comments: BaseComment[];
  };
}

export interface PrivateCommentProps {
  username: string;
  password: string;
}
