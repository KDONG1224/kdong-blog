// base
import React from 'react';

// style
import { StyledImageCard } from './style';
import { BlurImage } from 'components/Images';
import { exImg } from 'consts';

interface ImageCardProps {
  data: any;
  onClick: (id: string) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ data, onClick }) => {
  const { title, img, date, type, key } = data;

  const handleClick = () => {
    if (onClick) {
      onClick(key);
    }
  };

  return (
    <StyledImageCard onClick={handleClick}>
      <div className="card-wrapper">
        <div className="card-wrapper-top">
          <BlurImage
            src={img || exImg.EX_NUM_05}
            alt=""
            layout="fill"
            // objectFit="contain"
          />
        </div>

        <div className="card-wrapper-body">
          <p className="card-wrapper-body-title">{title}</p>
          <div className="card-wrapper-body-desc">
            <p className="card-wrapper-body-desc-date">{date} @KDONG</p>
            <p className="card-wrapper-body-desc-type">{type}</p>
          </div>
        </div>
      </div>
    </StyledImageCard>
  );
};
