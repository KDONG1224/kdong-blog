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

          > span {
            font-size: 2.2em;
            margin-right: 10px;
            color: #989898;
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

  @media (max-width: 700px) {
    .content-wrapper {
      font-size: 9px;

      &-head {
        flex-direction: column-reverse;
        height: 100%;
        margin-bottom: 2em;

        > div {
          width: 100%;
        }

        &-left {
          padding: 2em 2em;

          &-top {
            text-align: center;
            padding-bottom: 5em;

            > h2 {
              font-size: 4em;
              word-break: break-word;
              margin-bottom: 0.6em;
            }

            > span {
              font-size: 1.8em;
              margin-right: 5px;
              word-break: break-word;
              line-height: 1.6;
            }
          }

          &-bottom {
            left: 20px;
            bottom: 10px;
          }
        }

        &-right {
          &-swiper {
            height: 30em;
          }
        }
      }
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
