import styled from '@emotion/styled';

export const StyledBasicSelect = styled.div`
  width: 100%;
  font-family: Pretendard-Bold;
  font-size: 16px;

  &.ant-select-focused {
    border: none !important;
  }

  .ant-select-selector {
    border-color: #000 !important;
    border: 0 !important;
    border-radius: 0 !important;
    border-bottom: 2px solid #000 !important;
    padding: 5px !important;
    box-shadow: none !important;
    height: 40px !important;
  }

  .ant-select-arrow {
    color: #000 !important;
  }
`;
