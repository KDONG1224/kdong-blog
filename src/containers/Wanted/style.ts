import styled from '@emotion/styled';

interface StyledWantedFormProps {
  ismobile: boolean;
}

export const StyledWanted = styled.div<StyledWantedFormProps>`
  max-width: ${({ ismobile }) => (ismobile ? '96vw' : '600px')};
  margin: 0 auto;
  padding-bottom: ${({ ismobile }) => (ismobile ? '50px' : '100px')};

  .wanted-wrapper {
    margin-top: ${({ ismobile }) => (ismobile ? '100px' : '220px')};

    &-title {
      margin-bottom: ${({ ismobile }) => (ismobile ? '80px' : '120px')};

      > h1 {
        font-size: 40px;
        font-family: Pretendard-Bold;
        text-align: center;
      }
    }

    &-content {
      background-color: #f8f8f8;
      position: relative;
      width: 100%;
      border: 1px solid #b4b4b4;
      padding: 30px;
      margin: 0;
      box-sizing: border-box;

      &-desc {
        > p {
          font-size: 19px;
          line-height: 1.6;
          font-weight: 700;
          color: black;
          line-break: auto;
          margin-bottom: 20px;
        }
      }

      &-detail {
        margin-top: 10px;
        line-height: 1.5;
        font-size: 14px;
        padding: 12px 15px;
        background-color: #e9e9e9;
        margin-bottom: 40px;

        > p {
          font-family: Pretendard-Bold;
        }

        ol {
          > li {
            line-height: 1.5;
            margin-left: 15px;
          }
        }
      }

      &-form {
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
  }
`;
