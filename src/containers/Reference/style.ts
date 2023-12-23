import styled from 'styled-components';

export const StyledReference = styled.div`
  .refer-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &-box {
      width: calc(25% - 10px);
      margin: 5px;
      position: relative;
      height: 400px;
      cursor: pointer;

      &-inner {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

        &-title {
          display: block;
          overflow: hidden;
          line-height: 1.4;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          color: #fff;
          z-index: 10;
          text-align: center;
          width: 90%;
          font-size: 2.2rem;
          word-break: keep-all;
          transition: opacity 0.3s;
        }

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s;
        }

        &:hover {
          position: relative;

          > div {
            opacity: 1;
          }

          &::before {
            opacity: 1;
          }
        }
      }
    }

    &-empty {
      width: 100%;
      margin-top: 80px;
      &-text {
        font-size: 30px;
        font-family: Pretendard-Medium;
        text-align: center;
      }
    }

    &-bottom {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 100px;

      .ant-btn {
        width: 30%;
        height: 50px;
        font-size: 2.2rem;
        border: 4px solid #000;
        text-align: center;
        display: grid;
        place-items: center;
        padding: 0.2rem 0.6rem;
        background-color: #fff;
        border-radius: 0%;

        &:hover {
          color: #000;
          border: 4px solid #000;
        }
      }
    }
  }

  @media (max-width: 1300px) {
    .refer-wrapper-box {
      width: calc(33% - 10px);
    }
  }

  @media (max-width: 900px) {
    .refer-wrapper-box {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 550px) {
    .refer-wrapper-box {
      width: calc(50% - 10px);
      height: 250px;
    }
  }

  @media (max-width: 450px) {
    .refer-wrapper-box {
      width: calc(50% - 10px);
      height: 180px;
    }
  }
`;
