// libraries
import styled from '@emotion/styled';

interface StyledFooterProps {
  ismobile: boolean;
}

export const StyledFooter = styled.footer<StyledFooterProps>`
  width: 100%;
  background-color: #f8f8f8;

  .footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ ismobile }) => (ismobile ? '30px 20px' : '50px 30px')};

    &-left {
      &-logo {
        font-family: Pretendard-Bold;
        font-size: ${({ ismobile }) => (ismobile ? '18px' : '34px')};
      }

      &-sns {
        display: flex;
        margin-top: 4px;
        margin-left: -4px;

        > div {
          width: 30px;
          height: 30px;
          position: relative;
          cursor: pointer;
        }
      }
    }

    &-right {
      display: ${({ ismobile }) => (ismobile ? 'none' : 'block')};
    }

    ul {
      li {
        font-size: ${({ ismobile }) => (ismobile ? '14px' : '18px')};
        padding: 6px 0;
      }
    }
  }
`;
