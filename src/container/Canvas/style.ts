import styled from 'styled-components';

export const StyledCanvas = styled.main`
  .canvas-wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    &-contents {
      display: grid;
      flex-wrap: wrap;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      height: 100%;
      padding-top: 100px;

      > div {
        transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
      }
    }
  }
`;
