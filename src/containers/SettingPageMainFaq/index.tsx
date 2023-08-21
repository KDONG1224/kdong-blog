// base
import React, { useCallback, useMemo, useState } from 'react';

// style
import { StyledSettingPageMainFaq } from './style';

// containers
import { SettingPageMAinFaqAddModal } from 'containers';

// components
import { PaginationTable } from 'components';

// modules
import {
  AuthApi,
  MainFaqProps,
  ResponseProfile,
  kdongProfileState
} from 'modules';

// consts
import { changeKorFaqType } from 'consts';

// libraries
import { useRecoilState } from 'recoil';
import { Button, Modal } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import nProgress from 'nprogress';

export const SettingPageMainFaq = () => {
  const [isProfile, setIsProfile] = useRecoilState(kdongProfileState);

  const [faqContent, setFaqContent] = useState<MainFaqProps | undefined>(
    undefined
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [faqContentsCreate, setFaqContentsCreate] = useState<boolean>(true);
  const [showContentAddModal, setShowContentAddModal] =
    useState<boolean>(false);

  const queryClient = useQueryClient();

  const authApi = useMemo(() => {
    return new AuthApi();
  }, []);

  const createKdongProfile = (data: ResponseProfile) => {
    if (!authApi) return Promise.reject({});

    return authApi.createKdongProfile(data);
  };

  const { mutate: createProfile } = useMutation<
    ResponseProfile,
    unknown,
    ResponseProfile
  >((data: ResponseProfile) => createKdongProfile(data), {
    onMutate: async () => {
      await queryClient.cancelQueries(['QUERY_KDONG_PROFILE_CREATE']);
      nProgress.start();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['QUERY_KDONG_PROFILE_CREATE']);

      setIsProfile(data);
      setSelectedRowKeys([]);

      nProgress.done();
    },
    onError: (_, __, context: any) => {
      queryClient.setQueryData(['QUERY_KDONG_PROFILE_CREATE'], context.prev);
    }
  });

  const handelShowContentAddModal = useCallback((recode: MainFaqProps) => {
    setFaqContent(recode);
    setFaqContentsCreate(false);
    handleContentAddMobal();
  }, []);

  const handleShowContentCreate = () => {
    setFaqContentsCreate(true);
    handleContentAddMobal();
  };

  const handleContentAddMobal = () => {
    setShowContentAddModal((prev) => !prev);
  };

  const onDeleteFaq = () => {
    if (selectedRowKeys.length <= 0 || !isProfile) return;

    Modal.confirm({
      title: `해당 질문을 삭제 하시겠습니까?`,
      okText: '삭제',
      cancelText: '취소',
      centered: true,
      onOk: () => {
        const faqList = [...isProfile.faq];

        const deletedFaq = faqList.filter(
          (f) => !selectedRowKeys.includes(f.seq)
        );
        const changeSeq = deletedFaq.map((faq, idx) => ({
          ...faq,
          seq: idx + 1
        }));

        const result = {
          ...isProfile,
          faq: changeSeq
        };

        createProfile(result);
      }
    });
  };

  const onSubmit = (values: MainFaqProps[]) => {
    if (!values) return;

    const result = {
      ...isProfile,
      faq: values
    };

    createProfile(result);
  };

  const columns: Array<ColumnProps<MainFaqProps>> = [
    {
      title: '분류',
      dataIndex: 'faqType',
      key: 'faqType',
      width: '10%',
      render: (_, recode) => {
        return changeKorFaqType(recode.faqType);
      }
    },
    {
      title: '질문',
      dataIndex: 'question',
      key: 'question',
      width: '30%'
    },
    {
      title: '답변',
      dataIndex: 'answer',
      key: 'answer',
      width: '40%'
    },
    {
      title: '수정하기',
      dataIndex: 'seq',
      key: 'seq',
      width: '10%',
      render: (_, recode) => (
        <Button
          style={{ marginRight: '5px' }}
          type="primary"
          onClick={() => handelShowContentAddModal(recode)}
        >
          수정
        </Button>
      )
    }
  ];

  const dataSource = useMemo(() => {
    if (!isProfile) return [];

    return isProfile.faq;
  }, [isProfile]);

  return (
    <StyledSettingPageMainFaq>
      <div className="spmf-wrapper">
        <PaginationTable
          noAsync
          noSort
          rowKey="seq"
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => {
              setSelectedRowKeys(selectedRowKeys as number[]);
            }
          }}
          customLeft={
            <Button
              type="primary"
              danger
              disabled={selectedRowKeys.length <= 0}
              onClick={onDeleteFaq}
            >
              삭제
            </Button>
          }
          customRight={
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleShowContentCreate}
            >
              신규 등록
            </Button>
          }
          // pagination={{
          //   ...pagination,
          //   showSizeChanger: false,
          //   current: pagination.current,
          //   pageSize: pagination.pageSize
          // }}

          // onChangePageSize={onChangePageSize}
        />
      </div>
      {showContentAddModal && (
        <SettingPageMAinFaqAddModal
          visible={showContentAddModal}
          onCancel={() => {
            setFaqContent(undefined);
            setShowContentAddModal(false);
          }}
          onSubmit={onSubmit}
          faqList={isProfile?.faq}
          faq={faqContent === undefined ? undefined : faqContent}
          create={faqContentsCreate}
        />
      )}
    </StyledSettingPageMainFaq>
  );
};
