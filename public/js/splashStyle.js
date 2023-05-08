/* eslint-disable import/no-anonymous-default-export */

export default `
  body {
    diplay: block;
  }

  #globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

  .splash-screen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: UnioneForceStencil, Pretendard-Bold; 
      background: repeating-linear-gradient(
        0deg,
        hsla(103, 11%, 32%, 0.09) 0px,
        hsla(103, 11%, 32%, 0.09) 1px,
        transparent 1px,
        transparent 11px
      ),
      repeating-linear-gradient(
        90deg,
        hsla(103, 11%, 32%, 0.09) 0px,
        hsla(103, 11%, 32%, 0.09) 1px,
        transparent 1px,
        transparent 11px
      ),
      linear-gradient(90deg, hsl(317, 13%, 6%), hsl(317, 13%, 6%));
  }
`;
