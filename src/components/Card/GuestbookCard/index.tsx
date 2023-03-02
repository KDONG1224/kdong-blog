// base
import React, { useCallback, useEffect, useState } from 'react';

// style
import { StyledGuestbookCard } from './style';

// components
import { BlurImage } from 'components';

// consts
import { exImg } from 'consts';

// hooks
import { useMedia } from 'hooks';

// utils
import { randomNumber } from 'utils';
import moment from 'moment';

interface GuestbookCardProps {
  guestbook: any;
}

export const GuestbookCard: React.FC<GuestbookCardProps> = ({ guestbook }) => {
  const { name, index, images, createdAt, content } = guestbook;

  const [bgColor, setBgColor] = useState<string>('#B3D7E8');

  const { isMobile: ismobile } = useMedia();

  const handleColor = useCallback(() => {
    const colors = ['#B3D7E8', '#A797D6', '#F2BED2', '#FFFFD7'];

    let number = randomNumber(index, 1);

    if (number > 4) {
      number = randomNumber(4, 1);
    }

    setBgColor(colors[number]);
  }, [index]);

  useEffect(() => {
    handleColor();
  }, [handleColor]);

  if (!guestbook) return <div />;

  return (
    <StyledGuestbookCard ismobile={ismobile} bgColor={bgColor}>
      <div className="card-wrapper">
        <div className="card-wrapper-content">
          <h2>{name === 'undefined' ? '익명의 게스트' : name}</h2>
          <p>{moment(createdAt).format('YYYY-MM-DD, HH:mm')}</p>
          <div className="card-wrapper-content-box-text">
            <div className="card-wrapper-content-box-text-desc">
              {content === 'undefined' ? '' : content}
            </div>

            {images && (
              <div className="card-wrapper-content-box-text-img">
                <BlurImage
                  src={images}
                  alt=""
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledGuestbookCard>
  );
};
