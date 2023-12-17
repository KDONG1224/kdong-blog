import { BaseResponseProps } from 'modules/common';

export interface RequestWantedProps {
  clientName: string;
  clientEmail: string;
}

export interface ResponseWantedProps extends BaseResponseProps {
  result: {
    clientName: string;
    clientEmail: string;
    eventDate: string;
    id: string;
    createdAt: string;
    updateAt: string;
    isSend: boolean;
  };
}
