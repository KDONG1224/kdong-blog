// base
import React from 'react';

// style
import { StyledBasicSwiper } from './style';

// hooks
import { useMedia } from 'hooks';

// libraries;
import { A11y, Autoplay, Pagination } from 'swiper';
import { SwiperProps } from 'swiper/react';

interface BasicSwiperProps extends SwiperProps {
  children?: React.ReactNode;
  className?: string;
}

export const BasicSwiper: React.FC<BasicSwiperProps> = ({
  children,
  className,
  ...props
}) => {
  const { isMobile } = useMedia();

  return (
    <StyledBasicSwiper
      className={className}
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={isMobile ? 40 : 20}
      slidesPerView={'auto'}
      pagination={{ clickable: false }}
      loop={true}
      {...props}
    >
      {children}
    </StyledBasicSwiper>
  );
};
