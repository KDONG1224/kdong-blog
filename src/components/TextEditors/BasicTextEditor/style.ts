import styled from '@emotion/styled';

interface StyledBasicTextEditorProps {
  scrolly: number;
}

export const StyledBasicTextEditor = styled.div<StyledBasicTextEditorProps>`
  .ck-toolbar {
    display: none !important;
    border: none !important;
    border-radius: 0 !important;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none !important;

    &.ck-focused {
      border: none !important;
      border-radius: 0 !important;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: none !important;
    }
  }

  .ck-editor__main {
    height: 100% !important;

    .ck-content {
      height: 100% !important;
      border: none !important;
      border-radius: 0 !important;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      box-shadow: none !important;

      &.ck-focused {
        border: none !important;
        border-radius: 0 !important;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        box-shadow: none !important;
      }

      h1 {
        &.ck-placeholder {
          display: none !important;
        }
      }

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
        font-size: 3.62em;
        line-height: 1.46;
      }

      > h3 {
        font-size: 3.44em;
        line-height: 1.48;
      }

      > h4 {
        font-size: 3.25em;
        line-height: 1.55;
      }

      > p {
        font-size: 2.25em;
        line-height: 1.75;
      }

      > ul {
        font-size: 1.2em;
        line-height: 1.4;

        > li {
          font-size: 1.5em;
          line-height: 1.4;
          list-style-type: disc;
        }
      }

      blockquote {
        background: #f4f8fa;
        font-size: 2.25em;
        line-height: 1.75;
        font-weight: 400;
        position: relative;
        color: #575757;
        padding: 22px 20px 18px 20px;
        border-left: 5px solid #ff5821;
        > p {
          margin: 0 !important;
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
          font-size: 2.25em;
          line-height: 1.75;
          padding: 14px 12px 12px 12px;
        }
      }
    }
  }
`;
