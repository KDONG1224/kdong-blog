import styled from '@emotion/styled';

interface StyledPageLayoutProps {
  ismobile: boolean;
}

export const StyledPageLayout = styled.div<StyledPageLayoutProps>`
  padding-top: ${({ ismobile }) => (ismobile ? '50px' : '100px')};
  padding-bottom: 50px;

  .page-wrapper {
    width: 100%;

    &-title {
      padding: ${({ ismobile }) => (ismobile ? '0 0px 20px' : '0 20px 20px')};
      margin-left: -10px;
      margin-right: -10px;
      width: calc(100% + 20px);
      margin-bottom: 40px;

      > h1 {
        font-size: 40px;
        font-family: Pretendard-Bold;
        text-align: center;
      }
    }

    &-select {
      ${({ ismobile }) =>
        ismobile
          ? `
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 14px;
              place-items: center;

              .basic-select-wrapper {
                width: 177px;
              }
              `
          : `
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex: 1;
          `}

      > div {
        width: calc(25% - 20px);
      }

      .basic-select-wrapper {
        border-radius: 0 !important;

        &.Mui-focused {
          .MuiOutlinedInput-notchedOutline {
            border-color: #000 !important;
          }
        }
      }
    }

    &-children {
      > div {
        padding-top: 50px;

        > div {
          width: 100%;

          ${({ ismobile }) =>
            ismobile
              ? `
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 14px;
              place-items: center;

              .refer-wrapper {                
                &-box {
                  width: 177px;
                  height: 177px;
                }
              }

              .check-wrapper {
                width: 177px;

                &-top {
                  height: 177px;
                }

                &-middle {
                  > p {
                    height: 34px;
                  }
                }
              }
              `
              : `
              display: flex;
              justify-content: space-between;
              flex-direction: row;
              flex-wrap: wrap;
              gap: 20px;

              .refer-wrapper {                
                &-box {
                  width: 320px;
                  height: 320px;
                }
              }

              .check-wrapper {
                width: 350px;
                
                &-top {
                  height: 350px;
                }
              }
          `}

          > div {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;
