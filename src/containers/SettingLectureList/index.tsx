// base
import React, { Key, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledSettingLectureList } from './style';

// components
import { BlurImage, PaginationTable } from 'components';

// modules
import { ResponseLecture } from 'modules';

// queries
import { useLectureList } from 'queries';

// consts
import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_SKIP,
  ROUTE_ADMIN_LECTURE_DETAIL
} from 'consts';

// enums
import { LectureTypes } from 'enums';

// libraries
import moment from 'moment';
import { Button, Switch, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export const SettingLectureList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const router = useRouter();

  const {
    data: dataSource,
    update,
    deleteLectureId
  } = useLectureList({
    skip: DEFAULT_SKIP,
    limit: 1000,
    type: 'reference',
    where: {
      projectType: 'all',
      positionType: 'all',
      skillType: 'all',
      order: 'descend'
    }
  });

  const handleExposeChange = useCallback(
    (record: ResponseLecture) => {
      const result = {
        ...record,
        expose: !record.expose
      };

      update(result);
    },
    [update]
  );

  const handleDelete = useCallback(async () => {
    if (!dataSource || selectedRowKeys.length <= 0) return;

    try {
      const deletedItem = dataSource.filter((f) =>
        selectedRowKeys.includes(f.key)
      );

      await Promise.all(deletedItem.map(({ id }) => deleteLectureId(id)));

      setSelectedRowKeys([]);
      return;
    } catch (error) {
      console.log(error);
    }
  }, [dataSource, deleteLectureId, selectedRowKeys]);

  const handleDetail = useCallback(
    (id: string) => {
      router.replace({
        pathname: ROUTE_ADMIN_LECTURE_DETAIL,
        query: {
          id
        }
      });
    },
    [router]
  );

  const columns = useMemo(() => {
    const result: ColumnsType<ResponseLecture> = [
      {
        title: '등록일',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: 180,
        render: (created) => moment(created).format(DEFAULT_DATE_FORMAT)
      },
      {
        title: '게시판명',
        dataIndex: 'group',
        key: 'group',
        render: (group) => LectureTypes.getLectureKor(group)
      },
      {
        title: '게시글명',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '썸네일',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        width: 300,
        render: (record) => (
          <div className="thumb-box">
            {record?.thumbUrl ? (
              <BlurImage src={record.thumbUrl} alt="게시글 썸네일" />
            ) : (
              '-'
            )}
          </div>
        )
      },
      {
        title: '태그',
        dataIndex: 'tags',
        key: 'tags',
        render: (tags) => (
          <div className="tag-box">
            {tags.map((tag: string) => (
              <Tag key={tag} color="#108ee9">
                {tag}
              </Tag>
            ))}
          </div>
        )
      },
      {
        title: '노출여부',
        dataIndex: 'expose',
        key: 'expose',
        render: (expose, record) => {
          return (
            <Switch
              checked={expose}
              onChange={() => handleExposeChange(record)}
            />
          );
        }
      },
      {
        title: '상세보기',
        render: (text) => (
          <div
            onClick={() => handleDetail(text.id)}
            style={{ color: '#108ee9', cursor: 'pointer' }}
          >
            상세보기
          </div>
        )
      }
    ];

    return result;
  }, [handleDetail, handleExposeChange]);

  const onChangeSelectedRowKey = (selectRowKey: Key[]) => {
    setSelectedRowKeys(selectRowKey);
  };

  return (
    <StyledSettingLectureList>
      <div className="sll-wrapper">
        <PaginationTable
          noAsync
          noSort
          columns={columns}
          dataSource={dataSource || []}
          customLeft={<Button onClick={handleDelete}>삭제</Button>}
          customRight={
            <Button
              type="primary"
              onClick={() => router.replace(ROUTE_ADMIN_LECTURE_DETAIL)}
            >
              게시글 생성
            </Button>
          }
          rowKey="key"
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => {
              onChangeSelectedRowKey(selectedRowKeys);
            }
          }}
          // pagination={{
          //   ...pagination,
          //   showSizeChanger: false,
          //   current: pagination.current,
          //   pageSize: pagination.pageSize
          // }}
          // onChangePageSize={onChangePageSize}
        />
      </div>
    </StyledSettingLectureList>
  );
};
