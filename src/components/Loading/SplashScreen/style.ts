import styled from '@emotion/styled';

export const StyledSplashScreen = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
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

  .splash-wrapper {
    margin-top: -100px;
  }

  .title {
    text-align: center;
    font-family: UnioneForceStencil, Pretendard-Bold;
    font-size: 50px;
    color: #fff;
  }
`;
