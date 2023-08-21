import { Form } from 'antd';
import styled from '@emotion/styled';

export const StyledBannerManager = styled(Form)`
  .sub-title {
    font-size: 12px;
    color: #999;
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-input {
    width: 85%;
    margin-bottom: 20px;
  }

  .minus-icon {
    height: 34px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .anticon-minus-circle {
    font-size: 18px;
  }

  .banner-title-speed-box {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .ant-slider {
      width: 85%;
    }
  }
`;
