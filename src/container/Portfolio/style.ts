import styled from 'styled-components';

export const StyledPortfolio = styled.div`
  #header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10000;
    border-bottom: 1px solid #2e382848;
    backdrop-filter: blur(10px);

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        > a {
          font-family: 'Abel';
          padding: 20px;
          display: inline-block;
          text-transform: uppercase;
          color: #202020;
        }
      }
    }
  }

  #footer {
    text-align: center;
    font-family: 'Abel';
    padding: 10px;

    a {
      color: #000;
    }
  }

  #section1 {
    background: #edf0ed;
    padding-top: 80px;
  }

  .text-effect1 {
    text-align: left;
    color: #2e3828;
    font-size: 19vw;
    line-height: 0.81;
    font-family: 'Saint Monica Regular';
    padding: 0 0 1vw 1vw;
    margin-top: 1vw;
    text-transform: uppercase;
    border-bottom: 1px solid #2e382848;
  }
  .text-effect2 {
    height: 50vh;
    border-bottom: 1px solid #2e382848;
    display: flex;

    .left {
      width: 30%;
      border-right: 1px solid #2e382848;
    }

    .right {
      width: 70%;
    }

    span {
      color: #2e3828;
      padding: 10px;
      font-family: 'Abel';
      display: inline-block;
    }
  }

  .text-effect3 {
    height: 50vh;
    border-bottom: 1px solid #2e382848;
    display: flex;

    .left {
      width: 70%;
      border-right: 1px solid #2e382848;
    }

    .right {
      width: 30%;
    }

    span {
      color: #2e3828;
      padding: 10px;
      font-family: 'Abel';
      display: inline-block;
    }
  }

  #section2 {
    background: #2e3828;

    h2 {
      color: #fff;
      font-size: 11vmax;
      line-height: 1;
      font-family: 'Saint Monica Regular';
      font-weight: normal;
      text-transform: capitalize;
      height: 30vh;
      padding: 5vh;
    }
  }

  .hor-wrap {
    display: flex;
    flex-wrap: wrap;
    width: 420vw;
    height: 90vh;

    > div {
      width: 80vw;
      height: 90%;
      border: 1px solid #fff;
      margin-right: 1vw;
      margin-left: 1vw;

      > span {
        padding: 10px;
        font-family: 'Abel';
        color: #fff;
        display: inline-block;
      }
    }
  }
`;
