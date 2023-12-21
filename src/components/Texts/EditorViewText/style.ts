import styled from 'styled-components';

export const StyledEditorViewText = styled.div`
  p {
    margin-bottom: 0 !important;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  figure {
    margin: 0 !important;
  }

  .view-wrapper {
    font-size: 22px;
    padding-top: 100px;
    border-top: 2px solid #bfbfbf;

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: normal;
      letter-spacing: -1px;
      color: #000;
    }

    > h2 {
      font-size: 1.834em;
      line-height: 1.46;
    }

    > h3 {
      font-size: 1.708em;
      line-height: 1.48;
    }

    > h4 {
      font-size: 1.575em;
      line-height: 1.55;
    }

    > h5 {
      font-size: 1.309em;
      line-height: 1.65;
    }

    > p {
      font-size: 0.875em;
      line-height: 1.75;
      margin-bottom: 0 !important;
    }

    > ul {
      font-size: 0.84em;
      line-height: 1.4;
      list-style: inside;

      > li {
        text-indent: 0.4em;
        ::marker {
          margin: 0 !important;
        }
      }
    }

    blockquote {
      background: #f4f8fa;
      font-size: 0.875em;
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
        font-size: 0.91em;
      }
    }

    .table {
      > table {
        border: 1px double #b3b3b3;
        border-collapse: collapse;
        border-spacing: 0;
        height: 100%;
        width: 100%;

        tbody {
          > tr {
            &:nth-child(odd) {
              background-color: #f5f5f5;
            }

            > td {
              font-size: 0.875em;
              line-height: 1.75;
              padding: 14px 12px 12px 12px;

              border: 1px solid #bfbfbf;
              min-width: 2em;
            }
          }
        }
      }
    }
  }

  .view-wrapper-bottom {
    margin-top: 4em;
    border-top: 2px solid #bfbfbf;
    padding-top: 4em;

    &-left {
      display: block;

      &:first-child {
        margin-bottom: 2em;
      }

      &-box {
        border: 1.6px solid #000;
        padding: 1.6em !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        &-body {
          width: 80%;
          &-title {
            font-size: 1.8em !important;
            line-height: 1.6 !important;
            color: #000;
            padding: 2px 4px 0px !important;

            > span {
              margin-right: 10px !important;
            }
          }

          &-content {
            margin-top: 0.5em;
            font-size: 1.4em !important;
            line-height: 1.75;
          }
        }

        &-img {
          width: 100px;
          height: 100px;
          position: relative;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .view-wrapper {
      padding-top: 50px;
    }
  }

  @media (max-width: 750px) {
    .view-wrapper {
      font-size: 22px;

      li {
        line-height: 1.8;
      }

      pre {
        > code {
          line-height: 1.4;
          font-size: 0.7em;
        }
      }

      .table {
        > table {
          tbody {
            > tr {
              > td {
                font-size: 0.775em;
              }
            }
          }
        }
      }
    }
  }
`;
