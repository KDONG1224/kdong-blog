// base
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAdminLayout } from './style';

// components
import { AdminLogoBox } from 'components';

// libs
import { MenuItemProps, getItem } from 'libs';

// modules
import { authRoleState, collapsedState } from 'modules';

// consts
import {
  ROUTE_ADMIN_GUEST,
  ROUTE_ADMIN_GUEST_BOOK,
  ROUTE_ADMIN_IMAGEBANK,
  ROUTE_ADMIN_IMAGEBANK_LIST,
  ROUTE_ADMIN_IMAGEBANK_UPLOAD,
  ROUTE_ADMIN_LECTURE,
  ROUTE_ADMIN_LECTURE_LIST,
  ROUTE_ADMIN_MYINFO,
  ROUTE_ADMIN_PAGE,
  ROUTE_ADMIN_PAGE_MAIN,
  ROUTE_ADMIN_PAGE_POPUP,
  ROUTE_ADMIN_SIGNIN,
  ROUTE_ROOT
} from 'consts';

// libraries
import { useRecoilState, useRecoilValue } from 'recoil';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Button, Col, Layout, LayoutProps, Menu, Row } from 'antd';
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  MessageOutlined,
  ReadOutlined,
  ShopOutlined,
  HomeOutlined,
  FileImageOutlined
} from '@ant-design/icons';
import { useMedia } from 'hooks';

interface AdminLayoutProps extends LayoutProps {
  title: string;
  btnFormId?: string;
  noSaveBtn?: boolean;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  title,
  noSaveBtn = false,
  btnFormId = 'no-btn-id',
  children,
  ...props
}) => {
  const [isSelectMenu, setIsSelectMenu] = useState<string[]>(['']);

  const isAdminRole = useRecoilValue(authRoleState);
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);

  const { isTablet } = useMedia();
  const router = useRouter();
  const pathname = router.pathname;

  const adminMenuItems: MenuItemProps[] = [
    collapsed &&
      (getItem('로그인', ROUTE_ADMIN_SIGNIN, <LogoutOutlined />) as ItemType),
    getItem('메인 홈', ROUTE_ROOT, <HomeOutlined />),
    getItem('내 정보', ROUTE_ADMIN_MYINFO, <UserOutlined />),
    getItem('이미지 관리', ROUTE_ADMIN_IMAGEBANK, <FileImageOutlined />, [
      getItem('이미지 목록', ROUTE_ADMIN_IMAGEBANK_LIST),
      getItem('이미지 업로드', ROUTE_ADMIN_IMAGEBANK_UPLOAD)
    ]),
    getItem('페이지 관리', ROUTE_ADMIN_PAGE, <ShopOutlined />, [
      getItem('메인페이지 관리', ROUTE_ADMIN_PAGE_MAIN),
      getItem('팝업 관리', ROUTE_ADMIN_PAGE_POPUP)
    ]),
    getItem('게시판 관리', ROUTE_ADMIN_LECTURE, <ReadOutlined />, [
      getItem('게시글 관리', ROUTE_ADMIN_LECTURE_LIST)
    ]),
    getItem('방명록 관리', ROUTE_ADMIN_GUEST, <MessageOutlined />, [
      getItem('방명록 관리', ROUTE_ADMIN_GUEST_BOOK)
    ])
  ];

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const onClickMenu = (e: MenuInfo) => {
    router.replace(e.key);
  };

  useEffect(() => {
    setIsSelectMenu([pathname]);
  }, [pathname]);

  useEffect(() => {
    if (isTablet) {
      setCollapsed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTablet]);

  return (
    <StyledAdminLayout {...props}>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <AdminLogoBox isCollapsed={collapsed} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          selectedKeys={isSelectMenu}
          items={adminMenuItems as ItemType[]}
          onClick={(e) => onClickMenu(e)}
        />

        {!collapsed && (
          <Layout.Footer>
            <a
              href="https://github.com/KDONG1224"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⓒ KDONG
            </a>
            <br />
            [문의]
            <br />
            EMAIL | gkfl8809@naver.com
            <br />
            GITHUB | KDONG1224
          </Layout.Footer>
        )}
      </Layout.Sider>
      <Layout {...props}>
        <Layout.Header>
          <Button
            className="trigger-btn"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleCollapse}
          />
          <div className="admin-header-title">
            <h2>KDONG Portfolio Admin</h2>
          </div>
        </Layout.Header>
        <Layout.Content>
          <Row justify="space-between" className="admin-content-top">
            <Col className="admin-content-title">
              <h2 style={{ marginBottom: 20 }}>{title}</h2>
            </Col>
            {!noSaveBtn && (
              <Col className="admin-content-btn">
                <Button
                  type="primary"
                  htmlType="submit"
                  form={btnFormId}
                  disabled={isAdminRole === 'isSuperuser' ? false : true}
                >
                  저장
                </Button>
              </Col>
            )}
          </Row>
          <div className="ant-layout-content-children">{children}</div>
        </Layout.Content>
      </Layout>
    </StyledAdminLayout>
  );
};
