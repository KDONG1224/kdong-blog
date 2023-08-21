// base
import React from 'react';

// style
import { StyledCheckCard } from './style';

// components
import { BlurImage } from 'components';

// modules
import { ResponseLecture } from 'modules';

// hooks
import { useMedia } from 'hooks';

// libraries
import dayjs from 'dayjs';

interface CheckCardProps {
  data: ResponseLecture | any;
  type?: 'check' | 'polygon' | 'image';
}

export const CheckCard: React.FC<CheckCardProps> = ({ data, type }) => {
  const { title, subtitle, tags, createdAt, thumbnail, colors, badgeColor } =
    data;

  const { isMobile } = useMedia();

  return (
    <StyledCheckCard lineBg={colors} badgeBg={badgeColor} ismobile={isMobile}>
      <div className={`check-wrapper ${type}`}>
        <div className={`check-wrapper-top ${type}`}>
          {type === 'check' && (
            <>
              <div className="check-wrapper-top-line" />
              <div className="check-wrapper-top-img">
                <div className={`check-wrapper-top-img-box ${type}`}>
                  <BlurImage
                    src={thumbnail?.thumbUrl as string}
                    alt={`${title} 이미지`}
                  />
                </div>
              </div>
              <div className="check-wrapper-top-line rotate" />
            </>
          )}
          {type === 'polygon' && (
            <div className="check-wrapper-top-img">
              <div className={`check-wrapper-top-img-box ${type}`}>
                <BlurImage
                  src={thumbnail?.thumbUrl as string}
                  alt={`${title} 이미지`}
                />
              </div>
            </div>
          )}
          {type === 'image' && (
            <div className="check-wrapper-top-img">
              <div className={`check-wrapper-top-img-box ${type}`}>
                <BlurImage
                  src={thumbnail?.thumbUrl as string}
                  alt={`${title} 이미지`}
                />
              </div>
            </div>
          )}

          {type !== 'image' && (
            <div className={`check-wrapper-top-badge ${type}`}>
              {tags.length > 0 ? (
                tags.map((tag: any, idx: number) => (
                  <span key={idx}>{tag}</span>
                ))
              ) : (
                <span></span>
              )}
            </div>
          )}
        </div>

        <div className={`check-wrapper-middle ${type}`}>
          <h2 className="line-one">{title}</h2>
          <p className="line-two">{subtitle}</p>
        </div>

        {type !== 'image' && !isMobile && (
          <div className={`check-wrapper-bottom ${type}`}>
            <div className="check-wrapper-bottom-box">
              <span>{dayjs(createdAt).format('YYYY-MM-DD')}</span>
            </div>
          </div>
        )}
      </div>
    </StyledCheckCard>
  );
};
