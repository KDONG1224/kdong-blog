// base
import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// containers
import { ReferenceDetail } from 'containers';

// modules
import { ResponseArticleDetailResultProps, ArticleeApi } from 'modules/article';

// utils
import { removeHtmlTags } from 'utils';

// libraries
import hljs from 'highlight.js';

export interface ReferenceContentPageProps {
  article: ResponseArticleDetailResultProps;
}

const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
  article
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      hljs.highlightAll();
    }
  }, []);

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
          <ReferenceDetail article={article} />
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const articleApi = new ArticleeApi();
  const articles = await articleApi.getAllArticlesXml();

  const paths = articles.result.articles.map(({ id }: { id: string }) => ({
    params: { id }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('== params == : ', params);

  const id = params?.id as string;

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
        },
        revalidate: 1000
      };
    }
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const { id } = query;
//   if (!id || typeof id !== 'string') {
//     return {
//       notFound: true
//     };
//   }

//   try {
//     const articleApi = new ArticleeApi();
//     const article = await articleApi.getArticleById(id);

//     if (!article || !article.result) {
//       return {
//         notFound: true
//       };
//     } else {
//       return {
//         props: {
//           article: article.result
//         }
//       };
//     }
//   } catch (error) {
//     console.error(error);
//     return {
//       notFound: true
//     };
//   }
// };

export default ReferenceContentPage;
