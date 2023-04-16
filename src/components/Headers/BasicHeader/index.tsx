// base
import React, { useState } from 'react';
import Link from 'next/link';

// style
import { StyledBasicHeader } from './style';

// containers
import { MainMenu } from 'containers';

// compoentns
import { BasicDrawer, ModeSwitch } from 'components';

// libs
import { isMobile } from 'libs';

interface BasicHeaderProps {
  isDarkMode: boolean;
  onChangeTheme: (value: boolean) => void;
}

export const BasicHeader: React.FC<BasicHeaderProps> = ({
  isDarkMode,
  onChangeTheme
}) => {
  const [isMenu, setIsMenu] = useState(false);

  const onClickMenu = () => {
    setIsMenu((prev) => !prev);
  };

  const onClickThemeSwitch = () => {
    onChangeTheme(!isDarkMode);
  };

  return (
    <>
      <StyledBasicHeader isDarkMode={isDarkMode}>
        <div className="header-wrapper">
          <h1>
            <Link href="/">KDONG</Link>
          </h1>

          <div className="header-theme-switch">
            <ModeSwitch checked={isDarkMode} onChange={onClickThemeSwitch} />
          </div>

          <div className="header-hamburger" onClick={onClickMenu}>
            <div
              className={`header-hamburger-toggle ${isMenu ? 'active' : ''}`}
            >
              <span />
            </div>
          </div>
        </div>
      </StyledBasicHeader>
      <BasicDrawer
        anchor="right"
        open={isMenu}
        onClose={onClickMenu}
        width={isMobile ? '40rem' : 350}
        transitionDuration={800}
      >
        <MainMenu />
      </BasicDrawer>
    </>
  );
};
