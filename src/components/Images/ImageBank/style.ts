import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const StyledImageBank = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .bank-wrapper {
    position: relative;

    &-row {
      &-col {
        display: flex;
        align-items: center;
        gap: 5px;

        &.add {
          margin: 5px;
        }

        &-box {
          width: 150px;
          height: 150px;
          position: relative;

          > img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const StyledAddImageWrap = styled.div`
  width: 150px;
  height: 150px;
  border: 1px dashed #ddd;
  background: #fafafa;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 5px 5px 0; */
  cursor: pointer;
  vertical-align: top;
  background-color: #f5f5f5;
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  font-size: 20px;
  color: #bdbdbd;
  line-height: 150px;
  padding: 0 65px 0 65px;
`;

export const StyledCloseOutlined = styled(CloseOutlined)`
  position: absolute;
  background-color: #f5222d;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  top: 0;
  right: 0;
  padding: 3px;
  z-index: 1000;
`;
