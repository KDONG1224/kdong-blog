import styled from '@emotion/styled';

interface StyledFaqListProps {
  ismobile: boolean;
}

export const StyledFaqList = styled.div<StyledFaqListProps>`
  border-top: 2px solid #000;

  .faq-wrapper {
    width: ${({ ismobile }) => (ismobile ? '100%' : '1000px')};

    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 10px;
      border-bottom: 2px solid #000;

      &-title {
        font-family: Pretendard-Medium;
        font-size: ${({ ismobile }) => (ismobile ? '14px' : '22px')};
      }

      &-btn {
        width: ${({ ismobile }) => (ismobile ? '12px' : '15px')};
        height: ${({ ismobile }) => (ismobile ? '12px' : '15px')};
        cursor: pointer;
        background-color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #fff;
        position: relative;

        &::before {
          content: '+';
          position: absolute;
          top: 50%;
          left: 54%;
          font-size: 12px;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;
