// base
import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';

// styles
import '../styles/index.css';
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

// libraries
import AOS from 'aos';
import NProgress from 'nprogress';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/lib/locale/ko_KR';

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

  if (isLoading) return <SplashScreen />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" sizes="192x192" href="/favicon.ico" />
        <title>KDONG 포트폴리오</title>
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
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </QueryClientProvider>
      </ConfigProvider>
    </>
  );
}
