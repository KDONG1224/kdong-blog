import styled from 'styled-components';

export const StyledContentLayout = styled.div`
  .content-wrapper {
    font-size: 10px;

    &-head {
      width: 100%;
      height: 584px;
      margin-bottom: 10em;
      display: flex;
      align-items: center;

      > div {
        width: 50%;
        height: 100%;
      }

      &-left {
        position: relative;
        padding: 10em 4em;

        &-top {
          padding-bottom: 6em;
          border-bottom: 2px solid #000;

          > h2 {
            font-size: 5em;
            font-weight: bold;
            margin-bottom: 6em;
            word-break: break-all;
            white-space: break-spaces !important;
          }

          > div {
            > span {
              font-size: 2.2em;
              margin-right: 10px;
              color: #989898;
            }
          }
        }

        &-bottom {
          position: absolute;
          left: 40px;
          bottom: 0px;
          display: flex;
          align-items: center;
          gap: 10px;

          > p {
            font-size: 1.6em;
            line-height: 1.5;

            > span {
              text-decoration: underline;
            }
          }
        }
      }

      &-right {
        &-swiper {
          height: 100%;

          .swiper-pagination {
            display: none;
          }
        }
      }
    }

    &-children {
      width: 100%;
      padding-bottom: 100px;
    }
  }

  @media (max-width: 1000px) {
    .content-wrapper {
      &-head {
        height: 100% !important;
        flex-direction: column-reverse;
        margin-bottom: 5em !important;

        > div {
          width: 100% !important;
        }

        &-left {
          margin-top: 2.6em;
          border: 2px solid #000;
          padding: 2em !important;

          &-top {
            text-align: left;
            padding-bottom: 2em !important;
            display: flex !important;
            flex-direction: column-reverse !important;
            border-bottom: none !important;

            > h2 {
              font-size: 4em !important;
              word-break: break-word !important;
              margin-bottom: 0.2em !important;
            }

            > div {
              margin-bottom: 1.4em !important;

              > span {
                font-size: 1.8em !important;
                margin-right: 5px !important;
                word-break: break-word !important;
                line-height: 1.6 !important;
                border: 1px solid #000 !important;
                color: #000;
                padding: 2px 4px !important;
                font-size: 13px !important;
              }
            }
          }

          &-bottom {
            position: relative !important;
            left: 0 !important;

            > p {
              margin-bottom: 0 !important;
            }
          }
        }

        &-right {
          &-swiper {
            height: 30em !important;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    .content-wrapper {
      font-size: 9px;
    }
  }

  @media (max-width: 700px) {
    .content-wrapper {
      &-head {
        &-left {
          &-top {
            > h2 {
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
`;
