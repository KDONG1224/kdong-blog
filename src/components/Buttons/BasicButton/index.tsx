// base
import React from 'react';

// styles
import { StyledBasicButton } from './style';

// libraries
import { ButtonProps } from 'antd';

interface BasicButtonProps extends ButtonProps {
  btnText: string;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
  btnText,
  ...props
}) => {
  return (
    <StyledBasicButton type="primary" size="large" {...props}>
      {btnText}
    </StyledBasicButton>
  );
};
