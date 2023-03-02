// styled
import styled from 'styled-components';

// consts
import { darkModeIcon, gifIcons, menuIcons } from 'consts';

interface StyledTistoryLayoutProps {
  isDarkMode: boolean;
  collapsed: boolean;
}

export const StyledTistoryLayout = styled.div<StyledTistoryLayoutProps>`
  /* color: rgba(204,204,204,.6);
  background-color: #0e0e0e; */
  font-family: 'GmarketSans-Medium';

  .logo {
    height: ${({ collapsed }) => (collapsed ? `100px` : 'calc(200px - 16px);')};
    margin: 16px;
    font-family: 'GmarketSans-Bold';
  }

  .divder {
    margin: 16px;
    /* border-bottom: ${({ isDarkMode }) =>
      isDarkMode ? `1px solid #fff` : '1px solid #dad8d1'}; */

    border-bottom: 1px solid #dad8d1;
  }

  .kdong-gif-icon {
    position: fixed;
    right: 10px;
    bottom: 5px;
    width: 50px;
    height: 50px;
    background: url(${gifIcons.KDONG_GIF_ICON}) center center / 100% no-repeat;
    cursor: pointer;
    z-index: 11;
  }

  .site-layout-background {
    background: #f0eeeb;
    /* transition: background 500ms; */
  }

  .site-layout-background-dark {
    background: #000;
    /* transition: background 500ms; */
  }

  .ant-layout-sider {
    flex: 0 0 250px !important;
    max-width: 250px !important;
    min-width: 250px !important;
    width: 250px !important;
    font-family: 'GmarketSans-Medium';

    &.ant-layout-sider-collapsed {
      flex: 0 0 80px !important;
      max-width: 80px !important;
      min-width: 80px !important;
      width: 80px !important;
    }
  }

  .ant-layout-header {
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dad8d1;
    font-family: 'GmarketSans-Bold';
  }

  .ant-layout-content {
    > div {
      border-left: 1px solid #dad8d1;
    }
  }

  .ant-layout-footer {
    border-top: 1px solid #dad8d1;
    font-family: 'GmarketSans-Medium';
    text-align: center;
  }

  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */

  .ant-switch {
    background: #aa99ff !important;
    &.ant-switch-checked {
      background: #3e3373 !important;
    }
  }

  .mode-icon {
    width: 20px;
    height: 22px;

    &.dark {
      background: url(${darkModeIcon.DARK_MODE_ICON}) center center / cover
        no-repeat;
    }

    &.light {
      background: url(${darkModeIcon.LIGHT_MODE_ICON}) center center / cover
        no-repeat;
    }
  }
`;
