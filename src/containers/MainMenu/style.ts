// libraries
import styled from '@emotion/styled';
import { List } from '@mui/material';
import { menuIcons } from 'consts';

export const StyledMainMenu = styled(List)`
  font-size: 8rem;

  & .MuiButtonBase-root {
    padding: 2rem;

    & .MuiListItemIcon-root {
    }
    & .MuiListItemText-root {
      > .MuiTypography-root {
        font-size: 3.8rem;
        padding-left: 2rem;
      }
    }
    & .MuiTouchRipple-root {
    }

    & .MuiSvgIcon-root {
      font-size: 3.8rem;
    }
  }

  & .MuiCollapse-root {
    & .MuiListItemText-root {
      > .MuiTypography-root {
        font-size: 3.9rem;
      }
    }
  }

  & .MuiDivider-root {
    margin: 20px 0;
  }

  .menu-icon {
    width: 6rem;
    height: 6rem;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &.home {
      background-image: url(${menuIcons.HOME_ICON});
    }

    &.about {
      background-image: url(${menuIcons.ABOUT_ICON});
    }

    &.guestbook {
      background-image: url(${menuIcons.REACT_ICON});
    }

    &.reference {
      background-image: url(${menuIcons.REFERENCE_ICON});
    }

    &.algorithm {
      background-image: url(${menuIcons.ALGORITHM_ICON});
    }

    &.canvas {
      background-image: url(${menuIcons.JS_ICON});
    }

    &.toy-project {
      background-image: url(${menuIcons.TOYPROJECT_ICON});
    }
  }
`;
