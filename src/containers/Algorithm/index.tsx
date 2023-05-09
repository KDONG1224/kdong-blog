// base
import React from 'react';

// style
import { StyledAlgorithm } from './style';

// components
import { CheckCard } from 'components';

// consts
import { algorithmList } from 'consts';

export const Algorithm = () => {
  return (
    <StyledAlgorithm>
      <div className="algo-wrapper">
        {algorithmList.map((algorithm) => (
          <CheckCard key={algorithm._id} data={algorithm} type="image" />
        ))}
      </div>
    </StyledAlgorithm>
  );
};
