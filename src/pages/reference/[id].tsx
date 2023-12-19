// // base
// import React from 'react';
// // import dynamic from 'next/dynamic';
// import { GetServerSideProps } from 'next';

// // layouts
// import { ContentLayout, MainLayout } from 'layouts';

// // modules
// import { ArticleListsProps, ArticleeApi } from 'modules/article';
// import Head from 'next/head';
// import { htmlToString } from 'utils';

// // const DynamicEditor = dynamic(
// //   () =>
// //     import('../../components/TextEditors/BasicTextEditor').then(
// //       (mod) => mod.BasicTextEditor
// //     ),
// //   { ssr: false }
// // );

// export interface ReferenceContentPageProps {
//   article: ArticleListsProps;
// }

// const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
//   article
// }) => {
//   // const [isEditorReady, setIsEditorReady] = useState(false);

//   // useEffect(() => {
//   //   if (typeof window !== 'undefined') {
//   //     setIsEditorReady(true);
//   //   }
//   // }, []);

//   console.log('== article == : ', article);

//   return (
//     <>
//       <Head>
//         {/* title */}
//         <title>KDONG - {article.title}</title>
//       </Head>

//       <Head>
//         {/* twitter */}
//         <meta
//           name="twitter:title"
//           key="twitter:title"
//           content={article.title}
//         />
//         <meta
//           name="twitter:description"
//           key="twitter:description"
//           content={htmlToString(article.content)}
//         />
//         <meta
//           name="twitter:image"
//           key="twitter:image"
//           content={article.thumbnails[0].location}
//         />

//         {/* og */}
//         <meta property="og:title" key="og:title" content={article.title} />
//         <meta
//           property="og:description"
//           key="og:description"
//           content={htmlToString(article.content)}
//         />
//         <meta
//           property="og:url"
//           key="og:url"
//           // content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
//           content="https://kdong.dev"
//         />
//         <meta
//           property="og:image"
//           key="og:image"
//           content={article.thumbnails[0].location}
//         />
//       </Head>
//       <MainLayout noFooter>
//         <ContentLayout title="레퍼런스 콘텐츠" contents={article}>
//           {/* {isEditorReady && (
//             <DynamicEditor
//               isEditorReady={isEditorReady}
//               editorData={article.content}
//             />
//           )} */}
//           <div>{JSON.stringify(article)}</div>
//         </ContentLayout>
//       </MainLayout>
//     </>
//   );
// };

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
//     }

//     return {
//       props: {
//         article: article.result
//       }
//     };
//   } catch (error) {
//     console.error(error);

//     return {
//       notFound: true
//     };
//   }
// };

// export default ReferenceContentPage;

// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { ContentLayout, MainLayout } from 'layouts';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';
import Head from 'next/head';
import { htmlToString } from 'utils';

export interface ReferenceContentPageProps {
  article: ArticleListsProps;
}

const ReferenceContentPage: React.FC<ReferenceContentPageProps> = ({
  article
}) => {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>KDONG - {article.title}</title>
        <meta charSet="utf-8" />
        <meta name="author" content="KDONG" />
        <meta
          name="description"
          content="밥값하는 프론트엔드 개발자 크동의 블로그 입니다. 공부하고 공유하고 싶은 내용을 작성합니다. 부족하지만, 성장하는 개발자가 되겠습니다."
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={htmlToString(article.content)}
        />
        <meta property="og:url" content={`https://kdong.dev${article.url}`} />
        <meta property="og:image" content={article.thumbnails[0].location} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={article.title} />
        <meta
          name="twitter:description"
          content={htmlToString(article.content)}
        />
        <meta name="twitter:image" content={article.thumbnails[0].location} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MainLayout noFooter>
        <ContentLayout title="레퍼런스 콘텐츠" contents={article}>
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
