// base
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';

// utils
import { htmlToString } from 'utils';

export interface ReferenceContentPageProps {
  article: ArticleListsProps;
}

const DynamicEditor = dynamic(
  () =>
    import('../../components/TextEditors/BasicTextEditor').then(
      (mod) => mod.BasicTextEditor
    ),
  { ssr: false }
);

const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
  article
}) => {
  const [isEditorReady, setIsEditorReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsEditorReady(true);
    }
  }, []);

  return (
    <>
      <CustomSeo
        title={`KDONG - ${article.title}`}
        og={{
          title: article.title,
          description: htmlToString(article.content),
          url: `https://kdong.dev/reference/${article.id}`,
          image: article.thumbnails[0].location
        }}
        twitter={{
          title: article.title,
          description: htmlToString(article.content),
          image: article.thumbnails[0].location
        }}
      />
      <MainLayout noFooter>
        <ContentLayout title="레퍼런스 콘텐츠" contents={article}>
          {isEditorReady && (
            <DynamicEditor
              isEditorReady={isEditorReady}
              editorData={article.content}
            />
          )}
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
