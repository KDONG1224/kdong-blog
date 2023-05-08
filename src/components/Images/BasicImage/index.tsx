// base
import React from 'react';
import { ImageProps } from 'next/image';

// style
import { StyledBasicImage } from './style';

export const BasicImage: React.FC<ImageProps> = ({ ...props }) => {
  return <StyledBasicImage quality={100} fill sizes="100vw" {...props} />;
};
