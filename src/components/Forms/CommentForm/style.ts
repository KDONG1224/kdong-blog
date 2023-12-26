import { Form } from 'antd';
import styled from 'styled-components';

export const StyledCommentForm = styled(Form)`
  .comment-wrapper {
    font-size: 22px;

    &-content {
      will-change: opacity;
      position: relative;
      background-color: #181818;
      border-radius: 20px;

      > textarea {
        will-change: transform;
        display: block;
        overflow: hidden !important;
        overflow-x: hidden !important;
        box-sizing: border-box;
        min-height: 200px;
        width: 100% !important;
        height: 200px;
        padding: 12px 20px;
        resize: none !important;
        word-wrap: break-word !important;
        color: #bbb;
        background-color: #181818;
        border: 0;
        background-color: transparent;
        box-shadow: none;
        outline: 0;
        border-radius: 0;
        font-size: 0.84em;
      }

      &-field {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-box {
          position: relative;
          width: 100%;
          min-height: 32px;
          padding: 12px 20px;
          display: flex;
          align-items: center;

          &-username {
            width: 40%;
            height: 32px;
            overflow: hidden;
            display: flex;
            align-items: center;

            &-label {
              user-select: none;
              pointer-events: none;
              overflow: hidden;
              padding: 0 10px;
              font-size: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              min-width: 45px;
              color: #bbb;
            }
          }

          &-password {
            width: calc(60% - 8px);
            margin-left: 8px;
            overflow: hidden;
            display: flex;
            align-items: center;

            &-label {
              user-select: none;
              pointer-events: none;
              overflow: hidden;
              padding: 0 10px;
              font-size: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              min-width: 45px;
              color: #bbb;
            }
          }

          .ant-input {
            width: 100%;
            padding: 0 10px 0 45px;
            font-size: 15px;
            font-weight: 700;
            border-radius: 16px;
            box-sizing: border-box;
            height: 32px;
            line-height: 32px;
            color: #bbb;
            background-color: #181818;
            border: 0;
            background-color: transparent;
            box-shadow: none;
            outline: 0;
            border-radius: 0;
          }
        }

        &-icons {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-right: 20px;

          .ant-btn {
            border: 0;
            padding: 0;
            color: transparent;
            background-color: transparent;
            box-shadow: none;
            outline: 0;
            border-radius: 0;
            height: 24px;

            > span {
              > svg {
                font-size: 24px;
                color: #bbb;
                display: block;
                transition: color 0.2s, transform 0.2s;
                cursor: pointer;

                &:hover {
                  color: #7bcc7b !important;
                }
              }
            }
          }

          > span {
            > svg {
              font-size: 24px;
              color: #bbb;
              display: block;
              transition: color 0.2s, transform 0.2s;
              cursor: pointer;

              &:hover {
                color: #7bcc7b !important;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .comment-wrapper {
    }
  }

  @media (max-width: 750px) {
    .comment-wrapper {
      font-size: 22px;
    }
  }
`;
