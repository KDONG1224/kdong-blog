// base
import React from 'react';
import { ImageProps } from 'next/image';

// style
import { StyledBlurImage } from './style';

interface BlurImageProps extends ImageProps {
  round?: boolean;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  round = false,
  ...props
}) => {
  return (
    <StyledBlurImage
      style={round ? { borderRadius: '50%' } : {}}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      // blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      {...props}
    />
  );
};
