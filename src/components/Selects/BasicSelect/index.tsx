// base
import React from 'react';

// style
import { StyledBasicSelect } from './style';

// libraries
import { Select, SelectProps } from 'antd';

interface BasicSelectProps extends SelectProps {}

export const BasicSelect: React.FC<BasicSelectProps> = ({ ...props }) => {
  return (
    <StyledBasicSelect>
      <Select
        className="basic-select-wrapper"
        popupClassName="basic-select-wrapper-popup"
        {...props}
      />
    </StyledBasicSelect>
  );
};
