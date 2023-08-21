import styled from '@emotion/styled';

export const StyledImageBankListTable = styled.div`
  .ant-table-tbody {
    .ant-table-cell {
      position: relative;

      .ant-checkbox-wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      > span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      > button {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .imagebank-image-wrapper {
    &-box {
      width: 100%;
      height: 200px;
      position: relative;

      > img {
        object-fit: contain !important;
      }
    }
  }
`;
