// libraries
import styled from '@emotion/styled';

export const StyledMainLayout = styled.div`
  header {
    z-index: 99;
  }

  .layout-main {
    margin-top: 100px;
  }

  footer {
    margin-top: 100px;
  }

  @media (max-width: 1500px) {
    .layout-main {
      margin-top: 40px;
    }
  }
`;
