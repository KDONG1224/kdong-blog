// base
import React from 'react';
// import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';
import Head from 'next/head';

// const DynamicEditor = dynamic(
//   () =>
//     import('../../components/TextEditors/BasicTextEditor').then(
//       (mod) => mod.BasicTextEditor
//     ),
//   { ssr: false }
// );

export interface ReferenceContentPageProps {
  article: ArticleListsProps;
}

const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
  article
}) => {
  // const [isEditorReady, setIsEditorReady] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setIsEditorReady(true);
  //   }
  // }, []);

  console.log('== article == : ', article);

  return (
    <>
      <Head>
        {/* title */}
        <title>KDONG - {article.title}</title>
      </Head>
      <MainLayout noFooter>
        <ContentLayout title="레퍼런스 콘텐츠" contents={article}>
          {/* {isEditorReady && (
            <DynamicEditor
              isEditorReady={isEditorReady}
              editorData={article.content}
            />
          )} */}
          <div>{JSON.stringify(article)}</div>
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
