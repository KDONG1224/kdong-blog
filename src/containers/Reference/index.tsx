// base
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledReference } from './style';

// containers
import { SearchBox } from 'containers';

// components
import { BlurImage } from 'components';

// modules
import { ArticleeApi, QUERY_GET_ALL_ARTICLES } from 'modules/article';
import {
  CategoryApi,
  CategoryListsProps,
  QUERY_GET_SUB_CATEGORY,
  ResponseSubCategoryLists
} from 'modules/category';

// hooks
import { usePagination } from 'hooks';

// consts
import { ROUTE_REFERENCE } from 'consts';

// libraries
import { Button } from 'antd';
import nProgress from 'nprogress';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

interface ReferenceProps {}

export const Reference: React.FC<ReferenceProps> = () => {
  const [searchQuery, setSearchQuery] = useState<any>(undefined);
  const [articleLists, setarticleLists] = useState<any[]>([]);
  const [totalElements, setTotalElements] = useState<number>(0);

  const router = useRouter();

  const { pagination, onChangePageSize } = usePagination({
    totalElement: totalElements
  });

  const articleApi = useMemo(() => {
    return new ArticleeApi();
  }, []);

  const categoryApi = useMemo(() => {
    return new CategoryApi();
  }, []);

  const { data: categories } = useQuery<
    ResponseSubCategoryLists,
    AxiosError,
    CategoryListsProps[]
  >(
    [QUERY_GET_SUB_CATEGORY],
    async () => {
      return await categoryApi.getAllSubCategories();
    },
    {
      select: (data) => {
        const all = {
          key: 'all',
          label: '전체',
          value: 'all'
        };

        const result = data.result.subCategories
          .filter((x) => x.categoryNumber === 2)
          .map((category) => ({
            ...category,
            label: category.categoryName,
            value: category.id
          }));

        return [all, ...result] as any[];
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  );

  const { data: resultLists } = useQuery(
    [QUERY_GET_ALL_ARTICLES, searchQuery, pagination.current],
    async ({ queryKey }) => {
      const [key, searchQuery] = queryKey;

      nProgress.start();
      console.log('== key == : ', key);

      if (searchQuery) {
        return await articleApi.getClientAllArticles(searchQuery);
      }

      setarticleLists([]);
      setTotalElements(0);
      onChangePageSize(0, pagination.pageSize);
      return await articleApi.getClientAllArticles();
    },
    {
      select: (data) => {
        return data.result;
      },
      onSuccess: () => nProgress.done(),
      onError: () => nProgress.done()
    }
  );

  const dataSource = useMemo(() => {
    if (!articleLists) return [];

    return articleLists;
  }, [articleLists]);

  const onInitValue = useCallback(() => {
    if (!resultLists) return;

    const { articles, total, currentTotal } = resultLists;

    if (total === 0 && currentTotal === 0) {
      setarticleLists([]);
      setTotalElements(0);
      return;
    }

    setarticleLists((prev) => [...prev, ...articles]);
    setTotalElements(total);
  }, [resultLists]);

  const onChangeCategory = (value: string) => {
    if (value === 'all') {
      setSearchQuery(undefined);
      return;
    }

    setSearchQuery((prev: any) => ({
      ...prev,
      page: 1,
      where__category__id: value
    }));
    onChangePageSize(0, pagination.pageSize);
  };

  const onChangeOrder = (value: string) => {
    setSearchQuery({
      ...searchQuery,
      order__createdAt: value
    });
    setarticleLists([]);
    setTotalElements(0);
    onChangePageSize(0, pagination.pageSize);
  };

  const onClickMore = () => {
    const page = pagination.current + 2;
    const pageSize = pagination.pageSize;

    onChangePageSize(page, pageSize);
    setSearchQuery({
      ...searchQuery,
      page
    });
  };

  const onRouterDetail = (id: string) => {
    router.push(`${ROUTE_REFERENCE}/${id}`);
  };

  useEffect(() => {
    onInitValue();
  }, [onInitValue]);

  return (
    <StyledReference>
      <SearchBox
        title="레퍼런스"
        filters={[
          {
            key: 'category',
            options: categories as any[],
            placeholder: '카테고리를 선택해주세요.',
            onChange: (value: string) => onChangeCategory(value)
          },
          {
            key: 'order',
            options: [
              {
                key: 'order__desc',
                label: '최근 등록순',
                value: 'DESC'
              },
              {
                key: 'order__asc',
                label: '오래된순',
                value: 'ASC'
              }
            ],
            placeholder: '최근 등록순',
            onChange: (value: string) => onChangeOrder(value)
          }
        ]}
      />
      <div className="refer-wrapper">
        {dataSource.map(({ id, thumbnails, title }) => (
          <div
            key={id}
            className="refer-wrapper-box"
            onClick={() => onRouterDetail(id)}
          >
            <div className="refer-wrapper-box-inner">
              <div className="refer-wrapper-box-inner-title">{title}</div>
            </div>
            {thumbnails && thumbnails.length > 0 && (
              <BlurImage src={thumbnails[0].location} alt={`${title} 이미지`} />
            )}
          </div>
        ))}

        {pagination.total === 0 && dataSource.length === 0 && (
          <div className="refer-wrapper-empty">
            <div className="refer-wrapper-empty-text">
              등록된 레퍼런스가 없습니다.
            </div>
          </div>
        )}

        {dataSource.length < pagination.total && (
          <div className="refer-wrapper-bottom">
            <Button onClick={onClickMore}>더보기</Button>
          </div>
        )}
      </div>
    </StyledReference>
  );
};
