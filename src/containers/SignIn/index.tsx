// base
import React from 'react';

// style
import { StyledSignIn } from './style';

// components
import { SignInForm } from 'components';

// libraries
import { Space } from 'antd';

export const SignIn = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <StyledSignIn>
      <Space direction="vertical" style={{ position: 'relative' }}>
        <h1
          style={{
            textAlign: 'center',
            fontSize: 40,
            color: 'red',
            fontFamily: 'Pretendard-Bold'
          }}
        >
          KDONG ADMIN
        </h1>
        <SignInForm onSubmit={handleSubmit} />
        <div className="readme-wrapper">
          <h2>꼭 읽어주세요!</h2>
          <p>
            유저는 최고관리자, 중간관리자, 게스트로 나누어져 있습니다.
            <br />
            최고관리자 : KDONG만 가능
            <br />
            중간관리자 : WANTED 페이지를 통해 요청한 경우 발급해드립니다.
            <br />
            게스트 : 제한된 환경속에서 보기만 가능합니다.
          </p>
          <div>
            <h3>게스트 정보</h3>
            <p>ㅁ</p>
          </div>
        </div>
      </Space>
    </StyledSignIn>
  );
};
