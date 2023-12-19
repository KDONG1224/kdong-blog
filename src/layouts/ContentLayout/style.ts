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

      > div {
        h1,
      h2,
      h3,
      h4 {
        font-weight: normal;
        letter-spacing: -1px;
        color: #000;
        margin: 1em 0 20px;
      }

      > h2 {
        font-size: 2.62em;
        line-height: 1.46;
      }

      > h3 {
        font-size: 2.44em;
        line-height: 1.48;
      }

      > h4 {
        font-size: 2.25em;
        line-height: 1.55;
      }

      > p {
        font-size: 1.25em;
        line-height: 1.75;
        margin-bottom: 0 !important;
      }

      > ul {
        font-size: 1.2em;
        line-height: 1.4;

        > li {
          font-size: 1.2em;
          line-height: 1.4;
          list-style-type: disc;
        }
      }

      blockquote {
        background: #f4f8fa;
        font-size: 1.25em;
        line-height: 1.75;
        font-weight: 400;
        position: relative;
        color: #575757;
        padding: 22px 20px 18px 20px;
        border-left: 5px solid #ff5821;
      }

      pre {
        > code {
          line-height: 2;
          font-size: 1.3em;
        }
      }

      .table {
        > table {
          tbody {
            > tr {
              &:nth-child(odd) {
                background-color: #f5f5f5;
              }
            }
          }
        }
      }

      .ck-editor__editable {
        &.ck-editor__nested-editable {
          font-size: 1.25em;
          line-height: 1.75;
          padding: 14px 12px 12px 12px;
        }
      }
    }
      }
    }
  }

  @media (max-width: 1000px) {
    .content-wrapper {
      &-head {
        height: 100%;
        flex-direction: column-reverse;
        margin-bottom: 2em;

        > div {
          width: 100%;
        }

        &-left {
          margin-top: 2.6em;
          border: 2px solid #000;
          padding: 2em;

          &-top {
            text-align: left;
            padding-bottom: 2em;
            display: flex;
            flex-direction: column-reverse;
            border-bottom: none;

            > h2 {
              font-size: 4em;
              word-break: break-word;
              margin-bottom: 0.2em;
            }

            > div {
              margin-bottom: 1.4em;

              > span {
                font-size: 1.8em;
                margin-right: 5px;
                word-break: break-word;
                line-height: 1.6;
                border: 1px solid #000;
                color: #000;
                padding: 2px 4px;
                font-size: 13px;
              }
            }
          }

          &-bottom {
            position: relative;
            left: 0;

            > p {
              margin-bottom: 0 !important;
            }
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
