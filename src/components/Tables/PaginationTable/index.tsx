/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
// base
import React, { useMemo, useState, useEffect, useRef } from 'react';

// style
import { StyledPaginationTable } from './style';

// consts
import { DEFAULT_PAGE_SIZE, pageSizeRange } from 'consts';

// libraries
import { Table, Button, Select, Row, Col, Space } from 'antd';
import { TableProps, ColumnsType } from 'antd/lib/table';
import { PaginationProps } from 'antd/lib/pagination';

interface PaginationTableProps<T> extends TableProps<T> {
  noAsync?: boolean;
  noIndex?: boolean;
  noSort?: boolean;
  columns: ColumnsType<T>;
  dataSource: T[];
  customLeft?: React.ReactNode;
  customRight?: React.ReactNode;
  showPageSize?: boolean;
  showRowSelection?: boolean;
  onChangePageSize?: (page: number, pageSize: number) => void;
  onChangeExpose?: (value: boolean) => void;
}

interface Pagination extends PaginationProps {
  total: number;
  current: number;
  pageSize: number;
  showSizeChanger: boolean;
}

export const PaginationTable = <T extends {}>(
  props: PaginationTableProps<T>
) => {
  const {
    noAsync = false,
    noIndex = false,
    noSort = false,
    columns,
    dataSource,
    customLeft,
    customRight,
    showPageSize = true,
    showRowSelection = true,
    onChangePageSize,
    onChangeExpose,
    ...tableOptions
  } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const hasSelected = useMemo(() => {
    return selectedRowKeys.length > 0;
  }, [selectedRowKeys]);

  const pagination = useMemo<Pagination>(() => {
    return {
      total: 0,
      current: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      showSizeChanger: false,
      ...tableOptions.pagination
    };
  }, [tableOptions.pagination]);

  const rowSelection = useMemo(() => {
    if (showRowSelection) {
      return {
        selectedRowKeys,
        onChange: (value: React.ReactText[]) => {
          setSelectedRowKeys(value as string[]);
        },
        ...tableOptions.rowSelection
      };
    } else {
      return;
    }
  }, [tableOptions.rowSelection, selectedRowKeys, showRowSelection]);

  const handleChangePageSize = (pageSize: number) => {
    if (onChangePageSize) {
      onChangePageSize(1, pageSize);
    }
  };

  const dataSourceRef = useRef(dataSource);

  useEffect(() => {
    if (dataSourceRef.current.length === dataSource.length) {
      return;
    }

    if (pagination.total && dataSource.length === 0) {
      if (pagination.onChange) {
        pagination.onChange(
          pagination.current > 1 ? pagination.current - 1 : 1,
          pagination.pageSize
        );
      }
    }
  }, [pagination, dataSource]);

  useEffect(() => {
    dataSourceRef.current = dataSource;
  }, [dataSource]);

  return (
    <StyledPaginationTable>
      {pagination.total !== null && (
        <div
          style={{
            borderBottom: '1px solid #666',
            margin: '15px 0 30px 0'
          }}
        >
          <span>
            * 총{' '}
            <span
              style={{
                fontSize: 18,
                color: 'red',
                fontFamily: 'Pretendard-Bold',
                paddingRight: 4
              }}
            >
              {pagination.total || dataSource.length}
            </span>
            건의 게시물이 등록되어 있습니다.
          </span>{' '}
        </div>
      )}
      <Row style={{ marginBottom: 10 }} justify="space-between">
        <Col>
          <Space size={5}>
            {onChangeExpose && (
              <>
                <Button
                  onClick={() => onChangeExpose(true)}
                  type="primary"
                  disabled={!hasSelected}
                >
                  선택 공개
                </Button>
                <Button
                  type="primary"
                  onClick={() => onChangeExpose(false)}
                  danger
                  disabled={!hasSelected}
                >
                  선택 비공개
                </Button>
              </>
            )}

            {customLeft}
          </Space>
        </Col>
        <Col>
          <Space size={5}>
            {customRight}
            {showPageSize && (
              <Select
                style={{ width: 150, marginLeft: 5 }}
                defaultValue={DEFAULT_PAGE_SIZE}
                value={pagination.pageSize ? pagination.pageSize : undefined}
                onChange={handleChangePageSize}
              >
                {pageSizeRange.map((size) => (
                  <Select.Option key={size} value={size}>
                    {size}개씩 보기
                  </Select.Option>
                ))}
              </Select>
            )}
          </Space>
        </Col>
      </Row>
      <Table
        {...tableOptions}
        pagination={pagination}
        // rowSelection={rowSelection}
        columns={
          noIndex
            ? columns
            : [
                {
                  title: 'No',
                  dataIndex: 'index',
                  key: 'index'
                },
                ...columns
              ]
        }
        dataSource={
          !noAsync && dataSource.length
            ? dataSource.map((item, i) => ({
                ...item,
                index:
                  pagination.total -
                  i -
                  (pagination.current * pagination.pageSize -
                    pagination.pageSize)
              }))
            : noSort
            ? dataSource.map((item, i) => ({
                ...item,
                index: i + 1
              }))
            : dataSource.map((item, i) => ({
                ...item,
                index: pagination.total - i
              }))
        }
      />
    </StyledPaginationTable>
  );
};
