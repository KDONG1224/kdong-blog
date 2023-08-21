/* eslint-disable @typescript-eslint/no-unused-vars */
// base
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// style
import { StyledImageBankList } from './style';

// containers
import { ImageBankListTable, ImageBankListThumb } from 'containers';

// modules
import {
  ImagebankApi,
  RequestImagBankList,
  ResponseImageBankListProps,
  ResponseImagebank,
  imagebankListState
} from 'modules';

// hooks
import { useInfiniteScroll, useScrollToNode } from 'hooks';

// consts
import { DEFAULT_LIMIT, DEFAULT_SKIP } from 'consts';

// libraries
import nProgress from 'nprogress';
import { useRecoilState } from 'recoil';
import { Button, Popconfirm, TabsProps, Tabs } from 'antd';
import { TableOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface ImageBankListProps {
  selectButton?: boolean;
}

export const ImageBankList: React.FC<ImageBankListProps> = ({
  selectButton = false
}) => {
  const [activeKey, setActiveKey] = useState<string>('table');
  const [selectKey, setSelectKey] = useState<string[]>([]);
  const [target, setTarget] = useState<Element | null>(null);
  const [isFilter, setIsFilter] = useState<RequestImagBankList>({
    skip: DEFAULT_SKIP,
    limit: DEFAULT_LIMIT
  });

  const [imagebankList, setImagebankList] = useRecoilState(imagebankListState);

  const queryClient = useQueryClient();

  const imagebankApi = useMemo(() => {
    return new ImagebankApi();
  }, []);

  const getImageList = useCallback(
    (filter: RequestImagBankList) => {
      if (!imagebankApi) return Promise.reject({});

      return imagebankApi.getImageListClient(filter);
    },
    [imagebankApi]
  );

  const deleteImage = (deleteId: string) => {
    if (!imagebankApi) return Promise.reject({});

    return imagebankApi.deleteImagebank(deleteId);
  };

  const { data } = useQuery(
    ['QUERY_IMAGEBANK_LIST'],
    () => getImageList(isFilter),
    {
      select: (data) => data,
      onSuccess: (data) => setImagebankList(data)
    }
  );

  const { mutate: imageMutate, isLoading } = useMutation<
    any,
    unknown,
    any,
    any
  >((filter) => getImageList(filter), {
    onMutate: async () => {
      await queryClient.cancelQueries(['QUERY_IMAGEBANK_LIST_MORE']);
      nProgress.start();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['QUERY_IMAGEBANK_LIST_MORE']);

      const result = [...imagebankList.imageList, ...data.imageList];

      setImagebankList({
        ...imagebankList,
        imageList: result
      });

      nProgress.done();

      setIsFilter({
        skip: isFilter.skip + DEFAULT_LIMIT,
        limit: DEFAULT_LIMIT
      });
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['QUERY_IMAGEBANK_LIST_MORE'], context.prev);
    }
  });

  const { mutate: deleteMutate } = useMutation<string, unknown, string, any>(
    (deleteId) => deleteImage(deleteId),
    {
      onMutate: async () => {
        await queryClient.cancelQueries(['QUERY_IMAGEBANK_LIST_DELETE']);
        nProgress.start();
      },
      onSuccess: (_, values) => {
        queryClient.invalidateQueries(['QUERY_IMAGEBANK_LIST_DELETE']);

        const unDeleted = imagebankList.imageList.filter(
          (i) => i.id !== values
        );

        setImagebankList({
          ...imagebankList,
          imageList: unDeleted
        });
        setSelectKey([]);

        nProgress.done();
      },
      onError: (_, __, context) => {
        queryClient.setQueryData(['QUERY_IMAGEBANK_LIST_DELETE'], context.prev);
      }
    }
  );

  const handleChangeTab = (activeKey: string) => {
    setActiveKey(activeKey);
  };

  const handleSelectKey = (selectedRowKeys: string[]) => {
    setSelectKey(selectedRowKeys);
  };

  const handleDelete = async () => {
    if (selectKey.length <= 0) return;

    try {
      const _delete: ResponseImageBankListProps[] = [];

      selectKey.forEach((key) => {
        _delete.push(imagebankList.imageList[Number(Number(key) - 1)]);
      });

      if (_delete.length <= 0) return;

      return await Promise.all(
        _delete.map((item) => {
          deleteMutate(item.id);
        })
      )
        .then(() => imageMutate(isFilter))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = useCallback((url: string) => {
    console.log('== handleDownload - url == : ', url);
    // if (_url.indexOf('couponpapa.io') > -1) {
    //   message.error('다운로드 할 수 없는 파일입니다');
    //   return;
    // }
    // setIsDownLoading(true);
    // const url = _url.substring(_url.indexOf('/upload') + 1, _url.length);
    // imageprocessesAPI
    //   .s3base64({ key: url })
    //   .then(data => {
    //     const link = document.createElement('a');
    //     link.href = data;
    //     link.download = url.substring(url.lastIndexOf('/') + 1, url.length);
    //     link.click();
    //   })
    //   .catch(() => {
    //     message.error('다운로드에 실패했습니다. 잠시 후 다시 시도해주세요');
    //   })
    //   .finally(() => {
    //     setIsDownLoading(false);
    //   });
  }, []);

  const onIntersect = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      if (entry.isIntersecting) {
        imageMutate({
          skip: isFilter.skip + DEFAULT_LIMIT,
          limit: DEFAULT_LIMIT
        });
      }
    },

    [imageMutate, isFilter]
  );

  const imagebankTabs: TabsProps['items'] = [
    {
      key: 'table',
      label: (
        <p>
          <TableOutlined />
          테이블
        </p>
      ),
      children: (
        <ImageBankListTable
          imageList={imagebankList.imageList}
          selectKey={selectKey}
          onSelectKey={handleSelectKey}
          onDownload={handleDownload}
          selectButton={false}
        />
      )
    },
    {
      key: 'thumbnail',
      label: (
        <p>
          <AppstoreOutlined />
          썸네일
        </p>
      ),
      disabled: true,
      children: (
        <ImageBankListThumb
          imageList={imagebankList.imageList}
          selectKey={selectKey}
          onSelectKey={handleSelectKey}
          onDownload={handleDownload}
          selectButton={false}
        />
      )
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll('.imagebank-item');

    setTarget(elements[elements.length - 1]);
  }, [activeKey]);

  useEffect(() => {
    if (imagebankList.imageList.length >= imagebankList.total) {
      setTarget(null);

      return;
    }

    if (!isLoading) {
      const elements = document.querySelectorAll('.imagebank-item');

      setTarget(elements[elements.length - 1]);
    }
  }, [getImageList, imagebankList, isFilter.skip, activeKey, isLoading]);

  useInfiniteScroll({
    root:
      typeof window === 'undefined'
        ? null
        : document.querySelector('.ant-layout-content'),
    target,
    threshold: 1,
    onIntersect
  });

  return (
    <StyledImageBankList>
      <div className="ibl-wrapper">
        <Tabs
          defaultActiveKey={activeKey}
          activeKey={activeKey}
          onChange={handleChangeTab}
          items={imagebankTabs}
        />
        <div className="ibl-wrapper-right">
          <Popconfirm
            title={`${selectKey.length}개의 이미지를 삭제하시겠습니까?`}
            okText="확인"
            cancelText="취소"
            onConfirm={handleDelete}
          >
            <Button disabled={selectKey.length === 0} type="primary" danger>
              삭제
            </Button>
          </Popconfirm>
        </div>
      </div>
    </StyledImageBankList>
  );
};
