import styled from '@emotion/styled';

export const StyledWantedForm = styled.div`
  .wform-wrapper {
    &-form {
      width: 100%;

      &-input {
        background: #fff;
        font-size: 19px;
        font-family: Pretendard-Bold;
        padding: 4px 10px;
        border: 1px solid #000;

        &::before {
          border-bottom: 0 !important;
        }

        &::after {
          border-bottom: 0 !important;
        }
      }
    }
  }
`;
