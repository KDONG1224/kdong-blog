// base
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';
import Head from 'next/head';

const DynamicEditor = dynamic(
  () =>
    import('../../components/TextEditors/BasicTextEditor').then(
      (mod) => mod.BasicTextEditor
    ),
  { ssr: false }
);

export interface ReferenceContentPageProps {
  article: ArticleListsProps;
}

const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
  article
}) => {
  const [isEditorReady, setIsEditorReady] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsEditorReady(true);
    }
  }, []);

  console.log('== article == : ', article);

  return (
    <>
      <Head>
        {/* twitter */}
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.content} />
        <meta name="twitter:image" content={article.thumbnails[0].location} />

        {/* og */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content} />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:image" content={article.thumbnails[0].location} />

        {/* title */}
        <title>KDONG - {article.title}</title>
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
  console.log('=== query === : ', query);

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
    }

    return {
      props: {
        article: article.result
      }
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true
    };
  }
};

export default ReferenceContentPage;
