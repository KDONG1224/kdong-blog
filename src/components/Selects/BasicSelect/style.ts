import styled from '@emotion/styled';
import { Select } from '@mui/material';
import { commonIcons } from 'consts';

export const StyledBasicSelect = styled(Select)`
  width: 350px;
  font-family: Pretendard-Bold;
  font-size: 16px;

  .MuiSelect-select {
    padding: 5px 0 !important;
  }

  .MuiSelect-icon {
    width: 20px;
    height: 10px;
    background-image: url(${commonIcons.ICON_BOTTOM_ARROW});
    background-size: 26px;
    cursor: pointer;
    background-position: calc(100% + 6px) 50%;
    background-repeat: no-repeat;

    &.MuiSelect-iconOpen {
      right: 0 !important;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #000;
    border: 0;
    border-bottom: 2px solid #000;
  }
`;
