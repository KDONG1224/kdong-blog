// libraries
import styled from '@emotion/styled';
import { Drawer } from '@mui/material';

interface StyledBasicDrawerProps {
  nopadding: 'true' | 'false';
}

export const StyledBasicDrawer = styled(Drawer)<StyledBasicDrawerProps>`
  font-size: 3rem;

  & .MuiDrawer-paper {
    height: 100%;
    font-size: 3.6rem;
    padding-top: ${({ nopadding }) => (nopadding === 'true' ? 0 : '120px')};
  }
`;
