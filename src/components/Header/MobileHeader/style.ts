import { menuIcons } from 'consts';
import styled from 'styled-components';

export const StyledMobileHeader = styled.div`
  height: 100px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  background: transparent;

  .adm-nav-bar {
    height: 100%;
    padding: 0;

    .adm-nav-bar-title {
      height: 100%;

      > span {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }

    .adm-nav-bar-right {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      span {
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  /* .anticon svg */
`;

export const StyledHeaderRight = styled.div`
  .ant-menu {
    > li {
      /* height: 100px !important; */
    }
  }

  .ant-menu-submenu-title,
  .ant-menu-inline > .ant-menu-item {
    height: 100px !important;
    line-height: 100px !important;
  }
  .ant-menu-submenu-title {
    /* height: 100px !important; */
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: 32px;
  }

  .ant-menu-item .ant-menu-item-icon,
  .ant-menu-submenu-title .ant-menu-item-icon {
    width: 50px;
    height: 50px;
  }

  .ant-menu-item .ant-menu-item-icon + span,
  .ant-menu-submenu-title .ant-menu-item-icon + span {
    margin-left: 20px;
  }

  .ant-menu-submenu-inline .ant-menu-submenu-arrow::before {
    transform: rotate(-45deg) translateX(2.5px) scale(2.5);
  }
  .ant-menu-submenu-inline .ant-menu-submenu-arrow::after {
    transform: rotate(45deg) translateX(-2.5px) scale(2.5);
  }
  .ant-menu-submenu-open.ant-menu-submenu-inline
    > .ant-menu-submenu-title
    > .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateX(-2.5px) scale(2.5);
  }
  .ant-menu-submenu-open.ant-menu-submenu-inline
    > .ant-menu-submenu-title
    > .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateX(2.5px) scale(2.5);
  }

  .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-arrow::after {
    left: -10px;
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
  .ant-menu-item .javascript-icon,
  .ant-menu-submenu-title .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  .ant-menu-item-selected .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  .ant-menu-submenu-open .javascript-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

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
