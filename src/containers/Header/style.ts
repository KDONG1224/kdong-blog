// libraries
import styled from '@emotion/styled';

interface StyledHeaderProps {
  ismobile: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  ${(props) =>
    props.ismobile
      ? `
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(10px);
  `
      : `padding: 2.6rem 3rem;
  `}

  .header-wrapper {
    position: relative;

    &-top {
      position: fixed;
      top: ${({ ismobile }) => (ismobile ? '44px' : '10px')};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 2.6rem;
      font-family: Pretendard-Bold;
      z-index: 99;
      left: ${({ ismobile }) => ismobile && '8px'};

      &-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        > div {
          cursor: pointer;
        }

        &-menu {
          width: 100%;
          height: 100%;
          font-size: 2.2rem;
          border: 2px solid #000;
          text-align: center;
          display: grid;
          place-items: center;
          padding: 0.2rem 0.6rem;
          background-color: #fff;
        }
      }

      &-right {
        cursor: pointer;
        margin-right: ${({ ismobile }) => (ismobile ? '1.6rem' : '5.9rem')};
        transition: 0.6s all cubic-bezier(0.5, 0, 0.5, 1);

        &.short {
          margin-top: -58px;
        }
      }
    }

    &-bottom {
      position: fixed;
      width: ${({ ismobile }) =>
        ismobile ? 'calc(100% - 0px * 2)' : 'calc(100% - 30px * 2)'};
      height: ${({ ismobile }) => (ismobile ? '28px' : '68px')};
      left: ${({ ismobile }) => (ismobile ? '-2px' : '30px')};
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      transition: 0.6s all cubic-bezier(0.5, 0, 0.5, 1);
      top: ${({ ismobile }) => (ismobile ? '10px' : '44px')};
      cursor: pointer;
      z-index: 99;

      &.short {
        width: 100px;
        margin-left: ${({ ismobile }) => ismobile && '4px'};
        left: ${({ ismobile }) => ismobile && '4px'};
      }

      > img {
        width: 40px !important;
        height: 100%;
      }

      &-line {
        width: 13.7px;
        min-width: 13.7px;
        height: 4px;
        position: relative;
        transition: 0.6s all cubic-bezier(0.5, 0, 0.5, 1);
        flex: 1 0 0;

        > div {
          transition: 0.6s all cubic-bezier(0.5, 0, 0.5, 1);
          background-color: black;
          position: absolute;
          width: 100%;
          height: ${({ ismobile }) => (ismobile ? '5px' : '12px')};
          bottom: ${({ ismobile }) => (ismobile ? '0.2px' : '5.4px')};
          left: -14px;
          border-left: 26px solid #000;
          border-right: 2px solid black;
          box-sizing: content-box;
        }
      }
    }
  }
`;
