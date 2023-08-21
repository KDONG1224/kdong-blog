// base
import React from 'react';

// containers
import { SignIn } from 'containers';

// libraries
import styled from '@emotion/styled';

const StyledAdminSignInPage = styled.div``;

const AdminSignInPage = () => {
  return (
    <StyledAdminSignInPage>
      <SignIn />
    </StyledAdminSignInPage>
  );
};

export default AdminSignInPage;
