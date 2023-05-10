import styled from '@emotion/styled';

export const StyledContentLayout = styled.div`
  .content-wrapper {
    &-head {
      width: 100%;
      height: 584px;
      background-color: beige;
      margin-bottom: 40px;
      display: flex;
      align-items: center;

      > div {
        width: 50%;
        height: 100%;
      }

      &-left {
        background-color: aqua;
      }

      &-right {
        background-color: violet;
      }
    }

    &-children {
      width: 100%;
      height: 4000px;
      background-color: aliceblue;
    }
  }
`;
