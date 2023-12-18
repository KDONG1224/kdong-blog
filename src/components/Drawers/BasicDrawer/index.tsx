// base
import React from 'react';

// styles
import { StyledBasicDrawer } from './style';

// libraries
import type { DrawerProps } from 'antd';

interface BasicDrawerProps extends DrawerProps {
  noPadding?: boolean;
  children: React.ReactNode;
}

export const BasicDrawer: React.FC<BasicDrawerProps> = ({
  noPadding = false,
  children,
  ...props
}) => {
  return (
    <StyledBasicDrawer nopadding={noPadding ? 'true' : 'false'} {...props}>
      {children}
    </StyledBasicDrawer>
  );
};
