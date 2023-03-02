import styled from 'styled-components';

export const StyledImageCard = styled.div`
  /* padding-top: 100px; */
  cursor: pointer;
  box-shadow: 0 20px 20px rgb(0 0 0 / 8%);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    transform: translate(0, -20px);
  }
  .card-wrapper {
    width: 100%;
    height: 100%;

    &-top {
      position: relative;
      width: 100%;
      height: 220px;
    }

    &-body {
      padding: 10px;
      background: #fff;

      &-title {
        margin-top: 20px;
        padding: 0 20px 20px;
        color: #3d3d3d;
        border-bottom: 1px solid #e9ebee;
        font-size: 20px;
        line-height: 1.2;
      }

      &-desc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #90949c;
        font-size: 12px;
        margin: 0px 20px 0;
      }
    }
  }
`;
