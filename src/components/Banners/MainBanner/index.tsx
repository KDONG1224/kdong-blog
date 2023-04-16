// base
import React, { useMemo } from 'react';

// style
import { StyledMainBanner } from './style';

// components
import { BlurImage, TypingText } from 'components';

// modules
import { selectThemeState } from 'modules';

// libraries
import { useRecoilValue } from 'recoil';

export const MainBanner = () => {
  const selectTheme = useRecoilValue(selectThemeState);

  const imgUrl = useMemo(() => {
    if (selectTheme === 'dark') {
      return 'https://kdong-portfolio.s3.amazonaws.com/guestbook/1670325828599_IMG_6709.JPG';
    }

    return 'https://kdong-portfolio.s3.amazonaws.com/guestbook/1670325774131_IMG_6875.jpeg';
  }, [selectTheme]);

  return (
    <StyledMainBanner>
      <div className="banner-wrapper">
        <div className="banner-wrapper-text">
          <p>안녕하세요.</p>
          <TypingText
            sequence={[
              '동료들과 협업하는',
              2000,
              '클린 코드를 지향하는',
              2000,
              '비지니스 성장에 기여하는',
              2000
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
          />
          <p>
            밥값하는 개발자 <strong>강동재</strong> 입니다.
          </p>
        </div>
        <div className="banner-wrapper-img">
          <BlurImage
            src={imgUrl}
            alt="main img"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </StyledMainBanner>
  );
};
