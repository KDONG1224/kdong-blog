import styled from '@emotion/styled';

interface StyledTistoryCardProps {
  isDarkMode: string;
}

export const StyledTistoryCard = styled.div<StyledTistoryCardProps>`
  padding: 0 4rem 14rem;
  font-size: 3rem;

  .tistory-wrapper {
    position: relative;

    &-thumb {
      width: 100%;
      height: 35rem;
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      background-color: #ddd;
      backdrop-filter: blur(10px);
    }

    &-contents {
      margin-top: 2rem;
      height: 18rem;
      overflow: hidden;
      font-family: 'theJamsil-300';

      > h2 {
        font-size: 3.8rem;
        color: ${({ isDarkMode }) =>
          isDarkMode === 'dark' ? '#fff' : '#232326'};
        margin-bottom: 1rem;
      }

      > p {
        line-height: 1.6;
        position: relative;

        &:after {
          position: absolute;
          content: '';
          top: 100px;
          right: 0;
          width: 50%;
          height: 4.2rem;
          background: ${({ isDarkMode }) =>
            isDarkMode === 'dark'
              ? 'linear-gradient(90deg, rgba(0, 0, 0, 0), #232326 75%);'
              : 'linear-gradient(90deg, rgba(0, 0, 0, 0), #fff 75%);'};
        }
      }
    }

    &-date {
      position: absolute;
      bottom: 220px;
      right: 20px;
      z-index: 2;
      /* color: ${({ isDarkMode }) =>
        isDarkMode === 'dark' ? '#fff' : '#232326'}; */
      color: #fff;
    }
  }
`;
