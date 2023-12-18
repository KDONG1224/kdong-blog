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
      height: 350px;
      cursor: pointer;
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
      width: calc(100% - 10px);
    }
  }
`;
