// base
import React from 'react';

// style
import { StyledTistoryCard } from './style';

// components
import { BlurImage } from 'components';

// modules
import { ResponseEverything, selectThemeState } from 'modules';

// libraries
import { useRecoilValue } from 'recoil';
import moment from 'moment';

interface TistoryCardProps {
  data: ResponseEverything;
}

export const TistoryCard: React.FC<TistoryCardProps> = ({ data }) => {
  const { title, contents, createdAt, thumbmnaile } = data;

  const selectTheme = useRecoilValue(selectThemeState);

  if (!data) return <div>게시글 없음</div>;

  return (
    <StyledTistoryCard isDarkMode={selectTheme}>
      <div className="tistory-wrapper">
        <div className="tistory-wrapper-thumb">
          <BlurImage
            src={thumbmnaile}
            alt="card img"
            fill
            sizes="100vw"
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
        <div className="tistory-wrapper-contents">
          <h2>{title}</h2>
          <p>{contents}</p>
        </div>
        <div className="tistory-wrapper-date">
          {moment(createdAt).format('YYYY-MM-DD')}
        </div>
      </div>
    </StyledTistoryCard>
  );
};
