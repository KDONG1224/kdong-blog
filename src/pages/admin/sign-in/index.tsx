// base
import React from 'react';

// components
import { SignInForm } from 'components';

// libraries
import styled from '@emotion/styled';
import { Space } from 'antd';

const StyledAdminSignInPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminSignInPage = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <StyledAdminSignInPage>
      <Space direction="vertical">
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
      </Space>
    </StyledAdminSignInPage>
  );
};

export default AdminSignInPage;
