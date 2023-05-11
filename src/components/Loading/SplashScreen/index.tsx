import React from 'react';
import { StyledSplashScreen } from './style';

import Lottie from 'react-lottie-player';
import loadingFlip from '../../../loadingFlip.json';

export const SplashScreen = () => {
  return (
    <StyledSplashScreen>
      <div className="splash-wrapper">
        <Lottie loop animationData={loadingFlip} play />;
        <div className="title">KDONG's Portfolio</div>
      </div>
    </StyledSplashScreen>
  );
};