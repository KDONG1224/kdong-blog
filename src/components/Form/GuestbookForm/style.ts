// styled
import styled from 'styled-components';

// antd
import { Form } from 'antd';

export const StyledGuestbookForm = styled(Form)`
  .guestbook-wrapper {
    > div {
      display: flex;
      justify-content: center;
    }

    .guest-images {
      .ant-form-item-control-input-content {
        display: flex;
        align-items: center;
      }
    }

    textarea.ant-input {
      width: 350px;
      resize: none;
      height: 350px;
      border: 1px solid #aaaab6;
      padding: 30px;
    }

    .ant-form-item {
      margin-bottom: 0 !important;
    }
  }
`;
