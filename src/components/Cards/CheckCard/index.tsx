// base
import React from 'react';

// style
import { StyledCheckCard } from './style';

// components
import { BasicImage } from 'components';

// consts
import { RecommandListProps } from 'consts';

// hooks
import { useMedia } from 'hooks';

interface CheckCardProps {
  data: RecommandListProps;
  type?: 'check' | 'polygon' | 'image';
}

export const CheckCard: React.FC<CheckCardProps> = ({ data, type }) => {
  const { title, desc, tag, created, thumbnail, bgColor, badgeColor } = data;

  const { isMobile } = useMedia();

  return (
    <StyledCheckCard lineBg={bgColor} badgeBg={badgeColor} ismobile={isMobile}>
      <div className={`check-wrapper ${type}`}>
        <div className={`check-wrapper-top ${type}`}>
          {type === 'check' && (
            <>
              <div className="check-wrapper-top-line" />
              <div className="check-wrapper-top-img">
                <div className={`check-wrapper-top-img-box ${type}`}>
                  <BasicImage src={thumbnail} alt={`${title} 이미지`} />
                </div>
              </div>
              <div className="check-wrapper-top-line rotate" />
            </>
          )}
          {type === 'polygon' && (
            <div className="check-wrapper-top-img">
              <div className={`check-wrapper-top-img-box ${type}`}>
                <BasicImage src={thumbnail} alt={`${title} 이미지`} />
              </div>
            </div>
          )}
          {type === 'image' && (
            <div className="check-wrapper-top-img">
              <div className={`check-wrapper-top-img-box ${type}`}>
                <BasicImage src={thumbnail} alt={`${title} 이미지`} />
              </div>
            </div>
          )}

          {type !== 'image' && (
            <div className={`check-wrapper-top-badge ${type}`}>
              <span>{tag}</span>
            </div>
          )}
        </div>

        <div className={`check-wrapper-middle ${type}`}>
          <h2>{title}</h2>
          <p className="line-two">{desc}</p>
        </div>

        {type !== 'image' && !isMobile && (
          <div className={`check-wrapper-bottom ${type}`}>
            <div className="check-wrapper-bottom-box">
              <span>{created}</span>
            </div>
          </div>
        )}
      </div>
    </StyledCheckCard>
  );
};
