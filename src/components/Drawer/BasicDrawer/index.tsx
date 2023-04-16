// base
import React from 'react';

// style
import { StyledBasicDrawer } from './style';

// libraries
import { Box, DrawerProps } from '@mui/material';

interface BasicDrawerProps extends DrawerProps {
  width?: number | string;
  noPadding?: boolean;
  children: React.ReactNode;
}

export const BasicDrawer: React.FC<BasicDrawerProps> = ({
  width,
  noPadding = false,
  children,
  ...props
}) => {
  return (
    <StyledBasicDrawer nopadding={noPadding ? 'true' : 'false'} {...props}>
      <Box sx={{ width: width || 350 }}>{children}</Box>
    </StyledBasicDrawer>
  );
};
