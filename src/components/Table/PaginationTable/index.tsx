import React, { useMemo, useState, useEffect, useRef } from 'react';

import { Table, Button, Select, Row, Col, Space } from 'antd';
import { TableProps, ColumnsType } from 'antd/lib/table';
import { PaginationProps } from 'antd/lib/pagination';
import { DEFAULT_PAGE, DEFAULT_PAGE_SELCET, DEFAULT_PAGE_SIZE } from 'consts';

interface PaginationTableProps<T> extends TableProps<T> {
  noAsync?: boolean;
  noIndex?: boolean;
  columns: ColumnsType<T>;
  dataSource: T[];
  customLeft?: React.ReactNode;
  customRight?: React.ReactNode;
  showPageSize?: boolean;
  showReference?: boolean;
  showRowSelection?: boolean;
  onChangePageSize?: (v: { page: number; pageSize: number }) => void;
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
    columns,
    dataSource,
    customLeft,
    customRight,
    showPageSize = true,
    showReference = true,
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
      const chang = {
        page: DEFAULT_PAGE,
        pageSize
      };
      onChangePageSize(chang);
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
    <>
      {/* {pagination.total !== null && (
        <div
          style={{
            borderBottom: '1px solid #666',
            margin: '15px 0 10px 0'
          }}
        >
          <span>검색결과 총 {pagination.total} 건</span>
        </div>
      )} */}
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
                {DEFAULT_PAGE_SELCET.map((size) => (
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
        rowSelection={rowSelection}
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
                index: i + 1
                // pagination.total -
                // i -
                // (pagination.current * pagination.pageSize -
                //   pagination.pageSize)
              }))
            : dataSource.map((item, i) => ({
                ...item,
                index: pagination.total - i
              }))
        }
      />
    </>
  );
};
