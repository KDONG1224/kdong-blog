// base
import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import type { AppContext, AppProps } from 'next/app';
import { Router } from 'next/router';

// styles
import '../assets/scss/index.scss';
import 'nprogress/nprogress.css';
import '../../node_modules/highlight.js/styles/qtcreator_dark.css';
import 'aos/dist/aos.css';
import 'antd/dist/reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// components
import { SplashScreen } from 'components';

// modules
import { kdongProfileState } from 'modules';

// libraries
import AOS from 'aos';

import NProgress from 'nprogress';
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/lib/locale/ko_KR';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// nprogress setting
NProgress.configure({
  template: `
  <div class="bar" role="bar">
    <div class="peg"></div>
  </div>
  <div class='loader-container'><div class='loader-box'><span class="loader"></span></div></div>
  `
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity }
    }
  });

  useEffect(() => {
    if (typeof globalThis.window !== 'undefined') {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }

    console.clear();
  }, []);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      anchorPlacement: 'top-center',
      once: false,
      offset: 50,
      delay: 300
    });
  }, []);

  const initializer = useMemo(
    () =>
      ({ set }: MutableSnapshot) => {
        if (!pageProps.profile) return;

        const profile = pageProps.profile;

        set(kdongProfileState, profile);
      },
    [pageProps]
  );

  if (isLoading) return <SplashScreen />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" sizes="192x192" href="/favicon.ico" />
        <title>밥값하는 개발자 블로그</title>

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
          content="https://kdong.s3.ap-northeast-2.amazonaws.com/dev/thumbnail-kdong-blog.png"
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
          content="https://kdong.s3.ap-northeast-2.amazonaws.com/dev/thumbnail-kdong-blog.png"
        />
      </Head>
      <ConfigProvider
        locale={ko_KR}
        theme={{
          token: {
            colorPrimary: '#f43f00'
          }
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RecoilRoot initializeState={initializer}>
            {process.env.NODE_ENV === 'development' && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
            <Component {...pageProps} />
          </RecoilRoot>
        </QueryClientProvider>
      </ConfigProvider>
    </>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  let pageProps = {};

  try {
    if (!ctx.req) throw new Error('isClient');

    pageProps = { ...pageProps, profile: undefined };

    return {
      pageProps
    };
  } catch (error) {
    pageProps = { ...pageProps, profile: null };

    return {
      pageProps
    };
  }
};
