// base
import React from 'react';
import { ImageProps } from 'next/image';

// style
import { StyledBlurImage } from './style';

interface BlurImageProps extends ImageProps {}

export const BlurImage: React.FC<BlurImageProps> = ({ ...props }) => {
  return (
    <StyledBlurImage
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      {...props}
    />
  );
};
