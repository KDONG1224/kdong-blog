// base
import React, { useId } from 'react';

// styles
import { StyledHomBanner } from './style';

// components
import { BasicSwiper, BlurImage, TypingText } from 'components';

// consts
import { aboutImages } from 'consts';

// hooks
import { useMedia } from 'hooks';

// libraries
import { SwiperSlide } from 'swiper/react';

export const HomBanner = () => {
  const id = useId();
  const { isMobile } = useMedia();

  const bannerImage = [
    aboutImages.ABOUT_IMG_01,
    'https://kdong-portfolio.s3.amazonaws.com/guestbook/1670325828599_IMG_6709.JPG',
    aboutImages.ABOUT_IMG_02,
    'https://kdong-portfolio.s3.amazonaws.com/guestbook/1670325774131_IMG_6875.jpeg',
    aboutImages.ABOUT_IMG_03
  ];
  return (
    <StyledHomBanner ismobile={isMobile}>
      <div className="banner-wrapper">
        <div className="banner-wrapper-text">
          <p>안녕하세요.</p>
          <TypingText
            sequence={[
              '동료들과 협업하는',
              2000,
              '클린 코드를 지향하는',
              2000,
              '비지니스 성장에 기여하는',
              2000,
              '회사와 같이 성장하는',
              2000
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
          />
          <p>
            밥값하는 개발자 <strong>KDONG</strong> 입니다.
          </p>
        </div>
        <BasicSwiper
          className="banner-wrapper-swiper"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
        >
          {bannerImage.map((image) => (
            <SwiperSlide key={id}>
              <div className="grayscale" />
              <BlurImage
                src={image}
                alt="배너이미지"
                style={{ objectPosition: 'center 70%' }}
              />
            </SwiperSlide>
          ))}
        </BasicSwiper>
      </div>
    </StyledHomBanner>
  );
};
