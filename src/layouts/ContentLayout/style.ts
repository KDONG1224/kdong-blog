import styled from '@emotion/styled';

export const StyledContentLayout = styled.div`
  .content-wrapper {
    &-head {
      width: 100%;
      height: 584px;
      margin-bottom: 100px;
      display: flex;
      align-items: center;

      > div {
        width: 50%;
        height: 100%;
      }

      &-left {
        position: relative;
        padding: 100px 40px;

        &-top {
          padding-bottom: 60px;
          border-bottom: 2px solid #000;

          > h2 {
            font-size: 50px;
            font-weight: bold;
            margin-bottom: 60px;
            word-break: break-all;
            white-space: break-spaces !important;
          }

          > span {
            font-size: 22px;
            margin-right: 10px;
            color: #989898;
          }
        }

        &-bottom {
          position: absolute;
          left: 40px;
          bottom: 0px;
          display: flex;
          align-items: center;
          gap: 10px;

          > p {
            font-size: 18px;
            line-height: 1.5;
          }
        }
      }

      &-right {
        &-swiper {
          height: 100%;

          .swiper-pagination {
            display: none;
          }
        }
      }
    }

    &-children {
      width: 100%;
      padding-bottom: 100px;
    }
  }
`;
