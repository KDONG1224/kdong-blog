/* eslint-disable @typescript-eslint/no-unused-vars */
// base
import React from 'react';

// style
import { StyledImageBankListThumb } from './style';
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Card, Checkbox, Tag, Button } from 'antd';
// import { ImageBankListProps } from 'modules';
import { DEFAULT_DATE_FORMAT } from 'consts';
import { format } from 'path';
import dayjs from 'dayjs';
import { BlurImage } from 'components';

interface ImageBankListThumbProps {
  selectButton: boolean;
  imageList: any[];
  selectKey: string[] | number[];
  onSelectKey: (selectedRowKeys: string[]) => void;
  onDownload: (url: string) => void;
}

export const ImageBankListThumb: React.FC<ImageBankListThumbProps> = ({
  imageList = [],
  selectButton,
  selectKey,
  onSelectKey,
  onDownload
  // onChange
}) => {
  return (
    <StyledImageBankListThumb>
      <div className="iblt-wrapper">
        <Row gutter={[15, 15]}>
          {imageList.map((item, i) => {
            const contentType = item.contentType
              ? item.contentType.split('/')[1].toLocaleLowerCase()
              : '-';

            const lastUpdate = dayjs(item.lastModified).format(
              DEFAULT_DATE_FORMAT
            );

            return (
              <Col className="imagebank-item" span={6} key={i}>
                <Card
                  title={
                    <div className="imagebank-thumbnail-list__header">
                      <div>
                        {/* <Checkbox
                          onChange={(e) => {
                            if (!e.target.checked) {
                              onSelectKey(
                                selectKey.filter((keys) => keys !== item.rowKey)
                              );
                            } else {
                              onSelectKey(selectKey.concat(item.rowKey));
                            }
                          }}
                          checked={getChecked(item.rowKey)}
                        /> */}
                      </div>
                      <div className="imagebank-thumbnail-list__tag">
                        <Tag>{contentType}</Tag>
                      </div>
                    </div>
                  }
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 10
                  }}
                  headStyle={{
                    margin: 0,
                    padding: 0
                  }}
                  bodyStyle={{
                    padding: 0
                  }}
                  cover={
                    <div className="imagebank-thumbnail-list__body">
                      <div className="imagebank-thumbnail-list__body-wrapper">
                        <div>
                          <BlurImage src={item.thumbUrl} alt="" />
                          <DownloadOutlined
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              zIndex: 101,
                              fontSize: 60,
                              lineHeight: 4.5,
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              cursor: 'pointer',
                              color: '#fff'
                            }}
                            // onClick={() => onDownload(img?.url || '')}
                          />
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="imagebank-thumbnail-list__contents">
                    <Tag
                      style={{
                        whiteSpace: 'normal',
                        wordBreak: 'break-all',
                        marginBottom: 5
                      }}
                    >
                      {item.contentType}
                    </Tag>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </StyledImageBankListThumb>
  );
};
