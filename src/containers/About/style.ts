import styled from '@emotion/styled';

interface StyledAboutProps {
  ismobile: boolean;
}

export const StyledAbout = styled.div<StyledAboutProps>`
  overflow: hidden;

  .about-wrapper {
    font-family: 'Pretendard-SemiBold';

    &-title {
      padding: ${({ ismobile }) => (ismobile ? '0 0px 20px' : '0 20px 20px')};
      margin-left: -10px;
      margin-right: -10px;
      width: calc(100% + 20px);
      margin-bottom: 40px;

      > h1 {
        font-size: 40px;
        font-family: Pretendard-Bold;
        text-align: center;
      }
    }

    &-body {
      &-content {
        width: 100%;
        padding: ${({ ismobile }) => (ismobile ? '60px 0' : '100px 0')};
        text-align: center;

        > h2 {
          font-size: 28px;
          padding-bottom: 100px;
        }

        &-box {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: ${({ ismobile }) => (ismobile ? '40px 0' : '100px')};
          padding: ${({ ismobile }) => (ismobile ? '0 0px' : '0 200px')};
        }

        &.first {
          > p {
            font-size: ${({ ismobile }) => (ismobile ? '20px' : '30px')};
            padding-bottom: ${({ ismobile }) => (ismobile ? '40px' : '90px')};
            line-height: 1.8;
          }

          > div {
            width: ${({ ismobile }) => (ismobile ? '180px' : '220px')};
            height: ${({ ismobile }) => (ismobile ? '80px' : '100px')};
            margin: 0 auto;
            position: relative;
          }
        }
        &.second {
        }
        &.third {
        }
        &.four {
        }

        &.five {
          padding: ${({ ismobile }) => (ismobile ? '60px' : '100px')};

          > div {
            width: 100%;
            height: 500px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            > div {
              width: 50%;
              height: 400px;

              > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center 80%;
              }
            }
          }

          > p {
            font-size: ${({ ismobile }) => (ismobile ? '20px' : '30px')};
            padding-top: ${({ ismobile }) => (ismobile ? '40px' : '90px')};
            line-height: 1.8;
          }
        }

        &:nth-of-type(odd) {
          background-color: #f0f0f0;
        }

        &-list {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          margin-bottom: 40px;

          &-item {
            width: 30%;
            height: 320px;
            border: 2.5px solid #f43f00;
            position: relative;
            padding: 30px;

            .cut {
              position: absolute;
              top: -2.8px;
              left: -2.8px;
              width: 20px;
              height: 20px;
              border-top: 5px solid white;
              border-left: 5px solid white;
              border-bottom: 2.5px solid #f43f00;
              border-right: 2.5px solid #f43f00;
            }

            &:nth-child(2) {
              border: 2.5px solid #5b00ef;

              .cut {
                border-bottom: 2.5px solid #5b00ef;
                border-right: 2.5px solid #5b00ef;
              }

              .about-wrapper-body-content-list-item-title {
                border-bottom: 2.5px solid #5b00ef;
                color: #5b00ef;
              }

              .about-wrapper-body-content-list-item-desc {
                > span {
                  color: #5b00ef;
                }
              }
            }

            &:nth-child(3) {
              border: 2.5px solid #00ceea;

              .cut {
                border-bottom: 2.5px solid #00ceea;
                border-right: 2.5px solid #00ceea;
              }

              .about-wrapper-body-content-list-item-title {
                border-bottom: 2.5px solid #00ceea;
                color: #00ceea;
              }

              .about-wrapper-body-content-list-item-desc {
                > span {
                  color: #00ceea;
                }
              }
            }

            &-title {
              border-bottom: 2.5px solid #f43f00;
              color: #f43f00;

              > h3 {
                font-family: 'UnioneForceStencil';
                font-size: 50px;
              }

              > p {
                font-size: 20px;
              }
            }

            &-desc {
              margin-top: 20px;

              > p {
                font-size: 18px;
                line-height: 1.2;
                text-align: center;
              }

              > span {
                font-size: 14px;
                color: #f43f00;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .about-wrapper-body-content-box {
      padding: 0 140px;
    }
  }

  @media (max-width: 850px) {
    .about-wrapper-body-content-box {
      padding: 0 20px;
    }

    .about-wrapper-body-content-list-item-desc {
      > p {
        font-size: 16px;
      }

      > span {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 750px) {
    .about-wrapper-body-content-list-item {
      height: 360px;
    }
  }
`;
