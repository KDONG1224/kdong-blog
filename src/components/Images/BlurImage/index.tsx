// base
import { ImageProps } from 'next/image';
import React from 'react';

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
      style={round ? { borderRadius: 100 } : {}}
      placeholder="blur"
      // blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      {...props}
    />
  );
};
