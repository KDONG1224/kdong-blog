// base
import React from 'react';

// style
import { StyledBasicCard } from './style';

// components
import { BlurImage } from 'components';

// hooks
import { useMedia } from 'hooks';

interface BasicCardProps {
  data: {
    title: string;
    desc: string;
    img: string;
    aosVisible: string;
  };
}

export const BasicCard: React.FC<BasicCardProps> = ({ data }) => {
  const { title, desc, img, aosVisible } = data;

  const { isMobile } = useMedia();

  return (
    <StyledBasicCard ismobile={isMobile}>
      <div className="card-wrapper" data-aos={aosVisible}>
        <div className="card-wrapper-img">
          <BlurImage src={img} alt="이미지" />
        </div>
        <div className="card-wrapper-title">
          <p>{title}</p>
        </div>
        <div className="card-wrapper-desc">
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </div>
    </StyledBasicCard>
  );
};
