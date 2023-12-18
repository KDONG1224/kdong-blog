import styled from 'styled-components';

export const StyledWantedForm = styled.div`
  .wform-wrapper {
    &-form {
      width: 100%;

      .ant-form-item {
        margin-bottom: 0 !important;
      }

      &-input {
        background: #fff;
        font-size: 19px;
        font-family: Pretendard-Bold;
        padding: 4px 10px;
        border: 1px solid #000;
        margin-bottom: 10px;
        border-radius: 0 !important;

        &::before {
          border-bottom: 0 !important;
        }

        &::after {
          border-bottom: 0 !important;
        }
      }

      &-btn {
        margin-top: 40px;

        > button {
          padding: 10px 22px;
          width: 100%;
          height: 100%;
          font-size: 19px;
          font-weight: 700;
          background-color: #f43f00 !important;
          color: #fff;
        }
      }
    }
  }
`;
