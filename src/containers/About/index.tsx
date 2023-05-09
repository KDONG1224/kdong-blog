// base
import React from 'react';

// style
import { StyledAbout } from './style';

export const About = () => {
  return (
    <StyledAbout>
      <div className="about-wrapper">
        <div
          style={{
            fontSize: 20,
            textAlign: 'center',
            paddingTop: 50,
            paddingBottom: 500
          }}
        >
          {' '}
          <h1> 준 비 중 입 니 다</h1>
        </div>
      </div>
    </StyledAbout>
  );
};
