import React from 'react';
import { StyledSplashScreen } from './style';
import Head from 'next/head';

// import Lottie from 'react-lottie-player';
import loadingFlip from '../../../loadingFlip.json';
import dynamic from 'next/dynamic';

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
