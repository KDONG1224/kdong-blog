import styled from 'styled-components';

interface StyledGuestbookProps {
  ismobile: boolean;
}

export const StyledGuestbook = styled.div<StyledGuestbookProps>`
  .guest-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 36px 100px;

    &-header {
      padding-bottom: 50px;

      > h2 {
        font-size: 2rem;
        border-bottom: 1px solid #000;
      }
    }

    &-content {
      display: grid;
      flex-wrap: wrap;
      grid-template-columns: ${({ ismobile }) =>
        ismobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
      gap: 40px;
      height: 100%;
      /* aspect-ratio: auto 1 / 1;  */
    }
  }
`;
