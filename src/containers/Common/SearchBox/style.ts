import styled from 'styled-components';

interface StyledSearchBoxProps {
  $ismobile: boolean;
}

export const StyledSearchBox = styled.div<StyledSearchBoxProps>`
  padding-top: ${({ $ismobile }) => ($ismobile ? '50px' : '100px')};
  padding-bottom: 50px;

  .search-wrapper {
    width: 100%;

    &-top {
      padding: ${({ $ismobile }) => ($ismobile ? '0 0px 20px' : '0 20px 20px')};
      margin-left: -10px;
      margin-right: -10px;
      width: calc(100% + 20px);
      margin-bottom: 40px;

      > h1 {
        font-size: 40px;
        font-family: Pretendard-Bold;
        text-align: center;
      }
    }

    &-select {
      ${({ $ismobile }) =>
        $ismobile
          ? `
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
              place-items: center;

              > div {
                padding: 0 10px;
                width: 100% !important;
              }
             
              `
          : `
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 20px;
              flex: 1;
          `}

      padding: 0 20px;

      > div {
        width: calc(25% - 10px);

        > .ant-select {
          width: 100%;
        }
      }
    }
  }
`;
