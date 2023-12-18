// base
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledReference } from './style';

// containers
import { SearchBox } from 'containers';

// components
import { BlurImage } from 'components';

// modules
import { loadingState } from 'modules';
import { ArticleeApi, QUERY_GET_ALL_ARTICLES } from 'modules/article';
import {
  CategoryApi,
  CategoryListsProps,
  QUERY_GET_SUB_CATEGORY,
  ResponseSubCategoryLists
} from 'modules/category';

// consts
import { ROUTE_REFERENCE } from 'consts';

// libraries
import { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';

interface ReferenceProps {}

export const Reference: React.FC<ReferenceProps> = () => {
  const [searchQuery, setSearchQuery] = useState<any>(undefined);

  const loading = useRecoilValue(loadingState);

  const router = useRouter();

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

        const result = data.result.subCategories.map((category) => ({
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

  const { data: articles } = useQuery(
    [QUERY_GET_ALL_ARTICLES, searchQuery],
    async ({ queryKey }) => {
      const [key, searchQuery] = queryKey;

      console.log('== key == : ', key);

      if (searchQuery) {
        return await articleApi.getClientAllArticles(searchQuery);
      }

      return await articleApi.getClientAllArticles();
    },
    {
      select: (data) => {
        return data.result;
      }
    }
  );

  const dataSource = useMemo(() => {
    if (!articles) return [];

    return articles.articles;
  }, [articles]);

  const onChangeCategory = (value: string) => {
    setSearchQuery({
      ...searchQuery,
      where__category__id: value
    });
  };

  const onChangeOrder = (value: string) => {
    setSearchQuery({
      ...searchQuery,
      order__createdAt: value
    });
  };

  const onRouterDetail = (id: string) => {
    console.log('== loading == : ', loading);
    router.push(`${ROUTE_REFERENCE}/${id}`);
  };

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
            {thumbnails && thumbnails.length > 0 && (
              <BlurImage src={thumbnails[0].location} alt={`${title} 이미지`} />
            )}
          </div>
        ))}
      </div>
    </StyledReference>
  );
};
