// base
import React, { useState } from 'react';
import Image from 'next/image';

// style
import { StyledHeader } from './style';

// consts
import { MainHeaderMenus, ROUTE_ROOT, commonIcons, logoIcons } from 'consts';

// hooks
import { useMedia, useScroll } from 'hooks';
import { useRouter } from 'next/router';
import { BasicDrawer, BasicImage } from 'components';

export const Header = () => {
  const [isHoverName, setIsHoverName] = useState<string>('');
  const [isHover, setIsHover] = useState<'hover' | 'none'>('none');
  const [isMenu, setIsMenu] = useState(false);

  const router = useRouter();

  const { isMobile } = useMedia();
  const { scrollY } = useScroll();

  const onClickLogo = () => {
    router.push(ROUTE_ROOT);
  };

  const onClickMenu = (path: string) => {
    console.log('onClickMenu : ', path);
  };

  const onMouseOver = (name: string, type: 'hover' | 'none') => {
    setIsHoverName(name);
    setIsHover(type);
  };

  const onClickMobileMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <>
      <StyledHeader ismobile={isMobile}>
        <div className="header-wrapper">
          <div className="header-wrapper-top">
            <div className="header-wrapper-top-left">
              {!isMobile &&
                MainHeaderMenus.map(({ index, name, nameKr, path }) => (
                  <React.Fragment key={name + index}>
                    <div
                      onClick={() => onClickMenu(path)}
                      onMouseOver={() => onMouseOver(name, 'hover')}
                      onMouseOut={() => onMouseOver(name, 'none')}
                    >
                      {isHover === 'hover' && isHoverName === name
                        ? nameKr
                        : name.toLocaleUpperCase()}
                    </div>
                  </React.Fragment>
                ))}
              {isMobile && (
                <div
                  className="header-wrapper-top-left-menu"
                  onClick={onClickMobileMenu}
                >
                  <span>MENU</span>
                </div>
              )}
            </div>
            <div
              className={`header-wrapper-top-right ${
                scrollY > 10 && isMobile ? 'short' : ''
              }`}
              onClick={onClickLogo}
            >
              PORTFOLIO
            </div>
          </div>
          <div
            className={`header-wrapper-bottom ${scrollY > 10 ? 'short' : ''}`}
            onClick={onClickLogo}
          >
            <Image src={logoIcons.LOGO_K} alt="logo-k" width={30} height={30} />
            <div className="header-wrapper-bottom-line first">
              <div></div>
            </div>
            <Image src={logoIcons.LOGO_D} alt="logo-d" width={30} height={30} />
            <div className="header-wrapper-bottom-line second">
              <div></div>
            </div>
            <Image src={logoIcons.LOGO_O} alt="logo-o" width={30} height={30} />
            <div className="header-wrapper-bottom-line third">
              <div></div>
            </div>
            <Image src={logoIcons.LOGO_N} alt="logo-n" width={30} height={30} />
            <div className="header-wrapper-bottom-line four">
              <div></div>
            </div>
            <Image src={logoIcons.LOGO_G} alt="logo-g" width={30} height={30} />
          </div>
        </div>
      </StyledHeader>
      <BasicDrawer
        anchor="left"
        open={isMenu}
        onClose={onClickMobileMenu}
        width={200}
        transitionDuration={500}
      >
        <div className="mobile-menu-wrapper">
          {MainHeaderMenus.map(({ index, name, nameKr }) => (
            <div key={name + index} className="mobile-menu-wrapper-list">
              <div className="mobile-menu-wrapper-list-eng">
                {name.toLocaleUpperCase()}
              </div>
              <div className="mobile-menu-wrapper-list-kor">{nameKr}</div>
            </div>
          ))}
        </div>
        <div
          className={`mobile-menu-close ${!isMenu ? 'hidden' : 'show'}`}
          onClick={onClickMobileMenu}
        >
          <div className="mobile-menu-close-img">
            <BasicImage src={commonIcons.ICON_MENU_CLOSE} alt="close btn" />
          </div>
        </div>
      </BasicDrawer>
    </>
  );
};
