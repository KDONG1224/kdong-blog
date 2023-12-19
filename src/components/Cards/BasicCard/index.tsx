// base
import React, { useEffect, useState } from 'react';

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
  const { title, img, aosVisible } = data;

  const [isDesc, setIsDesc] = useState('');

  const { isMobile } = useMedia();

  useEffect(() => {
    if (!data || !data.desc) return;

    setIsDesc(data.desc);
  }, [data]);

  return (
    <StyledBasicCard $ismobile={isMobile}>
      <div className="card-wrapper" data-aos={aosVisible}>
        <div className="card-wrapper-img">
          <BlurImage src={img} alt="이미지" />
        </div>
        <div className="card-wrapper-title">
          <p>{title}</p>
        </div>
        <div className="card-wrapper-desc">
          <p dangerouslySetInnerHTML={{ __html: isDesc }} />
        </div>
      </div>
    </StyledBasicCard>
  );
};
