import styled from '@emotion/styled';

interface StyledCheckCardProps {
  lineBg: string;
  badgeBg: string;
  ismobile: boolean;
}

export const StyledCheckCard = styled.div<StyledCheckCardProps>`
  .check-wrapper {
    width: ${({ ismobile }) => (ismobile ? '200px' : '386px')};

    &.check {
      background-color: ${({ ismobile }) => (ismobile ? '#f8f8f8' : '#ffffff')};
      padding-bottom: ${({ ismobile }) => (ismobile ? '0px' : '20px')};
    }

    &-top {
      width: 100%;
      height: ${({ ismobile }) => (ismobile ? '200px' : '386px')};
      position: relative;

      &.check {
        background-color: #ffffff;
      }

      &.polygon {
        background-color: ${({ lineBg }) => lineBg};

        > div {
          height: 100%;
        }
      }

      &-line {
        width: 100%;
        height: ${({ ismobile }) => (ismobile ? '12px' : '24px')};
        background-image: ${({ lineBg }) =>
          lineBg &&
          `linear-gradient(
            -45deg,
            ${lineBg} 25%,
            transparent 25%,
            transparent 75%,
            ${lineBg} 75%
          ),
          linear-gradient(
            -45deg,
            ${lineBg} 25%,
            transparent 25%,
            transparent 75%,
            ${lineBg} 75%
          )`};
        background-repeat: repeat;
        background-position: ${({ ismobile }) =>
          ismobile ? '0 0, 6px 6px' : '0 0, 12px 12px'};
        background-size: ${({ ismobile }) =>
          ismobile ? '12px 12px' : '24px 24px'};
        margin-bottom: ${({ ismobile }) => (ismobile ? '20px' : '30px')};

        &.rotate {
          margin-top: ${({ ismobile }) => (ismobile ? '26px' : '30px')};
          transform: rotate(180deg);
        }
      }

      &-img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &-box {
          &.check {
            width: ${({ ismobile }) => (ismobile ? '130px' : '277px')};
            height: ${({ ismobile }) => (ismobile ? '130px' : '277px')};
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            /* border: ${({ badgeBg }) => badgeBg && `1px solid ${badgeBg}`}; */
            box-sizing: border-box;
          }

          &.polygon {
            width: ${({ ismobile }) => (ismobile ? '166px' : '326px')};
            height: ${({ ismobile }) => (ismobile ? '166px' : '326px')};
            position: relative;
            clip-path: ${({ ismobile }) =>
              ismobile
                ? `polygon(
              0 0,
              96% 0%,
              100% 6%,
              100% 96%,
              96% 100%,
              6% 100%,
              0% 96%,
              0% 6%
            )`
                : `polygon(
              0 0,
              90% 0%,
              100% 10%,
              100% 90%,
              90% 100%,
              10% 100%,
              0% 90%,
              0% 10%
            )`};

            &:before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: ${({ ismobile }) => (ismobile ? '20px' : '34px')};
              height: ${({ ismobile }) => (ismobile ? '20px' : '34px')};
              background-color: ${({ lineBg }) => lineBg};
              z-index: 1;
            }
          }
        }
      }

      &-badge {
        position: absolute;
        top: 0;
        height: ${({ ismobile }) => (ismobile ? '12px' : '24px')};
        background-color: ${({ badgeBg }) => badgeBg};
        display: flex;
        align-items: center;
        justify-content: center;

        > span {
          padding: ${({ ismobile }) =>
            ismobile ? '1rem 0.6rem' : '0.4rem 0.6rem'};
          color: #fff;
          font-family: Pretendard-Medium;
          font-size: ${({ ismobile }) => (ismobile ? '8px' : '14px')};
          line-height: 1.86;
        }

        &.check {
          left: 0;
        }
        
        &.polygon {
          right: 0;
          width: ${({ ismobile }) => (ismobile ? '16px' : '24px')} !important;
          height: ${({ ismobile }) => (ismobile ? '16px' : '24px')} !important;
          background-color: #dddddd;

          > span {
            color: transparent;
          }

          &:hover {
            width: auto !important;

            > span {
              color: #000;
            }
          }
        }
      }
    }

    &-middle {
      margin: 20px 0;
      border-bottom: 2px solid #d9d9d9;

      &.check {
        margin: ${({ ismobile }) => (ismobile ? '10px 0' : '20px 0')};
        padding: 0 20px;
      }

      > h2 {
        font-family: Pretendard-Bold;
        font-size: ${({ ismobile }) => (ismobile ? '16px' : '26px')};
        color: #000;
      }

      > p {
        height: ${({ ismobile }) => (ismobile ? '26px' : '46px')}
        font-family: Pretendard-Medium;
        font-size: ${({ ismobile }) => (ismobile ? '12px' : '14.4px')};
        line-height: 1.5;
        color: #000;
        margin: 13px 0;
      }
    }

    &-bottom {
      &.check {
        padding: 0 20px;
      }

      &-box {
        > span {
          padding: 0.4rem 0.6rem;
          background-color: #000;
          color: #fff;
          font-family: Pretendard-Medium;
          font-size: 14px;
          line-height: 1.86;
        }
      }
    }
  }
`;
