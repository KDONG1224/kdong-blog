import styled from 'styled-components';

interface StyledLogoBoxProps {
  isDarkMode: boolean;
}

export const StyledLogoBox = styled.div<StyledLogoBoxProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .logo-wrapper {
    width: 100%;

    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > p {
      font-size: 1.2rem;
      text-align: center;
      margin-top: 10px;
      color: ${({ isDarkMode }) => (isDarkMode ? `#ED8952` : '#000')};

      &.collapsed {
        margin-top: 12px;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`;
