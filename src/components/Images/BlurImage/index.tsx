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
      fill
      style={{ objectFit: 'cover' }}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      quality={100}
      {...props}
    />
  );
};
