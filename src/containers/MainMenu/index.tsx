// base
import React, { useEffect, useState } from 'react';

// style
import { StyledMainMenu } from './style';

// consts
import { ROUTE_ROOT, menuLists } from 'consts';

// libraries
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useRouter } from 'next/router';

export const MainMenu = () => {
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [subMenuKey, setSubMenuKey] = useState<string>('');

  const router = useRouter();
  const pathname = router.pathname;

  const onRouter = (key: string) => {
    router.replace(ROUTE_ROOT + key);
  };

  const onSubMenu = (key: string) => {
    setSubMenuKey(key);
  };

  const closeSubMenu = () => {
    setSubMenuKey('');
  };

  useEffect(() => {
    const openKey = pathname.split(/(?=\/)/g)[0].slice(1);
    const _pathname = pathname.slice(0);

    console.log(pathname);
    console.log(openKey + ' / ', +_pathname);

    setSelectedKey(openKey);
    // setOpenkeys([openKey]);
    // setSelectedKeys([_pathname]);
    // setActiveKey(openKey);
  }, [pathname, router]);

  return (
    <StyledMainMenu aria-labelledby="메뉴">
      {menuLists.map((menu, idx) =>
        menu.tabs === undefined ? (
          <React.Fragment key={menu.key}>
            <ListItemButton
              tabIndex={idx}
              selected={selectedKey === menu.key}
              onClick={() => onRouter(menu.key)}
            >
              <ListItemIcon>
                <div className={`menu-icon ${menu.root}`} />
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
            {menu.key === 'guestbook' && <Divider />}
          </React.Fragment>
        ) : (
          <React.Fragment key={menu.key}>
            <ListItemButton tabIndex={idx}>
              <ListItemIcon>
                <div className={`menu-icon ${menu.root}`} />
              </ListItemIcon>
              <ListItemText primary={menu.name} />
              {subMenuKey === menu.key ? (
                <ExpandLess onClick={closeSubMenu} />
              ) : (
                <ExpandMore onClick={() => onSubMenu(menu.key)} />
              )}
            </ListItemButton>
            <Collapse in={subMenuKey === menu.key} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.tabs.map((tab) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={menu.key + '/' + tab.key}
                    selected={selectedKey === menu.key + '/' + tab.key}
                    onClick={() => onRouter(menu.key + '/' + tab.key)}
                  >
                    <ListItemText primary={tab.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        )
      )}
    </StyledMainMenu>
  );
};
