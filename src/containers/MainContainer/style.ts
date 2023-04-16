import styled from '@emotion/styled';

interface StyledMainContainerProps {
  isDarkMode: string;
}

export const StyledMainContainer = styled.div<StyledMainContainerProps>`
  .main-wrapper {
    position: relative;

    &-top {
      position: relative;
    }

    > p {
      font-size: 2.4rem;
      color: #bbb;
      text-align: center;
      margin: 6rem 0 5rem;
    }

    &-bottom {
      width: 100%;
      padding-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      > button {
        font-size: 1.5rem;
        color: ${({ isDarkMode }) =>
          isDarkMode === 'dark' ? '#fff' : '#232326'};
        border: ${({ isDarkMode }) =>
          isDarkMode === 'dark' ? '1px solid #fff' : '1px solid #232326'};
        padding: 1rem 10rem;
      }
    }
  }
`;
