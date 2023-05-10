// libraries
import styled from '@emotion/styled';
import { commonIcons } from 'consts';

interface StyledMainLayoutProps {
  ismobile: boolean;
  nomargin: boolean;
}

export const StyledMainLayout = styled.div<StyledMainLayoutProps>`
  position: relative;

  header {
    z-index: 99;
  }

  .layout-main {
    margin-top: 100px;
  }

  footer {
    margin-top: ${({ nomargin }) => (nomargin ? '0' : '100px')};
  }

  .scroll-top {
    position: fixed;
    z-index: 99;
    bottom: 150px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: rgba(240, 240, 240, 0.5);
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    &.show {
      opacity: 1;
      transform: translateX(0%);
      animation: fadeInRight 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
    }

    &.hide {
      opacity: 0;
      transform: translateX(130%);
      animation: fadeOutRight 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
    }

    &::before {
      content: '';
      width: 50px;
      height: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-image: url(${commonIcons.ICON_TOP_ARROW});
      background-position: center;
      background-repeat: no-repeat;
      background-size: ${({ ismobile }) => (ismobile ? '26px' : '40px')};
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;
