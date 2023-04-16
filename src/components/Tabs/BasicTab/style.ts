import styled from '@emotion/styled';
import { Tabs } from '@mui/material';

export const StyledBasicTab = styled(Tabs)`
  width: 100%;
  height: 80px;
  min-height: 80px;

  .MuiTabs-scroller {
    height: 100%;

    .MuiTabs-flexContainer {
      height: 100%;
      .MuiButtonBase-root.MuiTab-root {
        width: 130px;
        height: 100%;
        font-size: 2.8rem;

        &.Mui-selected {
          color: red;
        }
      }
    }

    .MuiTabs-indicator {
      background-color: red;
    }
  }
`;
