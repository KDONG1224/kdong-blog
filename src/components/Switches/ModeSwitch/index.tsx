// base
import React from 'react';

// style
import { StyledModeSwitch } from './style';

// libraries
import { SwitchProps } from '@mui/material';

interface ModeSwitchProps extends SwitchProps {}

export const ModeSwitch: React.FC<ModeSwitchProps> = ({ ...props }) => {
  return <StyledModeSwitch {...props} />;
};
