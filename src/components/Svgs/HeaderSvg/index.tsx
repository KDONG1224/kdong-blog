// base
import React from 'react';

// style
import { StyledHeaderSvg } from './style';

export const HeaderSvg = () => {
  return (
    <StyledHeaderSvg>
      <div className="overlay_image">
        <div className="shadow"></div>
        <div className="clone_image"></div>
      </div>
      <svg
        className="overlay"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="overlay-path"
          vector-effect="non-scaling-stroke"
          fill="#222"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        ></path>
      </svg>
    </StyledHeaderSvg>
  );
};
