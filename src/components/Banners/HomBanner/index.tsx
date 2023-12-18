// base
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// styles
import { StyledHomBanner } from './style';

// components
import { BasicSwiper, BlurImage, TypingText } from 'components';

// modules
import { BannerListsProps, kdongProfileState } from 'modules';

// hooks
import { useMedia } from 'hooks';

// libraries
import { useRecoilValue } from 'recoil';
import { SwiperSlide } from 'swiper/react';

export const HomBanner = () => {
  const [bannerLists, setBannerLists] = useState<BannerListsProps>();

  const isProfile = useRecoilValue(kdongProfileState);

  const { isMobile } = useMedia();

  const bannerTitle = useMemo(() => {
    if (!bannerLists) return;

    const result: Array<string | number> = [];

    bannerLists.bannerTitles.map(({ title, playSpeed }) => {
      const arr: Array<string | number> = [];

      arr.push(title);
      arr.push(playSpeed * 1000);

      result.push(...arr);
    });

    return result;
  }, [bannerLists]);

  const initValues = useCallback(() => {
    if (!isProfile || !isProfile.result) return;

    const { bannerLists } = isProfile.result;

    setBannerLists(bannerLists);
  }, [isProfile]);

  useEffect(() => {
    initValues();
  }, [initValues]);

  return (
    <StyledHomBanner $ismobile={isMobile}>
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
        {bannerLists && bannerLists.bannerImages.length > 0 && (
          <BasicSwiper
            className="banner-wrapper-swiper"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={
              bannerLists.autoPlay
                ? {
                    delay: bannerLists.playSpeed * 1000,
                    disableOnInteraction: false
                  }
                : false
            }
          >
            {bannerLists.bannerImages.map(({ id, location }) => (
              <SwiperSlide key={id}>
                <div className="grayscale" />
                <BlurImage
                  src={location}
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
