import styled from 'styled-components';

interface StyledBasicCardProps {
  ismobile: boolean;
}

export const StyledBasicCard = styled.div<StyledBasicCardProps>`
  .card-wrapper {
    width: 100%;

    &-img {
      width: ${({ ismobile }) => (ismobile ? '80px' : '100px')};
      height: ${({ ismobile }) => (ismobile ? '80px' : '100px')};
      margin: 0 auto;
      position: relative;
    }

    &-title {
      margin: ${({ ismobile }) => (ismobile ? '20px 0 10px' : '30px 0 20px')};

      > p {
        font-size: ${({ ismobile }) => (ismobile ? '20px' : '24px')};
        font-family: Pretendard-Bold;
      }
    }

    &-desc {
      > p {
        font-size: ${({ ismobile }) => (ismobile ? '14px' : '18px')};
        line-height: 1.3;
        font-family: Pretendard-Regular;
      }
    }
  }
`;
