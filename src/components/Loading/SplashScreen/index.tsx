// base
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// styles
import { StyledSplashScreen } from './style';

// json
import loadingFlip from '../../../loadingFlip.json';

const DynamicLottie = dynamic(() => import('react-lottie-player'), {
  ssr: false
});

export const SplashScreen = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
      </Head>
      <StyledSplashScreen>
        <div className="splash-wrapper">
          <DynamicLottie loop animationData={loadingFlip} play />;
          <div className="title">KDONG BLOG</div>
        </div>
      </StyledSplashScreen>
    </>
  );
};
