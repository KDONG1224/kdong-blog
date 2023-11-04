// base
import React from 'react';

// style
import { StyledReference } from './style';

// components
import { BlurImage } from 'components';

// consts
import { DEFAULT_LIMIT, DEFAULT_SKIP } from 'consts';
import { useLectureList } from 'queries';
import { useRecoilValue } from 'recoil';
import { loadingState } from 'modules';

interface ReferenceProps {
  option: {
    projectType: string;
    positionType: string;
    skillType: string;
    order: string;
  };
}

export const Reference: React.FC<ReferenceProps> = ({ option }) => {
  const loading = useRecoilValue(loadingState);

  const { data: dataSource } = useLectureList({
    skip: DEFAULT_SKIP,
    limit: DEFAULT_LIMIT,
    type: 'reference',
    where: option
  });

  console.log('-- loading -- : ', loading);

  return (
    <StyledReference>
      <div className="refer-wrapper">
        {dataSource &&
          dataSource.map(({ id, thumbnail, title }) => (
            <div key={id} className="refer-wrapper-box">
              {thumbnail && (
                <BlurImage src={thumbnail.thumbUrl} alt={`${title} 이미지`} />
              )}
            </div>
          ))}
      </div>
    </StyledReference>
  );
};
