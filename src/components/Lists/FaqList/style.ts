import styled from '@emotion/styled';

interface StyledFaqListProps {
  ismobile: boolean;
}

export const StyledFaqList = styled.div<StyledFaqListProps>`
  border-top: 2px solid #000;

  .faq-wrapper {
    width: ${({ ismobile }) => (ismobile ? '100%' : '1000px')};

    & .MuiAccordionSummary-content {
      margin: ${({ ismobile }) => (ismobile ? '18px 0' : '22px 0')} !important;
    }

    &-content {
      box-shadow: none !important;
      border-bottom: 2px solid #000;

      &.Mui-expanded {
        margin: 0 !important;
      }

      &-summary {
        min-height: auto !important;
        border-top: 0 !important;

        &-title {
          font-family: Pretendard-Medium;
          font-size: ${({ ismobile }) => (ismobile ? '14px' : '22px')};
        }
      }

      &-details {
        margin-left: ${({ ismobile }) => (ismobile ? '20px' : '28px')};
        margin-top: ${({ ismobile }) => ismobile && '-10px'};

        &-desc {
          font-family: Pretendard-Regular;
          font-size: ${({ ismobile }) => (ismobile ? '14px' : '22px')};
          text-indent: ${({ ismobile }) => ismobile && '-17px'};
          padding-left: ${({ ismobile }) => ismobile && '17px'};
          line-height: 1.3;
        }
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
