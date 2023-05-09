import styled from '@emotion/styled';

export const StyledAlgorithm = styled.div`
  padding: 60px 40px 0;

  .algo-wrapper {
    &-header {
      width: 100%;
      height: 160px;
      border-bottom: 1px solid blue;

      &-title {
        position: relative;

        > h2 {
          font-size: 4.5rem;
          text-align: center;
          letter-spacing: 1.1rem;
        }

        > span {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.2rem;
          padding: 1rem 1.5rem;
          border-radius: 40rem;
          border: 1px solid blue;
        }
      }

      &-write {
        margin-top: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        font-size: 1.3rem;

        span {
          display: inline-block;
          border: 1px solid #000;
          padding: 1.6rem 1rem;

          &.head {
            padding: 1.6rem;
          }

          &:nth-of-type(even) {
            border-left: none;
          }
        }

        &-number {
          &-box {
            &:nth-of-type(odd) {
              border-left: none;
            }
          }
        }
      }
    }

    &-contents {
      margin: 4rem auto 0;
      padding: 4rem;
      width: 100%;
      height: 100%;
      border: 1px solid #000;
      font-size: 3rem;

      &-title {
        > h2 {
          margin-bottom: 1.4rem;
        }

        > p {
          font-size: 2rem;
          line-height: 1.6;
        }
      }
    }
  }
`;
