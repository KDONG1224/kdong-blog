/* eslint-disable @typescript-eslint/no-unused-vars */
// base
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// style
import { StyledHeader } from './style';

// components
import { BasicDrawer, BasicImage } from 'components';

// consts
import {
  headerMenus,
  ROUTE_ROOT,
  commonIcons,
  logoIcons,
  ROUTE_ABOUT,
  ROUTE_PROJECT,
  ROUTE_REFERENCE,
  ROUTE_ALGORITHM,
  ROUTE_GUESTBOOK
} from 'consts';

// hooks
import { useMedia, useOverlay, useScroll } from 'hooks';
import { useRecoilValue } from 'recoil';
import { mainCategoryState } from 'modules';

export const Header = () => {
  const [isHoverName, setIsHoverName] = useState<string>('');
  const [isHover, setIsHover] = useState<'hover' | 'none'>('none');
  const [isMenu, setIsMenu] = useState(false);

  const menuLists = useRecoilValue(mainCategoryState);

  const router = useRouter();

  const { isMobile } = useMedia();
  const { scrollY } = useScroll();
  const { visible, hidden } = useOverlay('.overlay-path');

  const onClickLogo = () => {
    // onClickMobileMenu();
    router.push(ROUTE_ROOT);
  };

  const onClickMenu = (path: string) => {
    // onClickMobileMenu();
    if (path === 'ABOUT') {
      router.push(ROUTE_ABOUT);
    } else if (path === 'REFERENCE') {
      router.push(ROUTE_REFERENCE);
    } else if (path === 'ALGORITHM') {
      router.push(ROUTE_ALGORITHM);
    } else {
      router.push(ROUTE_GUESTBOOK);
    }
  };

  // const onMouseOver = (name: string, type: 'hover' | 'none') => {
  //   setIsHoverName(name);
  //   setIsHover(type);
  // };

  const onClickMobileMenu = () => {
    setIsMenu((prev) => !prev);
    // visible();
    // setTimeout(() => {
    //   setIsMenu((prev) => !prev);
    //   hidden();
    // }, 1200);
  };

  return (
    <>
      <StyledHeader $ismobile={isMobile}>
        <div className="header-wrapper">
          <div className="header-wrapper-top">
            <div className="header-wrapper-top-left">
              {/* {(!isMobile || scrollY <= 10) &&
                headerMenus.map(({ index, name, nameKr, path }) => {
                  if (name === 'projects') return null;

                  return (
                    <React.Fragment key={name + index}>
                      <div
                        className={`header-wrapper-top-left-list ${name}`}
                        onClick={() => onClickMenu(path)}
                        onMouseOver={() => onMouseOver(name, 'hover')}
                        onMouseOut={() => onMouseOver(name, 'none')}
                      >
                        {isHover === 'hover' && isHoverName === name ? (
                          <span>{nameKr}</span>
                        ) : (
                          <span>{name.toLocaleUpperCase()}</span>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })} */}
              {/* {(isMobile || scrollY > 10) && ( */}
              <div
                className="header-wrapper-top-left-menu"
                onClick={onClickMobileMenu}
              >
                <span>MENU</span>
              </div>
            </div>
            <div
              className={`header-wrapper-top-right ${
                scrollY > 10 ? 'short' : ''
              }`}
              onClick={onClickLogo}
            >
              BLOG
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

      {menuLists && menuLists.length > 0 && isMenu && (
        <BasicDrawer
          placement="left"
          open={isMenu}
          width={280}
          onClose={onClickMobileMenu}
          closable={false}
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <div className="mobile-menu-wrapper">
                {menuLists.map((list) => (
                  <div
                    key={list.id}
                    className="mobile-menu-wrapper-list"
                    onClick={() => onClickMenu(list.categoryEngName as string)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mobile-menu-wrapper-list-eng">
                      {list.categoryEngName?.toLocaleUpperCase()}
                    </div>
                    <div className="mobile-menu-wrapper-list-kor">
                      {list.categoryName}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`mobile-menu-close ${!isMenu ? 'hidden' : 'show'}`}
                onClick={onClickMobileMenu}
              >
                <div className="mobile-menu-close-img">
                  <BasicImage
                    src={commonIcons.ICON_MENU_CLOSE}
                    alt="close btn"
                  />
                </div>
              </div>
            </>
          }
        />
      )}
    </>
  );
};
