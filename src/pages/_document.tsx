import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

const MyDocument = () => (
  <Html lang="ko">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => {
        return (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        );
      }
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);

  return {
    ...initialProps,
    styles: (
      <>
        <meta charSet="utf-8" />

        <meta name="author" content="KDONG" />
        <meta
          name="description"
          content="밥값하는 프론트엔드 개발자 크동의 블로그 입니다. 공부하고 공유하고 싶은 내용을 작성합니다. 부족하지만, 성장하는 개발자가 되겠습니다."
        />
        <meta
          name="keywords"
          content="FrontEnd, BackEnd, React.JS, Next.JS, Nest.JS, TypeScript, 블로그, 개발자, 주니어, 주니어 개발자, 시니어, 시니어 개발자, 리액트, 타입스크립트, 개발자, 비전공, 전공"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />

        <meta property="og:site_name" content="kdong.dev" />
        <meta property="og:type" content="website" />

        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    )
  };
};

export default MyDocument;
