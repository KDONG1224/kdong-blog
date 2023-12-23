// base
import React, { useEffect, useState } from 'react';

// style
import { StyledCheckCard } from './style';

// components
import { BlurImage } from 'components';

// modules
import { ArticleListsProps } from 'modules/article';

// hooks
import { useMedia } from 'hooks';

// libraries
import dayjs from 'dayjs';

interface CheckCardProps {
  data: ArticleListsProps;
  type?: 'check' | 'polygon' | 'image';
  onClick: (id: string) => void;
}

export const CheckCard: React.FC<CheckCardProps> = ({
  data,
  type,
  onClick
}) => {
  const {
    id,
    title,
    tags,
    createdAt,
    thumbnails,
    mainColor,
    subColor,
    category,
    readCount
  } = data;

  const [isContent, setIsContent] = useState('');

  const { isMobile } = useMedia();

  const handleClickCard = () => {
    onClick(id);
  };

  useEffect(() => {
    if (!data || !data.content) return;

    setIsContent(data.content);
  }, [data]);

  return (
    <StyledCheckCard
      $linebg={mainColor}
      $badgbg={subColor}
      $ismobile={isMobile}
    >
      <div className={`check-wrapper ${type}`} onClick={handleClickCard}>
        <div className={`check-wrapper-top ${type}`}>
          {type === 'check' && (
            <>
              <div className="check-wrapper-top-line" />
              <div className="check-wrapper-top-img">
                <div className={`check-wrapper-top-img-box ${type}`}>
                  <BlurImage
                    src={thumbnails[0].location as string}
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
                  src={thumbnails[0].location as string}
                  alt={`${title} 이미지`}
                />
              </div>
            </div>
          )}

          {type === 'image' && (
            <div className="check-wrapper-top-img">
              <div className={`check-wrapper-top-img-box ${type}`}>
                <BlurImage
                  src={thumbnails[0].location as string}
                  alt={`${title} 이미지`}
                />
              </div>
            </div>
          )}

          {type === 'check' && (
            <div className={`check-wrapper-top-badge ${type}`}>
              {category && <span>{category.categoryName}</span>}
            </div>
          )}

          {type === 'polygon' && (
            <div className={`check-wrapper-top-badge ${type}`}>
              {tags.length > 0 ? (
                tags
                  .sort((a, b) => b.sequence - a.sequence)
                  .map(({ id, name }) => <span key={id}>{name}</span>)
              ) : (
                <span></span>
              )}
            </div>
          )}
        </div>

        <div className={`check-wrapper-middle ${type}`}>
          <h2 className="line-one">{title}</h2>
          <p
            className="line-two"
            dangerouslySetInnerHTML={{ __html: isContent }}
          />
        </div>

        {type !== 'image' && !isMobile && (
          <div className={`check-wrapper-bottom ${type}`}>
            <div className={`check-wrapper-bottom-box ${type}`}>
              <span>{dayjs(createdAt).format('YYYY-MM-DD')}</span>
              <span>조회수 : {readCount}</span>
            </div>
          </div>
        )}
      </div>
    </StyledCheckCard>
  );
};
