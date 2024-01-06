import styled from 'styled-components';

interface StyledBookCardProps {
  $ismobile: boolean;
}

export const StyledBookCard = styled.div<StyledBookCardProps>`
  .check-wrapper {
    width: ${({ $ismobile }) => ($ismobile ? '200px' : '386px')};
    cursor: pointer;

    &-top {
      width: 100%;
      height: ${({ $ismobile }) => ($ismobile ? '200px' : '386px')};
      position: relative;

      &-img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &-middle {
      margin: 20px 0;
      border-bottom: 2px solid #d9d9d9;

      > h2 {
        font-family: Pretendard-Bold;
        font-size: ${({ $ismobile }) => ($ismobile ? '16px' : '26px')};
        color: #000;
      }

      > p {
        height: ${({ $ismobile }) => ($ismobile ? '34px' : '46px')};
        font-family: Pretendard-Medium;
        font-size: ${({ $ismobile }) => ($ismobile ? '12px' : '14.4px')};
        line-height: 1.5;
        color: #000;
        margin: 13px 0;
      }
    }

    &-bottom {
      &-box {
        > span {
          padding: 0.4rem 0.6rem;
          background-color: #000;
          color: #fff;
          font-family: Pretendard-Medium;
          font-size: 14px;
          line-height: 1.86;
        }
      }
    }
  }
`;
