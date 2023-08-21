/* eslint-disable @typescript-eslint/no-unused-vars */
// base
import React, { useMemo } from 'react';

// style
import { StyledImageBankListTable } from './style';

// components
import { BlurImage } from 'components';

// modules
// import { ImageBankListProps } from 'modules';

// consts
import { DEFAULT_DATE_FORMAT } from 'consts';

// libraries
import dayjs from 'dayjs';
import { Button, Table, Tag } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { TableRowSelection } from 'antd/lib/table/interface';
import { ColumnProps } from 'antd/lib/table';
import { useTableScroll } from 'hooks';

interface ImagebankTableDatasource {
  rowKey: string;
}

interface ImageBankListTableProps {
  selectButton: boolean;
  imageList: any[];
  selectKey: string[] | number[];
  onSelectKey: (selectedRowKeys: string[]) => void;
  onDownload: (url: string) => void;
}

export const ImageBankListTable: React.FC<ImageBankListTableProps> = ({
  imageList,
  selectKey,
  onSelectKey,
  onDownload
}) => {
  // const { scrollX, scrollY } = useTableScroll({ x: 300, y: 320 });

  const columns = useMemo<ColumnProps<any>[]>(
    () => [
      {
        title: '썸네일',
        align: 'center',
        dataIndex: 'thumbUrl',
        width: '40%',
        render: (_, record) => (
          <div className="imagebank-image-wrapper">
            <div className="imagebank-image-wrapper-box">
              <BlurImage
                src={record.thumbUrl}
                alt={`${record.bucketName} 이미지`}
              />
            </div>
          </div>
        )
      },
      {
        title: '포맷',
        align: 'center',
        width: '10%',
        render: (_, record) => {
          const { contentType } = record;

          return (
            <Tag>
              {contentType
                ? contentType.split('/')[1].toLocaleLowerCase()
                : '-'}
            </Tag>
          );
        }
      },
      {
        title: '마지막 수정',
        align: 'center',
        width: '30%',
        render: (_, record) => {
          const lastUpdate = dayjs(record.lastModified).format(
            DEFAULT_DATE_FORMAT
          );

          return <span>{lastUpdate}</span>;
        }
      },
      {
        title: '다운로드',
        align: 'center',
        width: '20%',
        render: (value, record) => (
          <Button
            style={{
              border: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent'
            }}
            onClick={() => onDownload(record.thumbUrl)}
          >
            <DownloadOutlined
              style={{
                fontSize: 30,
                cursor: 'pointer',
                color: '#555'
              }}
            />
          </Button>
        )
      }
    ],
    [onDownload]
  );

  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys: selectKey,
    onChange: (selectedRowKeys) => {
      onSelectKey(selectedRowKeys as string[]);
    }
  };

  return (
    <StyledImageBankListTable>
      <div className="iblt-wrapper">
        <Table
          dataSource={imageList.map((item, idx) => ({
            ...item,
            rowKey: String(idx + 1)
          }))}
          columns={columns}
          rowSelection={rowSelection}
          pagination={false}
          rowKey="rowKey"
          rowClassName="imagebank-item"
          // scroll={{ x: scrollX, y: scrollY }}
        />
      </div>
    </StyledImageBankListTable>
  );
};
