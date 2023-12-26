import styled from 'styled-components';

export const StyledCommentBox = styled.div`
  .box-wrapper {
    font-size: 20px;
    will-change: opacity;
    padding-left: 40px;
    position: relative;
    clear: both;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 80%;
    margin-bottom: 33px;

    &-desc {
      background-color: #181818 !important;
      position: relative;
      box-sizing: border-box;
      max-width: 100%;
      width: fit-content;
      min-height: 52px;
      display: flex;
      align-items: center;
      padding: 12px 20px;
      margin-bottom: 5px;
      border-radius: 26px;
      color: #bbb;
      font-size: 0.84em;
      user-select: none;
      pointer-events: none;
      line-height: 1.3em;

      &.private {
        user-select: auto;
        pointer-events: auto;
      }

      &:before {
        position: absolute;
        width: 80px;
        height: 80px;
        font: 80px/1 'Icon-801' !important;
        /* content: '\e935'; */
        bottom: -27px;
        user-select: none;
        pointer-events: none;
        overflow: hidden;
        left: -27px;
        color: #181818;
      }

      /* &:before {
        bottom: -0.1rem;
        content: '';
        height: 2rem;
        position: absolute;
        border-bottom-right-radius: 1rem;
        border-left: 1rem solid #181818;
        left: -0.15rem;
        transform: translate(4px, -0.2rem);
      }

      &::after {
        bottom: -0.1rem;
        content: '';
        height: 1.2rem;
        position: absolute;
        background-color: #fff;
        border-radius: 0 0.3rem 0.5rem 0;
        left: 25px;
        transform: translate(-29px, -2px);
        width: 10px;
      } */
    }

    &-avatar {
      background-color: #0e0e0e;
      will-change: opacity;
      overflow: hidden;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      pointer-events: none;
      position: absolute;
      left: -0px;
      bottom: 2px;
      width: 36px;
      height: 36px;
      margin: 0;
      background: 50% 50% / cover no-repeat;
      border-radius: 18px;

      &::before {
        content: '';
        position: absolute;
        z-index: 1;
        top: -1px;
        left: -1px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        user-select: none;
        pointer-events: none;
        border: 2px solid rgba(0, 0, 0, 0.025);
        border-radius: calc(50% + 1px);
      }
    }

    &-info {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      padding-left: 50px;
      overflow: hidden;
      position: relative;
      height: 24px;
      padding: 0 10px;
      font-size: 0.64em;
      line-height: 24px;
      cursor: default;

      .ant-btn {
        border: 0;
        padding: 0;
        color: transparent;
        background-color: transparent;
        box-shadow: none;
        outline: 0;
        border-radius: 0;
        height: 12px;
        display: flex;
        align-items: center;
        transform: rotate(90deg);
        padding: 0 10px;

        > span {
          > svg {
            width: 1.54em;
            height: 1.54em;
            color: #000;
            display: block;
            transition: color 0.2s, transform 0.2s;
            cursor: pointer;

            &:hover {
              color: #7bcc7b !important;
            }
          }
        }
      }

      > div {
        max-width: 140px;
        overflow: hidden;
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 10px;
        text-overflow: ellipsis;
        white-space: nowrap;

        &::after {
          left: 0;
          content: '';
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          pointer-events: none;
          position: absolute;
          top: 50%;
          width: 0;
          height: 8px;
          border-right-width: 1px;
          border-right-style: solid;
          margin-top: -4px;
          opacity: 0.2;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .box-wrapper {
    }
  }

  @media (max-width: 750px) {
    .box-wrapper {
      font-size: 22px;
    }
  }
`;
