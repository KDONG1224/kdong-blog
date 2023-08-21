import { useEffect, useState } from 'react';

export const useTableScroll = ({ x = 0, y = 0 }) => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const listener = () => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    setScrollX(vw - x);
    setScrollY(vh - y);
  };

  useEffect(() => {
    const handleResize = () => {
      listener();
    };

    listener();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { scrollX, scrollY };
};
