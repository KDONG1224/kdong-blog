// base
import React, { useEffect, useMemo } from 'react';
import type { AppProps } from 'next/app';
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

import CustomSeo from './seo';

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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { suspense: true }
    }
  });

  const initializer = useMemo(
    () =>
      ({ set }: MutableSnapshot) => {
        if (!pageProps.profile) return;

        const profile = pageProps.profile;

        set(kdongProfileState, profile);
      },
    [pageProps]
  );

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      anchorPlacement: 'top-center',
      once: false,
      offset: 50,
      delay: 300
    });
  }, []);

  return (
    <>
      <CustomSeo
        custom={
          <>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="shortcut icon" sizes="192x192" href="/favicon.ico" />
          </>
        }
      />
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
