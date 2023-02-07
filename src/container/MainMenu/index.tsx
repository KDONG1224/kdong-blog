// base
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMainMenu } from './style';

// consts
import { menuLists } from 'consts';

// modules
import { darkModeState } from 'modules';

// libraries
import { useRecoilValue } from 'recoil';
import { Menu, MenuProps } from 'antd';

interface MainMenuProps extends MenuProps {}

export const MainMenu: React.FC<MainMenuProps> = ({ ...props }) => {
  const isDarkMode = useRecoilValue(darkModeState);

  const [openKeys, setOpenkeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [activeKey, setActiveKey] = useState<string>('');

  const router = useRouter();
  const pathname = router.pathname;

  const onSelect = (item: any) => {
    router.push('/' + item.key);
  };

  useEffect(() => {
    const openKey = pathname.split(/(?=\/)/g)[0].slice(1);
    const _pathname = pathname.slice(1);

    console.log(openKey + ' / ', +_pathname);

    setOpenkeys([openKey]);
    setSelectedKeys([_pathname]);
    setActiveKey(openKey);
  }, [pathname, router]);

  console.log('openKeys : ', openKeys);
  console.log('selectedKeys : ', selectedKeys);
  console.log('activeKey : ', activeKey);

  return (
    <StyledMainMenu>
      <Menu
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={selectedKeys}
        activeKey={activeKey}
        onSelect={onSelect}
        onClick={onSelect}
        className={isDarkMode ? 'dark-mode' : ' '}
        theme={isDarkMode ? 'dark' : 'light'}
        mode="inline"
      >
        {menuLists.map((menu, idx) =>
          menu.tabs === undefined ? (
            <>
              <Menu.Item key={menu.key}>
                <div className={`menu-icon ${menu.root}`} />
                <span className="nav-text">{menu.name}</span>
              </Menu.Item>
              {menu.key === 'guestbook' && <div className="divder" />}
            </>
          ) : (
            <Menu.SubMenu
              key={menu.key}
              title={
                <>
                  <div className={`menu-icon ${menu.root}`} />
                  <span className="nav-text">{menu.name}</span>
                </>
              }
            >
              {menu.tabs.map((tab) => (
                <Menu.Item key={menu.key + '/' + tab.key}>{tab.name}</Menu.Item>
              ))}
            </Menu.SubMenu>
          )
        )}
      </Menu>
    </StyledMainMenu>
  );
};
