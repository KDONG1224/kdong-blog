import { instaImages } from 'consts';
import styled from 'styled-components';

interface StyledGuestbookCardProps {
  ismobile: boolean;
  bgColor: string;
}

export const StyledGuestbookCard = styled.div<StyledGuestbookCardProps>`
  .card-wrapper {
    width: 100%;
    background: ${({ bgColor }) =>
      bgColor
        ? `url(${instaImages.NOISE_BG}) ${bgColor} center top / cover no-repeat;`
        : '#fff'};
    backdrop-filter: blur(50px);
    border-radius: 16px;
    margin-bottom: 40px;
    overflow: hidden;

    &-content {
      padding: 20px;

      > h2 {
        font-size: 1.2rem;
        margin-bottom: 0;
      }

      > p {
        font-size: 0.7rem;
        margin-top: 4px;
        padding-bottom: 10px;
        border-bottom: 1px solid #000;
        margin-bottom: 20px;
      }

      &-box {
        &-text {
          &-desc {
            font-size: 1.3rem;
            margin-bottom: 20px;
          }
          &-img {
            border-radius: 0 36px 0px 36px;
            overflow: hidden;
            > img {
              width: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;