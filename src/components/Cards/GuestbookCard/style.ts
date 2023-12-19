import styled from 'styled-components';

interface StyledGuestbookCardProps {
  $ismobile: boolean;
}

export const StyledGuestbookCard = styled.div<StyledGuestbookCardProps>`
  .book-wrapper {
    max-width: 440px;
    min-width: 440px;
    width: 100%;
    height: 520px;
    border: 4px solid #000;
    padding: 10px;

    &-top {
      margin-bottom: 30px;

      > h2 {
        font-family: 'UnioneForceStencil';
        text-align: center;
        margin: 0 !important;
        font-size: 3.6rem;
        position: relative;

        > span {
          font-family: 'Pretendard-Regular';
          font-size: 1.6rem;
          position: absolute;
          top: 50%;
          color: #8a8888;
          width: 120px;
          word-break: break-all;

          &.left {
            left: 0%;
            top: 10%;
            text-align: left;
          }

          &.right {
            right: 0%;
            top: 10%;
            text-align: right;
          }
        }
      }

      > p {
        color: transparent;
        border-bottom: 4px solid #000;
        line-height: 0.4;
        margin: 0 !important;
      }
    }

    &-image {
      height: 200px;
      margin-top: 20px;
      position: relative;

      &-swiper {
        height: 200px;

        .swiper-slide {
          width: 100%;
          height: 80%;
        }

        .swiper-pagination {
          .swiper-pagination-bullet {
            width: ${({ $ismobile }) => ($ismobile ? '15px' : '15px')};
            height: ${({ $ismobile }) => ($ismobile ? '3px' : '4px')};
            border-radius: 0 !important;
            background: #b3b3b3 !important;

            &-active {
              background: #f43f00 !important;
            }
          }
        }
      }
    }

    &-middle {
      margin-top: 20px;
      text-align: center;

      > p {
        font-size: 2.6rem;
        word-break: break-all;
        margin: 0 !important;
        line-height: 1.4;
      }
    }
  }

  @media (max-width: 880px) {
    .book-wrapper {
      max-width: 300px;
      height: 420px;

      &-image {
        height: 160px;

        &-swiper {
          height: 160px;

          .swiper-slide {
            width: 100%;
            height: 80%;
          }
        }
      }

      &-middle {
        > p {
          font-size: 2rem;
        }
      }
    }
  }
`;
