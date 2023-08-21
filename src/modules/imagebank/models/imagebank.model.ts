export interface ResponseImageBankListProps {
  id: string;
  thumbUrl: string;
  lastModified: string;
  size: number;
  fileKey: string;
  contentType: string;
  bucketName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResponseImagebank {
  total: number;
  imageList: ResponseImageBankListProps[];
}

export interface RequestImagBankList {
  skip: number;
  limit: number;
}
