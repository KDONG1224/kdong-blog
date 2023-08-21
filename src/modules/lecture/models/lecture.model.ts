import { ResponseImageBankListProps } from 'modules/imagebank';

export interface CreateLectureProps {
  title: string;
  subtitle: string;
  group: string;
  content: string;
  thumbnail?: ResponseImageBankListProps;
  tags: string[];
  expose: boolean;
  colors: string;
  badgeColor: string;
  projectType: string;
  positionType: string;
  skillType: string;
}

export interface UpdateLectureProps extends CreateLectureProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResponseLecture extends CreateLectureProps {
  id: string;
  key: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DeleteLectureProps {
  deleteCount: number;
  isDelete: boolean;
}
