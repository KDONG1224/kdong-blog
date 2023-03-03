// base
import React, { HTMLAttributes, useState } from 'react';

// style
import { StyledTistoryLayout } from './style';

// components
import { CommonDrawer, LogoBox } from 'components';

// modules
import { collapsedState, darkModeState } from 'modules';

// libraries
import { useRecoilState } from 'recoil';
import { ConfigProvider, Layout, Menu, Switch, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Instagram } from 'container';

import { menuLists } from 'consts/menuLists';
import { MainMenu } from 'container/MainMenu';
import { useMedia } from 'hooks';
import { arrowIcons } from 'consts';

const { Header, Content, Footer, Sider } = Layout;

interface TistoryLayoutProps extends HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

export const TistoryLayout: React.FC<TistoryLayoutProps> = ({
  noPadding = false,
  children,
  ...props
}) => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const [isInsta, setIsInsta] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { isMobile } = useMedia();

  const { defaultAlgorithm, darkAlgorithm } = theme;

  const handleClick = () => {
    setIsDarkMode((prev) => !prev);
  };

  const onClickKdong = () => {
    setIsInsta((prev) => !prev);
  };

  const onClickMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <ConfigProvider
      theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <StyledTistoryLayout
        isDarkMode={isDarkMode}
        collapsed={collapsed}
        {...props}
      >
        <Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
          {!isMobile && (
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              className={isDarkMode ? 'dark-mode' : 'site-layout-background'}
            >
              <div className="logo">
                <LogoBox />
              </div>
              <div className="divder" />

              <div className="menu-item">
                <MainMenu />
              </div>
            </Sider>
          )}
          <Layout
            className="site-layout"
            style={{ minHeight: '100vh', maxHeight: '100vh' }}
          >
            <Header
              className={isDarkMode ? 'dark-mode' : 'site-layout-background'}
              style={
                isMobile
                  ? {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100%',
                      zIndex: 99
                    }
                  : { position: 'relative' }
              }
            >
              {!isMobile && (
                <>
                  {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: 'trigger',
                      onClick: () => setCollapsed(!collapsed)
                    }
                  )}
                </>
              )}
              {isMobile && (
                // <div
                //   onClick={onClickMobileMenu}
                //   style={{
                //     width: 25,
                //     height: 25,
                //     background: `url(${arrowIcons.HEADER_RIGHT_ICON})center center / contain no-repeat`,
                //     cursor: 'pointer'
                //   }}
                // />
                <div
                  className={`hamburger-menu ${isDarkMode ? 'dark' : ''}`}
                  onClick={onClickMobileMenu}
                >
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              )}
              <div style={{ textAlign: 'center' }}>KDONG&apos;s Portfolio</div>
              <Switch
                checkedChildren={<div className="mode-icon dark" />}
                unCheckedChildren={<div className="mode-icon light" />}
                defaultChecked={false}
                onClick={handleClick}
              />
            </Header>
            <Content
            // style={{ margin: '16px' }}
            >
              <div
                className={
                  isDarkMode
                    ? 'site-layout-background-dark'
                    : 'site-layout-background'
                }
                style={{
                  padding: noPadding ? '0' : '16px',
                  overflow: noPadding ? 'hidden' : '',
                  minHeight: '100%',
                  maxHeight: '100%',
                  overflowY: 'scroll',
                  borderLeft: isMobile ? 'none' : '1px solid #ddd',
                  margin: isMobile ? '64px 0 63px' : 'auto'
                }}
              >
                {children}
              </div>
            </Content>
            <Footer
              className={isDarkMode ? 'dark-mode' : 'site-layout-background'}
              style={
                isMobile
                  ? {
                      position: 'fixed',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      zIndex: 99
                    }
                  : { position: 'relative' }
              }
            >
              <div>Copyright© 2023 KDONG. Wedsite made by KDONG.</div>
              {!isMobile && (
                <div className="kdong-gif-icon" onClick={onClickKdong} />
              )}
            </Footer>
          </Layout>
        </Layout>
      </StyledTistoryLayout>
      {isInsta && <Instagram onClick={onClickKdong} />}
      <CommonDrawer
        open={mobileMenu}
        width="50%"
        placement="left"
        onClose={onClickMobileMenu}
        closable={false}
        className={`mobile-menu-drawer ${isDarkMode ? 'dark' : ''}`}
      >
        <div className="mobile-menu-item">
          <MainMenu />
        </div>
      </CommonDrawer>
    </ConfigProvider>
  );
};
