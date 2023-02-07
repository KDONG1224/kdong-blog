// base
import React from 'react';

// style
import { StyledLogoBox } from './style';

// components
import { BlurImage } from 'components/Images';

// consts
import { mainBanner } from 'consts';

// modules
import { collapsedState, darkModeState } from 'modules';

// libraries
import { useRecoilValue } from 'recoil';

export const LogoBox = () => {
  const collapsed = useRecoilValue(collapsedState);
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <StyledLogoBox isDarkMode={isDarkMode}>
      <div className="logo-wrapper">
        <div className="logo-wrapper-img">
          <BlurImage
            src={mainBanner.NOT_IMAGE}
            alt="크동 이미지"
            width={100}
            height={100}
            round
          />
        </div>
        {!collapsed && <p>밥값하는 개발자의 노트</p>}
        {collapsed && <p className="collapsed">KDONG</p>}
      </div>
    </StyledLogoBox>
  );
};
