// base
import React, { useMemo, useState } from 'react';
import { debounce } from 'lodash';

// style
import { StyledWanted } from './style';

// components
import { WantedForm } from 'components';

// hooks
import { useMedia } from 'hooks';

// libraries
import { Button } from '@mui/material';
import {
  QUERY_POST_WANTED,
  RequestWantedProps,
  WantedApi
} from 'modules/wanted';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const Wanted = () => {
  const [clientEmail, setClientEmail] = useState('');
  const [clientName, setClientName] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);

  const { isMobile } = useMedia();

  const router = useRouter();

  const wantedApi = useMemo(() => {
    return new WantedApi();
  }, []);

  const { mutateAsync: sendEmail } = useMutation(
    [QUERY_POST_WANTED],
    async (data: RequestWantedProps) => {
      return await wantedApi.postMailer(data);
    },
    {
      onSuccess: () => {
        setClientEmail('');
        setClientName('');
        setIsEmail(false);
        setIsName(false);

        router.back();
      },
      onError: () => {
        setClientEmail('');
        setClientName('');
        setIsEmail(false);
        setIsName(false);
      }
    }
  );

  const handleEmail = (email: string) => {
    setClientEmail(email);

    if (email !== '') {
      setIsEmail(true);
    }
  };

  const handleName = (name: string) => {
    setClientName(name);

    if (name !== '') {
      setIsEmail(true);
    }
  };

  const onSubmit = debounce(() => {
    if (!clientEmail || !clientName) return;

    const data = {
      clientEmail,
      clientName
    };

    sendEmail(data);
  }, 1000);

  return (
    <StyledWanted ismobile={isMobile}>
      <div className="wanted-wrapper">
        <div className="wanted-wrapper-title">
          <h1>KDONG Wanted</h1>
        </div>
        <div className="wanted-wrapper-content">
          <div className="wanted-wrapper-content-desc">
            <p>올라운더 풀스택을 꿈꾸는 밥값하는 개발자 KDONG 입니다.</p>
            <p>
              이메일을 보내주시면 KDONG 이력서와 함께 다양한 이야기를 만나보실
              수 있습니다!
            </p>
          </div>
          <div className="wanted-wrapper-content-detail">
            <p>다음 사항을 꼭 확인해주세요.</p>
            <ol>
              <li>2주 이내로 답변을 드리겠습니다.</li>
              <li>
                2주 이내로 답변을 드리지만 특별한 경우 늦어질 수 있음을 양해
                부탁드립니다.
              </li>
            </ol>
          </div>
          <div className="wanted-wrapper-content-form">
            <WantedForm
              id="subscribeEmail"
              onChangeEmail={handleEmail}
              onChangeName={handleName}
            />
            <div className="wanted-wrapper-content-form-btn">
              <Button onClick={onSubmit}>전송하기</Button>
            </div>
          </div>
        </div>
      </div>
    </StyledWanted>
  );
};
