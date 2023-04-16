import styled from '@emotion/styled';
import { Switch } from '@mui/material';
import { darkmodeIcons } from 'consts';

interface StyledModeSwitchProps {}

export const StyledModeSwitch = styled(Switch)<StyledModeSwitchProps>`
  width: 6rem;
  height: 2.4rem;
  padding: 0;
  overflow: inherit;
  align-items: center;
  transform: scale(1.5);

  & .MuiSwitch-switchBase {
    transition: all 0.4s ease-in;
    top: auto;

    &.Mui-checked {
      transform: translateX(26px);
      & .MuiSwitch-thumb {
        background: url(${darkmodeIcons.DARK_MODE_BUTTON}) center center / 180%
          no-repeat;
        box-shadow: none;

        &:before {
          width: 0;
          height: 0;
        }
      }
      & + .MuiSwitch-track {
        background: #1f2533;
        box-shadow: inset 0px 7.8px 11.7px #171b24;
        border: 1px solid #72bbff;

        &:after {
          content: '';
          position: absolute;
          top: 5px;
          left: 0;
          width: 60px;
          height: 31px;
          background: url(${darkmodeIcons.DARK_MODE_STARS}) center top / contain
            no-repeat;
        }
      }
    }
  }

  & .MuiSwitch-thumb {
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    background: rgba(255, 193, 135, 0.96);
    box-shadow: -3.9px 6.5px 5.2px rgba(183, 183, 183, 0.35),
      0px 0px 11.7px rgba(255, 193, 135, 0.6), inset 0px -2.6px 5.2px #ffa149,
      inset 0px 2.6px 5.2px #ffd0a5;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1.2rem;
      height: 1.2rem;
      background: #66676a;
      border-radius: 122px;
      opacity: 0;
      transform: translate(-50%, -50%) matrix(-0.23, 0.97, 0.97, 0.23, 0, 0);
    }
  }

  & .MuiSwitch-track {
    height: 2.4rem;
    position: relative;
    border-radius: 78px;
    border: 1.3px solid #1f2533;
    background: linear-gradient(to top, #6cb8ff, #ffffff);
    box-shadow: inset 0px 7.8px 11.7px #72bbff;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: -3px;
      width: 110%;
      height: 100%;
      background: url(${darkmodeIcons.LIGHT_MODE_CLOUDS}) center top / contain
        no-repeat;
      transform: rotate(-3.84deg);
    }
  }
`;
