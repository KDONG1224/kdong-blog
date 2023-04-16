import styled from '@emotion/styled';

interface StyledAboutProps {
  isDarkMode: string;
}

export const StyledAbout = styled.div<StyledAboutProps>`
  .about-wrapper {
    padding: 0 6rem;

    > div {
      margin-top: 10rem;
      width: 100%;
    }

    &-top {
      > p {
        font-size: 2.8rem;
        line-height: 1.5;
        font-family: theJamsil-200;
      }
    }

    &-contents {
      margin-bottom: 10rem;

      &:last-child {
        margin-bottom: 0;
      }

      &-timestamp {
        width: 100%;
        margin: 0 auto;
        /* display: flex;
        align-items: center;
        justify-content: center; */
        margin-bottom: 2rem;
        position: relative;
        text-align: left;
        border-left: ${({ isDarkMode }) =>
          isDarkMode === 'dark' ? '4px solid #fff' : '4px solid #232326'};
        padding: 3rem 0;
        padding-left: 5rem;
        font-size: 3rem;
        margin-bottom: 2.2rem;
        font-family: theJamsil-300;

        &:before {
          content: '';
          position: absolute;
          left: -2px;
          top: 40%;
          transform: translateX(-50%) scale(0.7);
          width: 25px;
          height: 25px;
          align-self: center;
          border-radius: 50%;
          background-color: ${({ isDarkMode }) =>
            isDarkMode === 'dark' ? '#232326' : '#fff'};
          z-index: 5;
        }

        &::after {
          content: '';
          position: absolute;
          left: -2px;
          top: 40%;
          transform: translateX(-50%);
          width: 25px;
          height: 25px;
          align-self: center;
          border-radius: 50%;
          background-color: ${({ isDarkMode }) =>
            isDarkMode === 'dark' ? '#fff' : '#232326'};
          z-index: 4;
        }

        &-left {
          font-size: 2.6rem;
        }

        &-center {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;

          > span {
            display: inline-block;
            cursor: pointer;

            .MuiSvgIcon-root {
              margin-left: 1rem;
              transform: scale(2.2);
            }
          }
        }
      }

      &-project {
        width: 100%;
        height: 100%;

        &-box {
          width: 100%;
          height: 100%;

          &-img {
            width: 100%;
            height: 400px;
            position: relative;
            cursor: pointer;
            border-radius: 10px;
            overflow: hidden;
            border: ${({ isDarkMode }) =>
              isDarkMode === 'dark'
                ? '1px solid #bcbaba'
                : '1px solid #232326'};
          }

          &-desc {
            padding: 3rem 0;

            > h3 {
              font-size: 3.2rem;
              margin-bottom: 1.6rem;

              &.youtube {
                font-size: 1.8rem;
                line-height: 1.25;
                font-family: theJamsil-300;
              }
            }

            > p {
              font-size: 1.8rem;
              line-height: 1.25;
              margin-bottom: 1.6rem;
              font-family: theJamsil-300;
            }

            > span {
              font-size: 1.2rem;
              margin-right: 1rem;
            }

            &-lists {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 1rem;
              font-family: theJamsil-300;

              &.position {
                justify-content: flex-start;
                gap: 1rem;
                margin: 1rem 0;

                > span {
                  background-color: beige;
                  color: #232326;
                  padding: 0.4rem 0.6rem;
                  cursor: default;

                  &.frontend {
                    background-color: #f7b500;
                  }

                  &.backend {
                    background-color: red;
                  }
                }
              }

              > span {
                font-size: 1.2rem;
                background-color: beige;
                color: #232326;
                padding: 1rem 1.4rem;
                cursor: pointer;

                &.noLink {
                  cursor: default;
                }
              }
            }
          }
        }
      }
    }

    h2 {
      width: fit-content;
      margin: 0 auto;
      font-family: theJamsil-600;
      font-size: 5em;
      text-align: center;
      padding: 0 3rem;
      padding-bottom: 2rem;
      border-bottom: ${({ isDarkMode }) =>
        isDarkMode === 'dark' ? '5px solid #fff' : '5px solid #232326'};
      margin-bottom: 6rem;
    }
  }
`;
