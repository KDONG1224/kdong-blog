import { Collapse } from 'antd';
import styled from 'styled-components';

interface StyledBasicCollapseProps {
  $ismobile: boolean;
}

export const StyledBasicCollapse = styled(Collapse)<StyledBasicCollapseProps>`
  width: ${({ $ismobile }) => ($ismobile ? '100%' : '1000px')};
  border: none;
  border-top: 2px solid #000;
  background: #fff !important;
  border-radius: 0 !important;

  .ant-collapse-item {
    border: none;
    border-radius: 0 !important;
    border-bottom: 2px solid #000;

    .ant-collapse-header {
      font-family: Pretendard-Medium;
      font-size: ${({ $ismobile }) => ($ismobile ? '14px' : '22px')};
      border-radius: 0 !important;

      .ant-collapse-expand-icon {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
        padding: ${({ $ismobile }) => ($ismobile ? '6px' : '12px 16px')};

        > span {
          svg {
            font-size: ${({ $ismobile }) => ($ismobile ? '14px' : '14px')};
          }
        }
      }
    }

    .ant-collapse-content {
      border-top: none;
      font-family: Pretendard-Regular;
      font-size: ${({ $ismobile }) => ($ismobile ? '14px' : '22px')};
      text-indent: ${({ $ismobile }) => $ismobile && '-0px'};
      padding-left: ${({ $ismobile }) => $ismobile && '10px'};
      line-height: 1.3;
    }
  }

  .basic-collapse-expand-icon {
    .basic-collapse-expand-icon-btn {
      width: ${({ $ismobile }) => ($ismobile ? '12px' : '15px')};
      height: ${({ $ismobile }) => ($ismobile ? '12px' : '15px')};
      cursor: pointer;
      background-color: #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: #fff;
      position: relative;

      &::before {
        content: '+';
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 12px;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
