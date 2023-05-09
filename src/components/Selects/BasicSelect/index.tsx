// base
import React from 'react';

// style
import { StyledBasicSelect } from './style';

// libraries
import { MenuItem, SelectProps } from '@mui/material';
import { SelectListItemProps } from 'consts';

interface BasicSelectProps extends SelectProps {
  listItems: SelectListItemProps[];
}

export const BasicSelect: React.FC<BasicSelectProps> = ({
  listItems,
  ...props
}) => {
  return (
    <StyledBasicSelect
      className="basic-select-wrapper"
      placeholder={listItems[0].label}
      defaultValue={listItems[0].value}
      IconComponent={(props) => (
        <div className="basic-select-wrapper-arrow" {...props} />
      )}
      {...props}
    >
      {listItems.map(({ label, value }) => (
        <MenuItem
          key={value}
          value={value}
          className="basic-select-wrapper-item"
        >
          {label}
        </MenuItem>
      ))}
    </StyledBasicSelect>
  );
};
