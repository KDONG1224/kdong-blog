import styled from '@emotion/styled';

export const StyledAdminLogoBox = styled.div`
  margin-top: 40px;

  .logo-wrapper {
    padding: 0px 15px;
    margin-bottom: 25px;
    text-align: center;
    color: rgba(255, 255, 255, 0.65);

    &.col {
      padding: 0px;
    }

    &-top {
      margin-top: 30px;
      font-size: 20px;
      color: #f43f00;
      cursor: pointer;
      margin-bottom: 20px;
      font-family: Pretendard-Bold;
    }

    &-middle {
      color: #ffffffa6;

      > p {
        margin-bottom: 0 !important;
      }

      &-role {
        font-size: 16px;
      }

      &-name {
        font-size: 22px;
        padding: 10px 0;
      }

      &-email {
        font-size: 14px;
      }
    }

    &-bottom {
      margin-top: 20px;
    }
  }
`;
