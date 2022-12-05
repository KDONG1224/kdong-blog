import { menuIcons } from 'consts';
import styled from 'styled-components';

export const StyledMainLayout = styled.div`
  .ant-layout-sider {
    height: calc(100vh - 80px) !important;
    margin-top: 80px;
  }

  .ant-layout-sider-trigger {
    background: #fff;

    > span {
      color: #000 !important;
    }
  }

  .ant-layout-content {
    padding-top: 116px !important;
    overflow: hidden;
  }

  .ant-menu-vertical > .ant-menu-item,
  .ant-menu-inline > .ant-menu-item,
  .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 50px;
    line-height: 50px;
  }

  .ant-menu.ant-menu-inline-collapsed
    > .ant-menu-submenu
    > .ant-menu-submenu-title,
  .ant-menu.ant-menu-inline-collapsed > .ant-menu-item {
    padding: 0 calc(50% - 30px / 2);
  }

  .ant-menu-vertical .ant-menu-submenu-title .ant-menu-item-icon {
    height: 48px;
  }
  // sidebar icons
  .ant-menu-submenu-title,
  .ant-menu-item {
    .ant-menu-item-icon {
      width: 30px;
      height: 30px;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }

  // 홈 아이콘
  .ant-menu-item .home-icon,
  .ant-menu-submenu-title .home-icon {
    background-image: url(${menuIcons.HOME_ICON});
  }

  .ant-menu-item-selected .home-icon {
    background-image: url(${menuIcons.HOME_ICON});
  }

  /* .ant-menu-submenu-open .home-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .home-icon {
    background-image: url(${menuIcons.HOME_ICON});
  } */

  // 어바웃 아이콘
  .ant-menu-item .about-icon,
  .ant-menu-submenu-title .about-icon {
    background-image: url(${menuIcons.ABOUT_ICON});
  }

  .ant-menu-item-selected .about-icon {
    background-image: url(${menuIcons.ABOUT_ICON});
  }

  /* .ant-menu-submenu-open .about-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .about-icon {
    background-image: url(../../assets/icon/store_active.svg);
  } */

  // reference icons
  .ant-menu-item .reference-icon,
  .ant-menu-submenu-title .reference-icon {
    background-image: url(${menuIcons.REFERENCE_ICON});
  }

  .ant-menu-item-selected .reference-icon {
    background-image: url(${menuIcons.REFERENCE_ICON});
  }

  .ant-menu-submenu-open .reference-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .reference-icon {
    background-image: url(${menuIcons.REFERENCE_ICON});
  }

  // html icons
  .ant-menu-item .html-icon,
  .ant-menu-submenu-title .html-icon {
    background-image: url(${menuIcons.HTML_ICON});
  }

  .ant-menu-item-selected .html-icon {
    background-image: url(${menuIcons.HTML_ICON});
  }

  .ant-menu-submenu-open .html-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .html-icon {
    background-image: url(${menuIcons.HTML_ICON});
  }

  // css icons
  .ant-menu-item .css-icon,
  .ant-menu-submenu-title .css-icon {
    background-image: url(${menuIcons.CSS_ICON});
  }

  .ant-menu-item-selected .css-icon {
    background-image: url(${menuIcons.CSS_ICON});
  }

  .ant-menu-submenu-open .css-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .css-icon {
    background-image: url(${menuIcons.CSS_ICON});
  }

  // javscript icons
  .ant-menu-item .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  .ant-menu-item-selected .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  /* .ant-menu-submenu-open .javascript-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  } */

  // algorithm icons
  .ant-menu-item .algorithm-icon {
    background-image: url(${menuIcons.ALGORITHM_ICON});
  }

  .ant-menu-item-selected .algorithm-icon {
    background-image: url(${menuIcons.ALGORITHM_ICON});
  }

  /* .ant-menu-submenu-open .algorithm-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .algorithm-icon {
    background-image: url(${menuIcons.ALGORITHM_ICON});
  } */

  // react icons
  .ant-menu-item .notion-icon {
    background-image: url(${menuIcons.NOTION_ICON});
  }

  .ant-menu-item-selected .notion-icon {
    background-image: url(${menuIcons.NOTION_ICON});
  }

  /* .ant-menu-submenu-open .notion-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .notion-icon {
    background-image: url(${menuIcons.NOTION_ICON});
  } */

  // figma icons
  .ant-menu-item .figma-icon {
    background-image: url(${menuIcons.FIGMA_ICON});
  }

  .ant-menu-item-selected .figma-icon {
    background-image: url(${menuIcons.FIGMA_ICON});
  }

  /* .ant-menu-submenu-open .figma-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .figma-icon {
    background-image: url(${menuIcons.FIGMA_ICON});
  } */

  // alchol
  .ant-menu-item .alchol-icon {
    background-image: url(${menuIcons.ALCHOL_ICON});
  }

  .ant-menu-item-selected .alchol-icon {
    background-image: url(${menuIcons.ALCHOL_ICON});
  }

  /* .ant-menu-submenu-open .alchol-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .alchol-icon {
    background-image: url(${menuIcons.ALCHOL_ICON});
  } */
`;
