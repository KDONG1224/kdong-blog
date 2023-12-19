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
      <StyledSplashScreen
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
          background: `repeating-linear-gradient(
            0deg,
            hsla(103, 11%, 32%, 0.09) 0px,
            hsla(103, 11%, 32%, 0.09) 1px,
            transparent 1px,
            transparent 11px
          ),
          repeating-linear-gradient(
            90deg,
            hsla(103, 11%, 32%, 0.09) 0px,
            hsla(103, 11%, 32%, 0.09) 1px,
            transparent 1px,
            transparent 11px
          ),
          linear-gradient(90deg, hsl(317, 13%, 6%), hsl(317, 13%, 6%))`
        }}
      >
        <div className="splash-wrapper" style={{ marginTop: '-100px' }}>
          <DynamicLottie loop animationData={loadingFlip} play />;
          <div
            className="title"
            style={{
              textAlign: 'center',
              fontFamily: 'UnioneForceStencil, Pretendard-Bold',
              fontSize: 50,
              color: '#fff'
            }}
          >
            KDONG BLOG
          </div>
        </div>
      </StyledSplashScreen>
    </>
  );
};
