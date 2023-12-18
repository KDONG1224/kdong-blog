import { Drawer } from 'antd';
import styled from 'styled-components';

interface StyledBasicDrawerProps {
  nopadding: 'true' | 'false';
}

export const StyledBasicDrawer = styled(Drawer)<StyledBasicDrawerProps>`
  font-size: 3rem;

  & .MuiDrawer-paper {
    height: 100%;
    padding: 1.6rem;
    padding-right: 0;
    border-right: 2px solid #000;
    z-index: 110;
  }

  .mobile-menu-wrapper {
    position: relative;

    &-list {
      font-size: 2.8rem;
      display: flex;
      align-self: center;
      margin-bottom: 1rem;

      &-eng {
        font-family: 'Pretendard-Bold';
      }

      &-kor {
        font-family: 'Pretendard-Medium';
        font-size: 1rem;
        margin-top: 0.3rem;
        margin-left: 1rem;
        color: #a6a6a6;
      }
    }
  }

  .mobile-menu-close {
    width: 4rem;
    height: 4rem;
    position: fixed;
    right: 10px;
    top: 10px;
    border: 2px solid #000;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &.hidden {
      animation: hidden 10s;
    }

    &.show {
      animation: show 2s;
    }

    &-img {
      width: 3.2rem;
      height: 3.2rem;
      position: relative;
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
