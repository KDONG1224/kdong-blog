// base
import React, { useState } from 'react';

// style
import { StyledWanted } from './style';

// components
import { WantedForm } from 'components';

// hooks
import { useMedia } from 'hooks';

// libraries
import { Button } from '@mui/material';

export const Wanted = () => {
  const [isEmail, setIsEmail] = useState(false);

  const { isMobile } = useMedia();

  const handleEmail = (email: string) => {
    console.log(email);

    if (email !== '') setIsEmail(true);
  };

  const onSubmit = () => {
    console.log(isEmail);
  };

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
            <WantedForm onChange={handleEmail} />
            <div className="wanted-wrapper-content-form-btn">
              <Button onClick={onSubmit}>전송하기</Button>
            </div>
          </div>
        </div>
      </div>
    </StyledWanted>
  );
};
