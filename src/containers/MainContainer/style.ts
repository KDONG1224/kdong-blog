import styled from '@emotion/styled';

interface StyledMainProps {
  ismobile: boolean;
}

export const StyledMain = styled.div<StyledMainProps>`
  .main-wrapper {
    &-banner {
      height: ${({ ismobile }) => (ismobile ? '340px' : '560px')};
    }

    &-recommand {
      width: 100%;
      background-color: #f8f8f8;

      &-box {
        padding: 60px 0;
      }

      .list-wrapper-contents {
        &::after {
          background-image: linear-gradient(
            to right,
            rgba(248, 248, 248, 0),
            rgba(248, 248, 248, 0.95) 90%,
            #f8f8f8
          );
        }
      }
    }

    &-subBanner {
      width: 100%;
      height: ${({ ismobile }) => (ismobile ? '100%' : '180px')};
      display: ${({ ismobile }) => (ismobile ? 'block' : 'flex')};
      align-items: center;
      justify-content: space-between;
      gap: 34px;
      margin: ${({ ismobile }) =>
        ismobile ? '0px auto 40px' : '100px auto 80px'};

      > div {
        width: 100%;
        height: ${({ ismobile }) => (ismobile ? '93px' : '100%')};
        position: relative;
        margin-bottom: ${({ ismobile }) => ismobile && '20px'};

        > div {
          width: 100%;
          height: ${({ ismobile }) => (ismobile ? '93px' : '100%')};
          position: relative;
        }
      }
    }

    &-project {
      width: 100%;
      background-color: #fff;

      &-box {
        padding: 20px 0;
      }

      .list-wrapper-contents {
        height: ${({ ismobile }) => (ismobile ? '330px' : '620px')};

        &::after {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.95) 90%,
            rgb(255, 255, 255) 100%
          );
        }
      }
    }

    &-algorithm {
      width: 100%;
      background-color: #fff;

      &-box {
        padding: 60px 0;
      }

      .list-wrapper-contents {
        height: ${({ ismobile }) => (ismobile ? '330px' : '620px')};

        &::after {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.95) 90%,
            rgb(255, 255, 255) 100%
          );
        }
      }
    }

    &-bottomBanner {
      width: 100%;
      height: ${({ ismobile }) => (ismobile ? '60px' : '80px')};
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #000;
      color: #fff;
      margin: ${({ ismobile }) => (ismobile ? '0px auto 40px' : '120px auto')};

      &-left {
        display: flex;
        align-items: center;
        font-family: Pretendard-Bold;
        font-size: ${({ ismobile }) => (ismobile ? '20px' : '37px')};
        color: #f43f00;
        padding-left: ${({ ismobile }) => (ismobile ? '10px' : '20px')};
      }

      &-center {
        display: ${({ ismobile }) => (ismobile ? 'block' : 'flex')};
        align-items: center;
        gap: 30px;
        font-family: Pretendard-Regular;
        font-size: ${({ ismobile }) => (ismobile ? '14px' : '19px')};
        color: #fff;
        line-height: ${({ ismobile }) => ismobile && '1.3'};
      }

      &-right {
        width: ${({ ismobile }) => (ismobile ? '10px' : '24px')};
        height: ${({ ismobile }) => (ismobile ? '20px' : '42px')};
        padding-right: ${({ ismobile }) => (ismobile ? '10px' : '20px')};
        cursor: pointer;

        &-box {
          width: ${({ ismobile }) => (ismobile ? '10px' : '24px')};
          height: ${({ ismobile }) => (ismobile ? '20px' : '42px')};
          position: relative;
        }
      }
    }

    &-faq {
      display: ${({ ismobile }) => (ismobile ? 'block' : 'flex')};
      align-items: baseline;
      justify-content: space-between;
      padding-bottom: ${({ ismobile }) => (ismobile ? '0px' : '40px')};
      margin-top: ${({ ismobile }) => ismobile && '60px'};

      &-left {
        font-family: Pretendard-Bold;
        font-size: ${({ ismobile }) => (ismobile ? '20px' : '26px')};
        line-height: 1.3;
        color: #f43f00;
        margin-bottom: ${({ ismobile }) => ismobile && '10px'};
      }
    }
  }

  @media (max-width: 1500px) {
    /* .main-wrapper-subBanner {
      display: block;
      height: 360px;

      > div {
        height: 180px;
        margin-bottom: 20px;
        > div {
          height: 180px;
        }
      }
    } */
  }
`;
