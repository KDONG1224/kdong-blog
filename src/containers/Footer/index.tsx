// base
import React from 'react';

// style
import { StyledFooter } from './style';

// components
import { BasicImage } from 'components';

// consts
import { menuIcons } from 'consts';

// hooks
import { useMedia } from 'hooks';

// utils
import { windowLocation } from 'libs';

export const Footer = () => {
  const { isMobile } = useMedia();

  return (
    <StyledFooter ismobile={isMobile}>
      <div className="footer-wrapper">
        <div className="footer-wrapper-left">
          <div className="footer-wrapper-left-logo">KDONG</div>
          <div className="footer-wrapper-left-sns">
            <div
              className="footer-wrapper-left-sns-instagram"
              onClick={() => windowLocation('instagram')}
            >
              <BasicImage
                src={menuIcons.INSTAGRAM_ICON}
                alt="인스타그램 아이콘"
              />
            </div>
            <div
              className="footer-wrapper-left-sns-github"
              onClick={() => windowLocation('github')}
            >
              <BasicImage src={menuIcons.GITHUB_ICON} alt="인스타그램 아이콘" />
            </div>
          </div>
        </div>
        <div className="footer-wrapper-center">
          <ul>
            <li>밥값하는 개발자</li>
            <li>대표자. 강동재</li>
            <li>경기도 안산시 거주중</li>
            <li>© 2023. KDONG. All rights reserved.</li>
          </ul>
        </div>
        <div className="footer-wrapper-right">
          <ul>
            <li>Help</li>
            <li>FAQ</li>
            <li>서비스이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
};
