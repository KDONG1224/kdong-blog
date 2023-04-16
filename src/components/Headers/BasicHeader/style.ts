import styled from '@emotion/styled';

interface StyledBasicHeaderProps {
  isDarkMode: boolean;
}

export const StyledBasicHeader = styled.header<StyledBasicHeaderProps>`
  max-width: 750px;
  width: 100%;
  max-height: 120px;
  height: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 10000;
  border-bottom: ${({ isDarkMode }) =>
    isDarkMode ? '1px solid rgba(255, 255, 255, 0.2);' : '1px solid #363f47;'};
  backdrop-filter: blur(10px);
  overflow: hidden;

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.6rem;
    height: 100%;

    > h1 {
      font-size: 3.6rem;
      display: inline-block;

      > a {
        text-decoration: none;
        color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#202020')};
        text-transform: uppercase;
      }
    }

    .header-theme-switch {
      margin-right: 12rem;
    }

    .header-hamburger {
      position: absolute;
      cursor: pointer;
      top: 50%;
      right: 4rem;
      width: 22px;
      height: 44px;
      z-index: 10000;
      transform: translateY(-50%) scale(1.6);

      &-toggle {
        > span {
          display: block;
          width: 22px;
          height: 2px;
          position: relative;
          margin-top: 20px;

          &:before {
            content: '';
            width: 22px;
            height: 2px;
            background: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
            border-radius: 3px;
            position: absolute;
            left: 0;
            bottom: 0px;
            transition: transform 0.3s;
          }

          &:after {
            content: '';
            width: 22px;
            height: 2px;
            background: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
            border-radius: 3px;
            position: absolute;
            left: 0;
            bottom: 0px;
            transition: transform 0.3s;
          }
        }

        &:before {
          content: '';
          width: 22px;
          height: 2px;
          background: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
          border-radius: 3px;
          position: absolute;
          right: 0;
          bottom: 15px;
          transition: 0.3s width 0.4s;
        }

        &:after {
          content: '';
          width: 22px;
          height: 2px;
          background: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 13px;
          transition: 0.3s width 0.4s;
        }

        &.active {
          > span {
            &:before {
              transform: rotate(45deg);
              transition: 0.3s transform 0.8s;
            }
            &:after {
              transform: rotate(-45deg);
              transition: 0.3s transform 0.8s;
            }
          }
        }

        &.active:before {
          width: 0;
          right: 0;
          bottom: 15px;
        }

        &.active:after {
          width: 0;
          left: 0;
          top: 13px;
        }
      }
    }
  }
`;
