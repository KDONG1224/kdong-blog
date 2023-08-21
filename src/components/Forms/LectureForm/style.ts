import styled from '@emotion/styled';
import { Form } from 'antd';

export const StyledRequiredLabel = styled.div<{ isRequired: boolean }>`
  .star {
    color: ${({ isRequired }) => (isRequired ? 'red' : '')};
  }

  .text-wrap {
    .text {
      display: inline-block;
    }

    .desc {
      display: block;
      margin-left: 8px;
    }
  }
`;

export const StyledLectureForm = styled(Form)`
  .lf-wrapper {
    &-top {
      margin-bottom: 20px;
    }

    &-body {
      .ant-descriptions-item-label {
        width: 200px;
        height: fit-content;
        vertical-align: middle;

        &.color {
          width: 120px !important;
        }

        > span {
          display: block;
          height: 100%;
        }
      }

      .ant-descriptions-item-content {
        vertical-align: middle;

        .ant-form-item {
          margin-bottom: 0;
        }

        .text-editor {
          max-height: 600px;
          min-height: 600px;
        }

        .ant-color-picker-trigger {
          width: 190px;
          justify-content: start;

          .ant-color-picker-trigger-text {
            font-size: 12px;
            white-space: nowrap;
            text-align: left;
          }
        }
      }
    }

    .kboard-default-poweredby {
      display: none;
    }
    .kboard-thumbnail-poweredby {
      display: none;
    }
  }
`;
