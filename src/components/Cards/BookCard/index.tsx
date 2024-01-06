// base
import React, { useEffect, useState } from 'react';

// style
import { StyledBookCard } from './style';

// components
import { BlurImage } from 'components';

// modules
import { BookViewerProps } from 'modules/books';

// hooks
import { useMedia } from 'hooks';

// utils
import { removeHtmlTags } from 'utils';

interface BookCardProps {
  data: BookViewerProps;
  onClick: (id: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ data, onClick }) => {
  const { id, title, pages } = data;

  const [isContent, setIsContent] = useState('');

  const { isMobile } = useMedia();

  const handleClickCard = () => {
    onClick(id);
  };

  useEffect(() => {
    if (!data || !data.description) return;

    setIsContent(data.description);
  }, [data]);

  return (
    <StyledBookCard $ismobile={isMobile}>
      <div className={`check-wrapper image`} onClick={handleClickCard}>
        <div className={`check-wrapper-top image`}>
          <div className="check-wrapper-top-img">
            <div className={`check-wrapper-top-img-box image`}>
              <BlurImage
                src={pages[0].location as string}
                alt={`${title} 이미지`}
              />
            </div>
          </div>
        </div>

        <div className={`check-wrapper-middle image`}>
          <h2 className="line-one">{title}</h2>
          <p
            className="line-two"
            dangerouslySetInnerHTML={{ __html: removeHtmlTags(isContent) }}
          />
        </div>
      </div>
    </StyledBookCard>
  );
};
