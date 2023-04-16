import styled from '@emotion/styled';

export const StyledMainBanner = styled.div`
  margin-top: -50px;

  .banner-wrapper {
    position: relative;

    &-text {
      position: absolute;
      top: 62%;
      left: 2rem;
      transform: translateY(-50%);
      font-size: 3rem;
      z-index: 99;
      font-family: 'theJamsil-300';
      line-height: 1.25;

      > p {
        color: #fff !important;
        &:nth-of-type(2) {
          margin: 1rem 0;
        }
      }
    }

    &-img {
      width: 100%;
      height: 60rem;
      position: relative;
      margin-bottom: 4rem;
    }
  }
`;
