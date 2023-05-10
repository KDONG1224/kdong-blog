// base
import React from 'react';

// style
import { StyledReference } from './style';

// components
import { BlurImage } from 'components';

// consts
import { referenceList } from 'consts';

export const Reference = () => {
  return (
    <StyledReference>
      <div className="refer-wrapper">
        {[
          ...referenceList,
          ...referenceList,
          ...referenceList,
          ...referenceList,
          ...referenceList,
          ...referenceList
        ].map(({ thumbnail, key, tag }) => (
          <div key={key} className="refer-wrapper-box">
            <BlurImage src={thumbnail} alt={`${tag} 이미지`} />
          </div>
        ))}
      </div>
    </StyledReference>
  );
};
