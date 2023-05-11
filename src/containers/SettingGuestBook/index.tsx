// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledSettingGuestBook } from './style';

// components
import { PaginationTable } from 'components';

// consts
import { ROUTE_ADMIN_GUEST_BOOK_DETAIL_WITH_ID } from 'consts';

export const SettingGuestBook = () => {
  const router = useRouter();

  const onClick = (key: number) => {
    router.push(ROUTE_ADMIN_GUEST_BOOK_DETAIL_WITH_ID(key));
  };
  return (
    <StyledSettingGuestBook>
      <div className="sgb-wrapper">
        <PaginationTable
          noAsync
          noSort
          columns={[
            {
              title: '이름',
              dataIndex: 'name',
              render: (text, record) => (
                <div onClick={() => onClick(record.key)}>{text}</div>
              )
            },
            {
              title: '멤버스번호',
              dataIndex: 'memberNo'
            },
            {
              title: '상태',
              dataIndex: 'status'
            }
          ]}
          dataSource={Array.from({ length: 100 }).map((v, i) => ({
            key: i + 1,
            name: `이름${i + 1}`,
            memberNo: i + 1,
            status: '정상'
          }))}
          // pagination={{
          //   ...pagination,
          //   showSizeChanger: false,
          //   current: pagination.current,
          //   pageSize: pagination.pageSize
          // }}
          rowKey="key"
          // rowSelection={{
          //   selectedRowKeys,
          //   onChange: (selectedRowKeys) => {
          //     onChangeSelectedRowKey(selectedRowKeys);
          //   }
          // }}
          // onChangePageSize={onChangePageSize}
        />
      </div>
    </StyledSettingGuestBook>
  );
};
