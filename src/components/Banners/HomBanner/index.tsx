// base
import React, { useEffect, useMemo, useState } from 'react';

// styles
import { StyledHomBanner } from './style';

// components
import { BasicSwiper, BlurImage, TypingText } from 'components';

// modules
import { MainBannerProps, kdongProfileState } from 'modules';

// hooks
import { useMedia } from 'hooks';

// libraries
import { SwiperSlide } from 'swiper/react';
import { useRecoilValue } from 'recoil';

export const HomBanner = () => {
  const [isBanner, setIsBanner] = useState<MainBannerProps>();

  const isProfile = useRecoilValue(kdongProfileState);

  const { isMobile } = useMedia();

  const bannerTitle = useMemo(() => {
    if (!isBanner) return;

    const result: Array<string | number> = [];

    isBanner.titleLists.map(({ title, playSpeed }) => {
      const arr: Array<string | number> = [];

      arr.push(title);
      arr.push(playSpeed * 1000);

      result.push(...arr);
    });

    return result;
  }, [isBanner]);

  useEffect(() => {
    if (!isProfile) return;

    setIsBanner(isProfile.mainBanner);
  }, [isProfile]);

  return (
    <StyledHomBanner ismobile={isMobile}>
      <div className="banner-wrapper">
        <div className="banner-wrapper-text">
          <p>안녕하세요.</p>
          {bannerTitle && (
            <TypingText
              sequence={bannerTitle}
              wrapper="p"
              speed={50}
              repeat={Infinity}
            />
          )}
          <p>
            밥값하는 개발자 <strong>KDONG</strong> 입니다.
          </p>
        </div>
        {isBanner && (
          <BasicSwiper
            className="banner-wrapper-swiper"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={
              isBanner.autoPlay
                ? {
                    delay: isBanner.playSpeed * 1000,
                    disableOnInteraction: false
                  }
                : false
            }
          >
            {isBanner?.fileList.map(({ url }, idx) => (
              <SwiperSlide key={idx}>
                <div className="grayscale" />
                <BlurImage
                  src={url}
                  alt="배너이미지"
                  style={{ objectPosition: 'center 70%' }}
                />
              </SwiperSlide>
            ))}
          </BasicSwiper>
        )}
      </div>
    </StyledHomBanner>
  );
};
