// base
import React, { useMemo, useState } from 'react';

// style
import { StyledAlgorithm } from './style';

// containers
import { SearchBox } from 'containers';

// modules
import {
  CategoryApi,
  CategoryListsProps,
  QUERY_GET_SUB_CATEGORY,
  ResponseSubCategoryLists
} from 'modules/category';

// libraries
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

export const Algorithm = () => {
  const [searchQuery, setSearchQuery] = useState<any>(undefined);

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
          .filter((x) => x.categoryNumber === 3)
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
    // onChangePageSize(0, pagination.pageSize);
  };

  const onChangeOrder = (value: string) => {
    setSearchQuery({
      ...searchQuery,
      order__createdAt: value
    });
    // setarticleLists([]);
    // setTotalElements(0);
    // onChangePageSize(0, pagination.pageSize);
  };

  return (
    <StyledAlgorithm>
      <SearchBox
        title="알고리즘"
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
      <div className="algo-wrapper">
        {/* {pagination.total === 0 && dataSource.length === 0 && ( */}
        <div className="algo-wrapper-empty">
          <div className="algo-wrapper-empty-text">
            등록된 알고리즘이 없습니다.
          </div>
        </div>
        {/* )} */}

        {/* {dataSource.length < pagination.total && (
          <div className="refer-wrapper-bottom">
            <Button onClick={onClickMore}>더보기</Button>
          </div>
        )} */}
      </div>
    </StyledAlgorithm>
  );
};
