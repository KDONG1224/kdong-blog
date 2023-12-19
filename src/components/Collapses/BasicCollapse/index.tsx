// base
import React from 'react';

// styles
import { StyledBasicCollapse } from './style';

// hooks
import { useMedia } from 'hooks';

// libraries
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';

interface BasicCollapseProps extends CollapseProps {}

export const BasicCollapse: React.FC<BasicCollapseProps> = ({ ...props }) => {
  const { isMobile } = useMedia();

  return (
    <StyledBasicCollapse
      $ismobile={isMobile}
      {...props}
      expandIconPosition="end"
      expandIcon={({ isActive }) =>
        isActive ? <DownCircleOutlined /> : <UpCircleOutlined />
      }
    />
  );
};
