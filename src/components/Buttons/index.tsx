import { ButtonBase } from '@mui/material';
import React from 'react';

interface ButtonProps {
  className: 'primary' | 'dddd' | 'dddd';
}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <div>
      <button className={className} {...props}></button>
      <ButtonBase />
    </div>
  );
};
