import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import styled from 'styled-components';

interface StyledGuestbookModalProps {
  $ismobile: boolean;
}

export const StyledGuestbooks = styled.div`
  .books-wrapper {
    padding: 0px 4rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;

    > div {
      margin-bottom: 60px;
    }

    &-bottom {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .ant-btn {
        width: 30%;
        height: 50px;
        font-size: 2.2rem;
        border: 4px solid #000;
        text-align: center;
        display: grid;
        place-items: center;
        padding: 0.2rem 0.6rem;
        background-color: #fff;
        border-radius: 0%;

        &:hover {
          color: #000;
          border: 4px solid #000;
        }
      }
    }
  }

  .ant-float-btn {
    border-radius: 0px;
    min-height: 80px;
    width: 80px;
    border: 4px solid #000;

    .ant-float-btn-body {
      .ant-float-btn-content {
        width: 100%;
        justify-content: center;
        min-height: 80px;
        height: 100%;

        .ant-float-btn-icon {
          font-size: 3rem;
          width: 3rem;

          > span {
            > svg {
              font-size: 3rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    .books-wrapper {
      justify-content: center;

      > div {
        margin-bottom: 60px;
      }
    }
  }
`;

export const StyledGuestbookModal = styled(Modal)<StyledGuestbookModalProps>`
  .ant-modal-title {
    font-size: 2.3rem;
    font-family: 'Pretendard-Medium';
  }

  .ant-modal-content {
    border-radius: 0px;
    border: 4px solid #000;
  }

  .ant-modal-close-x {
    color: #000;
  }

  .create-wrapper {
    font-size: 10px;

    &-form {
      .ant-form-item {
        margin-bottom: 0px;
      }

      .ant-form-item-control-input-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > div {
          width: calc(50% - 10px);
          margin-bottom: 10px;
        }
      }

      .ant-descriptions-view {
        border: 4px solid #000;
        border-radius: 0 !important;
        border-bottom: 0px !important;
      }

      .ant-descriptions-row {
        border-bottom: 4px solid #000 !important;
      }

      .ant-descriptions-item-label {
        background-color: #f6f6f6 !important;
        font-size: 2rem;
        vertical-align: middle !important;
        width: 10em;
        border-inline-end: 4px solid #000 !important;

        > span {
          font-family: 'Pretendard-Bold' !important;
        }
      }

      .ant-input {
        font-size: 2.2rem;
        border: 4px solid #000;
        border-radius: 0;
      }

      .ant-input-affix-wrapper {
        textarea {
          resize: none;
          height: 180px;
          font-size: 2.2rem;
          border: 4px solid #000;
          border-radius: 0;
        }
      }

      &-btns {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 20px;

        .ant-btn {
          border: 4px solid #000;

          &:hover {
            color: #fff;
            background-color: #000;
            border: 4px solid #000;
          }
        }
      }

      .guest-image-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
      }

      .image-lists {
        width: 100%;
        border: 4px solid #000;
        padding: 1rem;

        &-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          position: relative;

          > p {
            margin: 0 !important;
          }

          &-image {
            width: 24px;
            height: 24px;
            position: relative;

            > img {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    .create-wrapper {
      font-size: 8px;

      &-form {
        .ant-descriptions-item-label {
          width: 100px;
          font-size: 1.2rem;
        }

        .ant-input {
          font-size: 1.4rem;
        }

        .ant-input-affix-wrapper {
          textarea {
            font-size: 1.4rem;
          }
        }

        .guest-image-box {
          display: block;
          width: 100%;
        }

        .image-lists {
          margin-top: 20px;

          &-box {
            width: 100%;
            height: 100%;

            > p {
              width: 100px;
              font-size: 1.2rem;
            }

            &-image {
              width: 24px;
              height: 24px;
              position: relative;

              > img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;

// @media (max-width: 1300px) {
//   .refer-wrapper-box {
//     width: calc(33% - 10px);
//   }
// }

// @media (max-width: 900px) {
//   .refer-wrapper-box {
//     width: calc(50% - 10px);
//   }
// }

// @media (max-width: 550px) {
//   .refer-wrapper-box {
//     width: calc(100% - 10px);
//   }
// }

export const StyledAddImageWrap = styled.div`
  width: 80px;
  height: 80px;
  border: 4px dashed #000;
  background: #fafafa;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  vertical-align: top;
  background-color: #f5f5f5;

  @media (max-width: 750px) {
    width: 100%;
    height: 40px;
  }
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  font-size: 20px;
  color: #000;
  line-height: 150px;
  padding: 0 65px 0 65px;
`;

export const StyledCloseOutlined = styled(CloseOutlined)`
  position: absolute;
  background-color: #000;
  color: #fafafa;
  cursor: pointer;
  font-size: 16px;
  top: 0;
  right: 0;
  padding: 3px;
  z-index: 1000;
`;
