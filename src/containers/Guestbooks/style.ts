import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import styled from 'styled-components';

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

        background-color: #000;
        border: 1px solid #000;
        color: #fff;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .ant-float-btn {
    border-radius: 0px;
    min-height: 80px;
    width: 80px;

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

export const StyledGuestbookModal = styled(Modal)`
  .ant-modal-title {
    font-size: 2rem;
  }

  .create-wrapper {
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
        border: 1px solid #dbdbdb;
        border-radius: 0 !important;
      }

      .ant-descriptions-row {
        border-bottom: 1px solid #dbdbdb;
      }

      .ant-descriptions-item-label {
        background-color: #f6f6f6 !important;
        font-size: 2rem;
        vertical-align: middle !important;
        width: 200px !important;
      }

      .ant-input {
        font-size: 2.2rem;
      }

      .ant-input-affix-wrapper {
        textarea {
          resize: none;
          height: 180px;
          font-size: 2.2rem;
        }
      }

      &-btns {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 20px;
      }

      .guest-image-box {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      .image-lists {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        &-box {
          width: 80px;
          height: 80px;
          position: relative;

          > img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const StyledAddImageWrap = styled.div`
  width: 80px;
  height: 80px;
  border: 1px dashed #ddd;
  background: #fafafa;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  vertical-align: top;
  background-color: #f5f5f5;
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  font-size: 20px;
  color: #bdbdbd;
  line-height: 150px;
  padding: 0 65px 0 65px;
`;

export const StyledCloseOutlined = styled(CloseOutlined)`
  position: absolute;
  background-color: #f5222d;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  top: 0;
  right: 0;
  padding: 3px;
  z-index: 1000;
`;
