// base
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

// pages
import { CustomSeo } from 'pages/seo';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';

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

  return (
    <>
      <CustomSeo
        title={`KDONG - ${article.title}`}
        description={article.content}
        keywords={
          article.tags.map(({ name }) => name).join(', ') +
          'FrontEnd, BackEnd, React.JS, Next.JS, Nest.JS, TypeScript, 블로그, 개발자, 주니어, 주니어 개발자, 시니어, 시니어 개발자, 리액트, 타입스크립트, 개발자, 비전공, 전공'
        }
        twitter={{
          image: article.thumbnails[0].location
        }}
        og={{
          url: 'https://kdong.dev' + router.asPath,
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
