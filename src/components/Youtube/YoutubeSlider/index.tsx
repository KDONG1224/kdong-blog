// base
import React from 'react';

// style
import { StyledYoutubeSlider } from './style';

// hooks
import { useMedia } from 'hooks';

// modules
import { darkModeState } from 'modules';

// consts
import { youtubeKeyLists, youtubeOptions } from 'consts';

// libraries
import { useRecoilValue } from 'recoil';
import YouTube from 'react-youtube';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar } from 'swiper';

interface YoutubeSliderProps extends SwiperProps {}

export const YoutubeSlider: React.FC<YoutubeSliderProps> = ({ ...props }) => {
  const { isMobile } = useMedia();
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <StyledYoutubeSlider
      ismobile={isMobile ? 'true' : 'false'}
      isDarkMode={isDarkMode}
    >
      <Swiper
        modules={[Scrollbar, A11y, Navigation]}
        slidesPerView={youtubeKeyLists.length - 5}
        spaceBetween={50}
        scrollbar={{ draggable: true }}
        draggable={true}
        navigation={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          750: {
            slidesPerView: 1
          }
        }}
        {...props}
      >
        {youtubeKeyLists.map(({ youtubeId }) => (
          <div key={youtubeId} style={{ width: `${youtubeOptions.width}px` }}>
            <SwiperSlide>
              <div className="youtube-content-box">
                <YouTube
                  videoId={youtubeId}
                  opts={youtubeOptions}
                  onEnd={(e) => {
                    e.target.stopVideo();
                  }}
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </StyledYoutubeSlider>
  );
};
