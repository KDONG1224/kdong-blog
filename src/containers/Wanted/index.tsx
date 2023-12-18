// base
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { debounce } from 'lodash';

// style
import { StyledWanted } from './style';

// components
import { WantedForm } from 'components';

// modules
import {
  QUERY_POST_WANTED,
  RequestWantedProps,
  WantedApi
} from 'modules/wanted';

// hooks
import { useMedia } from 'hooks';

// libraries\

import { useMutation } from '@tanstack/react-query';
import nProgress from 'nprogress';

export const Wanted = () => {
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
        router.back();
      }
    }
  );

  const onSubmit = debounce(async (values: RequestWantedProps) => {
    nProgress.start();

    try {
      if (!values) return;

      await sendEmail(values);

      nProgress.done();
    } catch (e: any) {
      console.log(e.message);

      nProgress.done();
    }
  }, 1000);

  return (
    <StyledWanted $ismobile={isMobile}>
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
            <WantedForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </StyledWanted>
  );
};
