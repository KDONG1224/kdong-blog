// base
import React from 'react';

interface IconBoxProps {
  className: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ className }) => {
  return <div className={className} />;
};
