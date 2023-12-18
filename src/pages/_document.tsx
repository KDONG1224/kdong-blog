/* eslint-disable @next/next/no-sync-scripts */
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
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
            <meta name="twitter:title" content="🤖 밥값하는 개발자 블로그" />
            <meta
              name="twitter:description"
              content="밥값하는 프론트엔드 개발자 크동의 블로그 입니다. 공부하고 공유하고 싶은 내용을 작성합니다. 부족하지만, 성장하는 개발자가 되겠습니다."
            />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:creator" content="@" />
            <meta
              name="twitter:image"
              content="https://kdong.s3.ap-northeast-2.amazonaws.com/dev/my-logo.png"
            />

            <meta property="og:title" content="🤖 밥값하는 개발자 블로그" />
            <meta
              property="og:description"
              content="밥값하는 프론트엔드 개발자 크동의 블로그 입니다. 공부하고 공유하고 싶은 내용을 작성합니다. 부족하지만, 성장하는 개발자가 되겠습니다."
            />
            <meta property="og:url" content="https://kdong.dev/" />
            <meta property="og:site_name" content="kdong.dev" />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://kdong.s3.ap-northeast-2.amazonaws.com/dev/my-logo.png"
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      };
    } finally {
      sheet.seal();
    }
  }
}
