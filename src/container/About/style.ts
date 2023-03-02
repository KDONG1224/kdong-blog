import styled from 'styled-components';

interface StyledAboutProps {
  ismobile: string;
  isDarkMode: boolean;
}

export const StyledAbout = styled.div<StyledAboutProps>`
  font-family: 'Chosunilbo_myungjo';
  padding: 40px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#f0eeeb')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#f0eeeb' : '#333')};

  .about-wrapper {
    &-title {
      padding: ${({ ismobile }) =>
        ismobile === 'true' ? '8rem 0 12rem' : '8rem 0 18rem'};

      h2 {
        font-family: 'Saol';
        font-size: ${({ ismobile }) =>
          ismobile === 'true' ? '6rem;' : '145px;'};
        display: block;
        padding-top: 10px;
        font-weight: 400;
        line-height: 0.8;
        color: ${({ isDarkMode }) => (isDarkMode ? '#f0eeeb' : '#333')};
      }
    }

    &-body {
      &-top {
        padding-bottom: 250px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      &-middle {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-bottom: 280px;
        color: ${({ isDarkMode }) => (isDarkMode ? '#f0eeeb' : '#333')};

        &-img {
          flex: ${({ ismobile }) =>
            ismobile === 'true' ? '0 0 54%;' : '0 0 64%;'};
        }

        &-desc {
          flex: ${({ ismobile }) =>
            ismobile === 'true' ? '0 0 40%;' : '0 0 30%;'};
        }
      }

      &-bottom {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-bottom: 100px;

        &-img {
          flex: 0 0 54%;
        }

        &-desc {
          flex: 0 0 40%;
        }
      }
    }

    &-youtube {
      padding-bottom: 200px;
      height: 100%;
      &-top {
        border-bottom: ${({ isDarkMode }) =>
          isDarkMode ? '1px solid #f0eeeb' : '1px solid #333'};
      }

      &-content {
        margin-top: 20px;
        padding-bottom: 20px;
        height: ${({ ismobile }) => (ismobile === 'true' ? '400px' : '320px')};
        border-bottom: ${({ isDarkMode }) =>
          isDarkMode ? '1px solid #f0eeeb' : '1px solid #333'};

        &-box {
          /* width: 460px; */
        }

        .swiper-slide {
          /* width: 460px !important; */
          /* width: 100%; */
        }
      }
    }

    .swiper {
      height: 100%;
      .swiper-wrapper {
        width: 100%;

        .swiper-slide {
          /* width: 460px !important; */
        }
      }
    }

    .swiper-button-next {
      right: -20px;
    }

    .swiper-button-prev {
      left: -30px;
    }

    .swiper-horizontal > .swiper-scrollbar,
    .swiper-scrollbar.swiper-scrollbar-horizontal {
      /* bottom: -3px; */
      z-index: 99;
    }

    .sub-title {
      font-size: 30px;
      line-height: ${({ ismobile }) => (ismobile === 'true' ? '1.5' : '1')};
      margin-bottom: 15px;
      margin-top: 2em;

      &.noMargin {
        margin-top: 0;
      }
    }
    .sub-desc {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`;
