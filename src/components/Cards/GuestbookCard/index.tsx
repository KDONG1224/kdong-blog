// base
import React from 'react';

// styles
import { StyledGuestbookCard } from './style';

// components
import { BasicSwiper, BlurImage } from 'components';

// modules
import { GuestbookListProps } from 'modules/guestbook';

// hooks
import { useMedia } from 'hooks';

// libraries
import dayjs from 'dayjs';
import { SwiperSlide } from 'swiper/react';

interface GuestbookCardProps {
  data: GuestbookListProps;
}

export const GuestbookCard: React.FC<GuestbookCardProps> = ({ data }) => {
  const { isMobile } = useMedia();

  return (
    <StyledGuestbookCard $ismobile={isMobile}>
      <div className="book-wrapper">
        <div className="book-wrapper-top">
          <h2>
            <span className="left">
              {dayjs(data.createdAt).utc().tz('Asia/Seoul').format('YY/MM/DD')}{' '}
              <br />
              {dayjs(data.createdAt).utc().tz('Asia/Seoul').format('A hh:mm')}
            </span>
            MEMO <span className="right">{data.guestName}</span>
          </h2>
          <p>MEMO</p>
          <p>MEMO</p>
        </div>

        {data && data.guestbookFiles.length > 0 && (
          <div className="book-wrapper-image">
            <BasicSwiper
              className="book-wrapper-image-swiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
            >
              {data.guestbookFiles.map(({ id, location, filename }) => (
                <SwiperSlide key={id}>
                  <div className="grayscale" />
                  <BlurImage
                    src={location}
                    alt={`${filename} 이미지`}
                    style={{ objectFit: 'contain' }}
                  />
                </SwiperSlide>
              ))}
            </BasicSwiper>
          </div>
        )}

        <div className="book-wrapper-middle">
          <p>{data.content}</p>
        </div>
      </div>
    </StyledGuestbookCard>
  );
};
