import styled from 'styled-components';

interface StyledAboutProps {
  ismobile: string;
  isDarkMode: boolean;
}

export const StyledAbout = styled.div<StyledAboutProps>`
  font-family: 'Chosunilbo_myungjo';
  padding: 40px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#f0eeeb')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#f0eeeb' : '#333')};

  .about-wrapper {
    &-title {
      padding: ${({ ismobile }) =>
        ismobile === 'true' ? '8rem 0 12rem' : '8rem 0 18rem'};

      h2 {
        font-family: 'Saol';
        font-size: ${({ ismobile }) =>
          ismobile === 'true' ? '6rem;' : '145px;'};
        display: block;
        padding-top: 10px;
        font-weight: 400;
        line-height: 0.8;
        color: ${({ isDarkMode }) => (isDarkMode ? '#f0eeeb' : '#333')};
      }
    }

    &-body {
      &-top {
        padding-bottom: 250px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      &-middle {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-bottom: 280px;
        color: ${({ isDarkMode }) => (isDarkMode ? '#f0eeeb' : '#333')};

        &-img {
          flex: ${({ ismobile }) =>
            ismobile === 'true' ? '0 0 54%;' : '0 0 64%;'};
        }

        &-desc {
          flex: ${({ ismobile }) =>
            ismobile === 'true' ? '0 0 40%;' : '0 0 30%;'};
        }
      }

      &-bottom {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-bottom: 250px;

        &-img {
          flex: 0 0 54%;
        }

        &-desc {
          flex: 0 0 40%;
        }
      }
    }

    .sub-title {
      font-size: 30px;
      line-height: ${({ ismobile }) => (ismobile === 'true' ? '1.5' : '1')};
      margin-bottom: 15px;
      margin-top: 2em;

      &.noMargin {
        margin-top: 0;
      }
    }
    .sub-desc {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`;
