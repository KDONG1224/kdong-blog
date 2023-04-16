// consts
import { gifIcons } from 'consts';

// libraries
import styled from '@emotion/styled';

export const StyledMainLayout = styled.div`
  position: relative;

  .kdong-icon {
    cursor: pointer;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 10rem;
    height: 10rem;
    z-index: 10000;
    background: url(${gifIcons.KDONG_GIF_ICON}) center center / contain
      no-repeat;
  }
`;
