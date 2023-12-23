import styled from 'styled-components';

interface StyledListBoxProps {
  $ismobile: boolean;
}

export const StyledListBox = styled.div<StyledListBoxProps>`
  .list-wrapper {
    width: 100%;

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${({ $ismobile }) => ($ismobile ? '30px' : '70px')};

      &-left {
        display: ${({ $ismobile }) => ($ismobile ? 'block' : 'flex')};
        align-items: center;
        gap: 20px;
        cursor: default;

        > h2 {
          font-family: Pretendard-Bold;
          font-size: ${({ $ismobile }) => ($ismobile ? '20px' : '26px')};
          color: #f43f00;
        }

        > p {
          font-family: Pretendard-Regular;
          font-size: ${({ $ismobile }) => ($ismobile ? '14px' : '18px')};
          color: #000;
          margin-top: ${({ $ismobile }) => $ismobile && '6px'};
        }
      }

      &-right {
        font-family: Pretendard-Regular;
        font-size: ${({ $ismobile }) => ($ismobile ? '14px' : '18px')};
        color: #000;
        cursor: pointer;
      }
    }

    &-contents {
      height: ${({ $ismobile }) => ($ismobile ? '320px' : '620px')};
      margin-top: 20px;
      position: relative;

      &-swiper {
        height: 100%;

        .swiper-slide {
          width: ${({ $ismobile }) => ($ismobile ? '186px' : '386px')};
        }

        .swiper-pagination {
          .swiper-pagination-bullet {
            width: ${({ $ismobile }) => ($ismobile ? '15px' : '30px')};
            height: ${({ $ismobile }) => ($ismobile ? '3px' : '4px')};
            border-radius: 0 !important;
            background: #b3b3b3 !important;

            &-active {
              background: #4c4c4c !important;
            }
          }
        }
      }

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 70px;
        height: 100%;
        z-index: 9;
        /* display: ${({ $ismobile }) => ($ismobile ? 'none' : 'block')}; */
      }
    }
  }
`;
