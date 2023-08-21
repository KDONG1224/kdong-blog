// base
import React from 'react';

// style
import { StyledBasicSelect } from './style';

// consts
import { SelectListItemProps } from 'consts';

// hooks
import { useMedia } from 'hooks';

// libraries
import { MenuItem, SelectProps } from '@mui/material';

interface BasicSelectProps extends SelectProps {
  listItems: SelectListItemProps[];
}

export const BasicSelect: React.FC<BasicSelectProps> = ({
  listItems,
  ...props
}) => {
  const { isMobile } = useMedia();

  return (
    <StyledBasicSelect
      className="basic-select-wrapper"
      placeholder={listItems[0].label}
      defaultValue={listItems[0].value}
      IconComponent={(props) => (
        <div className="basic-select-wrapper-arrow" {...props} />
      )}
      MenuProps={{
        PaperProps: {
          className: `basic-select-wrapper-paper ${isMobile ? 'mobile' : ''} ${
            listItems[0].value
          }`
        }
      }}
      {...props}
    >
      {listItems.map(({ key, label, value }) => (
        <MenuItem
          key={value}
          value={value}
          id={key}
          className="basic-select-wrapper-item"
        >
          {label}
        </MenuItem>
      ))}
    </StyledBasicSelect>
  );
};
