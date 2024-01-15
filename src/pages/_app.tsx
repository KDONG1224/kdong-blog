// base
import React, { useEffect, useMemo, useState } from 'react';
import type { AppContext, AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';
import Head from 'next/head';

// styles
import '../assets/scss/index.scss';
import 'nprogress/nprogress.css';
import 'aos/dist/aos.css';
import 'antd/dist/reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'highlight.js/styles/github-dark.min.css';

// modules
import {
  CategoryApi,
  ProfileApi,
  kdongProfileState,
  mainCategoryState
} from 'modules';

import * as gtag from 'libs';

// libraries
import AOS from 'aos';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import NProgress from 'nprogress';
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/lib/locale/ko_KR';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Script from 'next/script';
import { SplashScreen } from 'components';
import { ROUTE_ROOT } from 'consts';

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

dayjs.locale('ko');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  gtag.useGtag();
  const router = useRouter();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity }
    }
  });

  const initializer = useMemo(
    () =>
      ({ set }: MutableSnapshot) => {
        if (pageProps.profile) {
          const profile = pageProps.profile;

          set(kdongProfileState, profile);
        }

        if (pageProps.menuLists) {
          const menuLists = pageProps.menuLists;

          set(mainCategoryState, menuLists);
        }
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

  useEffect(() => {
    if (!pageProps.isLoading) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pageProps]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" sizes="192x192" href="/favicon.ico" />
      </Head>
      {process.env.NODE_ENV !== 'development' && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID_WWW}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID_WWW}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          /> */}
        </>
      )}
      {loading && router.pathname === ROUTE_ROOT && <SplashScreen />}

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

    const profileApi = new ProfileApi();
    const profile = await profileApi.getMainProfile();

    const categoryApi = new CategoryApi();
    const categoryLists = await categoryApi.getMainCategories();

    pageProps = {
      ...pageProps,
      profile: {
        ...profile,
        result: {
          ...profile.result,
          bannerLists: profile.result.bannerLists[0]
        }
      },
      menuLists: categoryLists.result.categories,
      isLoading: true
    };

    return {
      pageProps
    };
  } catch (error) {
    pageProps = { ...pageProps, profile: null, isLoading: true };

    return {
      pageProps
    };
  }
};
