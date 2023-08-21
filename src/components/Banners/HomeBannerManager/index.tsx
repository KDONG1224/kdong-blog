// base
import React from 'react';

// style
import { StyledHomeBannerManager } from './style';

interface HomeBannerManagerProps {}

export const HomeBannerManager: React.FC<HomeBannerManagerProps> = () => {
  return (
    <StyledHomeBannerManager>
      <div className="hbm-wrapper">
        <div className="hbm-wrapper-title"></div>
        <div className="hbm-wrapper-tabs"></div>
      </div>
    </StyledHomeBannerManager>
  );
};
