import styled from '@emotion/styled';

interface StyledHomBannerProps {
  ismobile: boolean;
}

export const StyledHomBanner = styled.div<StyledHomBannerProps>`
  aspect-ratio: 100/25.2;

  .banner-wrapper {
    width: 100%;
    height: ${({ ismobile }) => (ismobile ? '330px' : '550px')};
    position: relative;
    margin-bottom: 150px;

    &-text {
      position: absolute;
      top: 45%;
      left: 2rem;
      transform: translateY(-50%);
      font-size: ${({ ismobile }) => (ismobile ? '2rem' : '3rem')};
      z-index: 9;
      font-family: 'Pretendard-Medium';
      line-height: 1.25;

      > p {
        color: #fff !important;
        &:nth-of-type(2) {
          margin: 1rem 0;
        }
      }
    }

    &-swiper {
      height: 100%;

      .swiper-slide {
        height: ${({ ismobile }) => (ismobile ? '300px' : '500px')};
      }

      .swiper-pagination {
        .swiper-pagination-bullet {
          width: ${({ ismobile }) => (ismobile ? '15px' : '30px')};
          height: ${({ ismobile }) => (ismobile ? '3px' : '4px')};
          border-radius: 0 !important;
          background: #b3b3b3 !important;

          &-active {
            background: #4c4c4c !important;
          }
        }
      }
    }
  }
`;
