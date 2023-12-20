// base
import React, { useState } from 'react';

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

import ImgsViewer from 'react-images-viewer';

interface GuestbookCardProps {
  data: GuestbookListProps;
}

export const GuestbookCard: React.FC<GuestbookCardProps> = ({ data }) => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const { isMobile } = useMedia();

  const onOpenImageViewer = (index: number) => {
    setCurrentImage(index);
    setIsImageViewerOpen(true);
  };

  const onCloseImageViewer = () => {
    setIsImageViewerOpen(false);
  };

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
            MEMO <span className="right line-two">{data.guestName}</span>
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
              {data.guestbookFiles.map(({ id, location, filename }, idx) => (
                <SwiperSlide key={id} onClick={() => onOpenImageViewer(idx)}>
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

        <ImgsViewer
          imgs={data.guestbookFiles.map(({ location, filename }) => ({
            src: location,
            caption: filename
          }))}
          isOpen={isImageViewerOpen}
          onClose={onCloseImageViewer}
          currImg={currentImage}
          onClickPrev={() => setCurrentImage(currentImage - 1)}
          onClickNext={() => setCurrentImage(currentImage + 1)}
          backdropCloseable
          spinnerSize={20}
        />

        <div className="book-wrapper-middle">
          <p>{data.content}</p>
        </div>
      </div>
    </StyledGuestbookCard>
  );
};
