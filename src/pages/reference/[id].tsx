// base
import React from 'react';
import { GetServerSideProps } from 'next';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// components
import { EditorViewText } from 'components';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';

// utils
import { removeHtmlTags } from 'utils';

export interface ReferenceContentPageProps {
  article: ArticleListsProps;
}

const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
  article
}) => {
  return (
    <>
      <CustomSeo
        title={`KDONG - ${article.title}`}
        og={{
          title: article.title,
          description: removeHtmlTags(article.content),
          url: `https://kdong.dev/reference/${article.id}`,
          image: article.thumbnails[0].location
        }}
        twitter={{
          title: article.title,
          description: removeHtmlTags(article.content),
          image: article.thumbnails[0].location
        }}
      />
      <MainLayout noFooter>
        <ContentLayout title="레퍼런스 콘텐츠" contents={article}>
          <EditorViewText content={article.content} />
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  if (!id || typeof id !== 'string') {
    return {
      notFound: true
    };
  }

  try {
    const articleApi = new ArticleeApi();
    const article = await articleApi.getArticleById(id);

    if (!article || !article.result) {
      return {
        notFound: true
      };
    } else {
      return {
        props: {
          article: article.result
        }
      };
    }
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};

export default ReferenceContentPage;
