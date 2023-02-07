// base
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMobileHeader, StyledHeaderRight } from './style';

// layouts
import { MenuItems } from 'layouts';

// components
import { CommonDrawer } from 'components';

// routes
import { ROUTE_ROOT } from 'consts/route';

// consts
import { arrowIcons } from 'consts';

// libraries
import { Menu } from 'antd';
import { NavBar } from 'antd-mobile';
import { CloseOutlined } from '@ant-design/icons';

interface MobileHeaderProps {}

export const MobileHeader: React.FC<MobileHeaderProps> = ({}) => {
  const router = useRouter();
  const pathname = router.pathname === ROUTE_ROOT ? false : true;

  const [activeKey, setActiveKey] = useState<string>('');
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [openKeys, setOpenkeys] = useState<string[] | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (key: string) => {
    setActiveKey(key);

    router.push(`${ROUTE_ROOT}${key}`);

    setIsOpen(false);

    return;
  };

  const handleCreateClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledMobileHeader
        style={
          pathname
            ? {
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #2e382848'
              }
            : {}
        }
      >
        <NavBar
          backArrow={false}
          onBack={() => console.log('back')}
          right={
            <div
              style={{
                width: 100,
                height: 100,
                background: `url(${arrowIcons.HEADER_RIGHT_ICON}) right center / 60% no-repeat`
              }}
              onClick={() => setIsOpen(true)}
            />
          }
        >
          <span
            onClick={() => router.push(ROUTE_ROOT)}
            style={{
              fontSize: 30,
              color: '#000'
            }}
          >
            KDONG
          </span>
        </NavBar>
      </StyledMobileHeader>
      <CommonDrawer
        visible={isOpen}
        width={'100%'}
        closable
        closeIcon={
          <CloseOutlined style={{ fontSize: '60px', color: '#000' }} />
        }
        onClose={handleCreateClose}
        style={{ zIndex: 999999 }}
        contentWrapperStyle={{ marginTop: '0' }}
        headerStyle={{ height: 90, fontSize: 50 }}
      >
        <StyledHeaderRight>
          <Menu
            mode="inline"
            items={MenuItems}
            onClick={({ key }) => onClick(key)}
            onOpenChange={(openKeys) => setOpenkeys(openKeys)}
            activeKey={activeKey}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={['home']}
          />
        </StyledHeaderRight>
      </CommonDrawer>
    </>
  );
};
