// base
import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMainLayout } from './style';

// libraries
import { Layout, Menu } from 'antd';

// utils
import { getMenuItem, MenuItem } from 'utils';

// route
import {
  ROUTE_ROOT,
  ROUTE_ABOUT,
  ROUTE_ALGORITHM,
  ROUTE_FIGMA,
  ROUTE_NOTION,
  ROUTE_TOY_PROJECT,
  ROUTE_REFERNCE,
  ROUTE_REFERNCE_JS
} from 'consts/route';

// modules
import { useAppDispatch, useAppSelector } from 'modules/hooks';
import { sideMenuCollapsedAction, touchSideMenuCollapsed } from 'modules';

// components
import { IconBox, MainHeader, MobileHeader } from 'components';
import { useMedia, useMobileScroll } from 'hooks';
import { STORAGE_LOCAL_COLLAPSED } from 'services';
import { MainMenu } from 'container/MainMenu';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  const { isSideMenuCollapsed } = useAppSelector((state) => state.ui);

  const [_, setCollapsed] = useState(false);
  const [openKeys, setOpenkeys] = useState<string[] | undefined>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [activeKey, setActiveKey] = useState<string>('');

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isMobile } = useMedia();
  const { scrollY } = useMobileScroll();

  const pathname = router.pathname;

  const onCollapse = (value: boolean) => {
    dispatch(sideMenuCollapsedAction(!isSideMenuCollapsed));
    dispatch(touchSideMenuCollapsed(value));
    setCollapsed(value);

    if (value) {
      globalThis.sessionStorage.setItem(STORAGE_LOCAL_COLLAPSED, 'Y');
    } else {
      globalThis.sessionStorage.removeItem(STORAGE_LOCAL_COLLAPSED);
    }
  };

  const handleOpen = () => {
    const openKey = pathname.split(/(?=\/)/g)[0];

    setActiveKey(openKey);
    setOpenkeys(isSideMenuCollapsed ? undefined : [openKey]);
    setSelectedKeys([pathname]);
  };

  const onOpenChange = (openKeys: string[]) => {
    setOpenkeys(openKeys as string[]);
  };

  const onClick = (key: string) => {
    const url = key;
    router.push(url);
  };

  useEffect(() => {
    handleOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isSideMenuCollapsed]);

  useEffect(() => {
    if (globalThis.sessionStorage.getItem(STORAGE_LOCAL_COLLAPSED) === 'Y') {
      dispatch(sideMenuCollapsedAction(true));
      dispatch(touchSideMenuCollapsed(true));
      setCollapsed(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <StyledMainLayout ismobile={isMobile}>
      <Layout {...props}>
        {isMobile ? (
          <Layout.Header className="mobile-layout">
            <MobileHeader />
            <div
              className={`mobile-layout-bg ${
                scrollY > 100 && pathname === ROUTE_ROOT && 'find'
              }`}
            />
          </Layout.Header>
        ) : (
          <MainHeader />
        )}
        {!isMobile && (
          <Layout.Sider
            collapsible
            collapsed={isSideMenuCollapsed}
            onCollapse={(value) => onCollapse(value)}
          >
            <MainMenu />
          </Layout.Sider>
        )}
        <Layout.Content
          className="site-layout"
          style={{
            marginLeft: '2rem',
            paddingTop: '36px',
            paddingRight: '36px',
            height: '100vh',
            overflowY:
              pathname === ROUTE_ROOT && !isMobile ? 'hidden' : 'scroll'
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </StyledMainLayout>
  );
};

export const MenuItems: MenuItem[] = [
  getMenuItem('홈', ROUTE_ROOT, <IconBox className="home-icon navi-icon" />),
  getMenuItem(
    '어바웃',
    ROUTE_ABOUT,
    <IconBox className="about-icon navi-icon" />
  ),
  getMenuItem(
    '레퍼런스',
    'reference',
    <IconBox className="reference-icon navi-icon" />,
    [
      getMenuItem(
        '레퍼런스 목록',
        ROUTE_REFERNCE,
        <IconBox className="html-icon navi-icon" />
      ),
      getMenuItem(
        'JAVASCRIPT',
        ROUTE_REFERNCE_JS,
        <IconBox className="javascript-icon navi-icon" />
      )
    ]
  ),
  getMenuItem(
    '알고리즘',
    'algorithm',
    <IconBox className="javascript-icon navi-icon" />,
    [
      getMenuItem(
        '알고리즘 목록',
        ROUTE_ALGORITHM,
        <IconBox className="algorithm-icon navi-icon" />
      )
    ]
  ),
  getMenuItem(
    '피그마',
    ROUTE_FIGMA,
    <IconBox className="figma-icon navi-icon" />
  ),
  getMenuItem(
    '노션',
    ROUTE_NOTION,
    <IconBox className="notion-icon navi-icon" />
  ),
  getMenuItem(
    '토이프로젝트',
    ROUTE_TOY_PROJECT,
    <IconBox className="alchol-icon navi-icon" />
  )
];
