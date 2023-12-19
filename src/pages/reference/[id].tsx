// base
import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';
import Head from 'next/head';
import dynamic from 'next/dynamic';

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
      <Head>
        {/* 기본 메타 태그 */}
        <title>KDONG - {article.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Open Graph / Facebook 메타 태그 */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content} />
        <meta
          property="og:url"
          content={`https://kdong.dev/reference/${article.id}`}
        />
        <meta property="og:image" content={article.thumbnails[0].location} />

        {/* Twitter 메타 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.content} />
        <meta name="twitter:image" content={article.thumbnails[0].location} />
      </Head>
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
