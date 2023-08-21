import { useEffect } from 'react';

interface UseInfiniteScrollProps {
  target: Element | null;
  root: Element | null;
  threshold?: number | number[];
  rootMargin?: string;
  onIntersect: IntersectionObserverCallback;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
  const {
    target,
    root = null,
    threshold = 1,
    rootMargin = '0px',
    onIntersect
  } = props;

  useEffect(() => {
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold
    });

    observer.observe(target);

    return () => {
      observer && observer.unobserve(target);
    };
  }, [target, root, threshold, rootMargin, onIntersect]);
};
