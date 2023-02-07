import styled from 'styled-components';

interface StyledInstargramProps {
  isDarkMode: boolean;
}

export const StyledInstargram = styled.div<StyledInstargramProps>`
  position: absolute;
  bottom: 10px;
  right: 18px;
  z-index: 10;
  width: 100%;
  height: 100%;
  max-width: 400px;
  min-width: 400px;
  max-height: 600px;
  min-height: 600px;
  border-radius: 20px;
  overflow: hidden;
  border: ${({ isDarkMode }) =>
    isDarkMode ? '1px solid #fff' : '1px solid #000'};

  .insta-wrapper {
    width: 100%;
    height: 100%;
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? '#0E0E0E' : '#f0eeeb'};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};

    &-top {
      position: relative;
      width: 100%;
      height: 40px;
      border-bottom: ${({ isDarkMode }) =>
        isDarkMode ? '1px solid #fff' : '1px solid rgba(0, 0, 0, 0.315)'};
      display: flex;
      align-items: center;
      justify-content: center;

      &-header {
        font-size: 0.8rem;
        margin-top: 5px;
      }

      &-dot {
        width: 10px;
        height: 10px;
        background: #f2a948;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 32px;
        top: 50%;
        transform: translateY(-50%);
        cursor: none;
        pointer-events: none;

        &::before {
          content: '';
          width: 10px;
          height: 10px;
          background: #e07865;
          border-radius: 50%;
          position: absolute;
          left: -15px;
          top: 0;
          cursor: pointer !important;
          pointer-events: all;
        }

        &::after {
          content: '';
          width: 10px;
          height: 10px;
          background: #f4bb67;
          position: absolute;
          border-radius: 50%;
          right: -15px;
          top: 0;
          cursor: none;
          pointer-events: none;
        }
      }
    }

    &-body {
      height: 100%;
      padding: 36px 26px 50px;
      overflow-y: scroll;

      &-box {
        &-top {
          /* width: 380px; */

          > h2 {
            font-size: 1.4rem;
            line-height: 1.4;
            margin-bottom: 50px;
          }

          > div {
            margin-bottom: 30px;
          }
        }

        &-middle {
          margin-top: 50px;

          > h2 {
            font-size: 1.4rem;
            line-height: 1.4;
            border-bottom: 1px solid #000;
            margin-bottom: 50px;
          }

          &-top {
            &-header {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 20px;

              &-text {
                > p {
                  font-size: 0.7rem;
                  margin-bottom: 0;

                  &:first-child {
                    margin-bottom: 3px;
                  }
                }
              }
            }

            &-content {
              &-img {
                border-radius: 0 36px 0px 36px;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
`;
