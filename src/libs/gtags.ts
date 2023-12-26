import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID as string;
export const GA_TRACKING_ID_WWW = process.env.NEXT_PUBLIC_GTAG_ID_WWW as string;

export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

export const pageviewWithW = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID_WWW, {
    page_path: url
  });
};

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value
  });
};

export const useGtag = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    const handleRouteChange = (url: URL) => {
      pageview(url);
      // pageviewWithW(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
