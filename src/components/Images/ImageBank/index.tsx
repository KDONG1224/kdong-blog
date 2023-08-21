// base
import React from 'react';

// style
import {
  StyledAddImageWrap,
  StyledCloseOutlined,
  StyledImageBank,
  StyledPlusOutlined
} from './style';

// components
import { BlurImage } from 'components';

// libraries
import { Col, Row } from 'antd';

// const activeBorder = '4px solid #f5222d';

interface ImageBankProps {
  fileList: {
    tags: string[];
    url: string;
    link: string;
    title: string;
    contents: string;
    expose: boolean;
  }[];
}

export const ImageBank: React.FC<ImageBankProps> = ({ fileList }) => {
  return (
    <StyledImageBank>
      <div className="bank-wrapper">
        <Row className="bank-wrapper-row">
          <Col className="bank-wrapper-row-col">
            {fileList.length > 0 &&
              fileList.map(({ url }, idx) => (
                <div className="bank-wrapper-row-col-box" key={idx}>
                  <BlurImage src={url} alt={`${idx} 이미지`} />
                  <StyledCloseOutlined />
                </div>
              ))}
          </Col>
          {fileList.length <= 4 && (
            <Col className="bank-wrapper-row-col add">
              <StyledAddImageWrap>
                <StyledPlusOutlined />
              </StyledAddImageWrap>
            </Col>
          )}
        </Row>
      </div>
    </StyledImageBank>
  );
};
