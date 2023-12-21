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
import { ResponseArticleDetailResultProps, ArticleeApi } from 'modules/article';

// utils
import { removeHtmlTags } from 'utils';

export interface ReferenceContentPageProps {
  article: ResponseArticleDetailResultProps;
}

const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
  article
}) => {
  return (
    <>
      <CustomSeo
        title={`KDONG - ${article.currentPost.title}`}
        og={{
          title: article.currentPost.title,
          description: removeHtmlTags(article.currentPost.content),
          url: `https://kdong.dev/reference/${article.currentPost.id}`,
          image: article.currentPost.thumbnails[0].location
        }}
        twitter={{
          title: article.currentPost.title,
          description: removeHtmlTags(article.currentPost.content),
          image: article.currentPost.thumbnails[0].location
        }}
      />
      <MainLayout noFooter>
        <ContentLayout title="레퍼런스 콘텐츠" contents={article.currentPost}>
          <EditorViewText
            content={article.currentPost.content}
            prevContent={article?.prevPost}
            nextContent={article?.nextPost}
          />
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
