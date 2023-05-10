import styled from '@emotion/styled';

interface StyledAboutProps {
  ismobile: boolean;
}

export const StyledAbout = styled.div<StyledAboutProps>`
  overflow: hidden;

  .about-wrapper {
    font-family: 'Pretendard-SemiBold';

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

    &-body {
      &-content {
        width: 100%;
        padding: ${({ ismobile }) => (ismobile ? '60px 0' : '100px 0')};
        text-align: center;

        > h2 {
          font-size: 28px;
          padding-bottom: 100px;
        }

        &-box {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: ${({ ismobile }) => (ismobile ? '40px 0' : '100px')};
          padding: ${({ ismobile }) => (ismobile ? '0 0px' : '0 200px')};
        }

        &.first {
          > p {
            font-size: ${({ ismobile }) => (ismobile ? '20px' : '30px')};
            padding-bottom: ${({ ismobile }) => (ismobile ? '40px' : '90px')};
            line-height: 1.8;
          }

          > div {
            width: ${({ ismobile }) => (ismobile ? '180px' : '220px')};
            height: ${({ ismobile }) => (ismobile ? '80px' : '100px')};
            margin: 0 auto;
            position: relative;
          }
        }
        &.second {
        }
        &.third {
        }
        &.four {
        }
        &.four {
        }

        &:nth-of-type(odd) {
          background-color: #f0f0f0;
        }
      }
    }
  }
`;
