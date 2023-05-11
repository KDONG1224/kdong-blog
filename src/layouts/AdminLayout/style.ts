import { Layout } from 'antd';
import styled from '@emotion/styled';

export const StyledAdminLayout = styled(Layout)`
  height: 100vh;

  .ant-layout-sider {
    overflow: scroll;
    background: #000000;
    flex: 0 0 250px !important;
    max-width: 250px !important;
    min-width: 250px !important;
    width: 250px !important;

    &.ant-layout-sider-collapsed {
      flex: 0 0 100px !important;
      max-width: 100px !important;
      min-width: 100px !important;
      width: 100px !important;
    }

    .ant-menu-dark {
      background-color: #000000 !important;
      color: #ffffff !important;
    }

    .ant-layout-footer {
      position: absolute;
      bottom: 0;
      background-color: #000000 !important;
      color: #ffffff !important;
      text-align: center;
      line-height: 1.5;
      font-size: 14px;

      > a {
        color: #f43f00 !important;
      }
    }
  }

  .ant-layout {
    &-header {
      background: #fff;
      padding-inline: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .trigger-btn {
        width: 64px;
        height: 64px;
        font-size: 16px;
        border: 0 !important;
      }

      .admin-header-title {
        font-size: 20px;
        margin-right: 20px;

        > h2 {
          margin-bottom: 0;
        }
      }
    }

    &-content {
      min-width: 800px;
      min-height: 280px;
      padding: 24px;
      margin: 24px 16px;
      background: rgb(255, 255, 255);
      overflow: scroll;

      .admin-content-top {
        margin-bottom: 40px;

        .admin-content-title {
          > h2 {
            font-size: 22px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            margin-bottom: 20px;
          }
        }

        .admin-content-btn {
        }
      }
    }
  }
`;
