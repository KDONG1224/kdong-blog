import { RefObject, useEffect, useState } from 'react';

// ref: RefObject<HTMLCanvasElement>
export const useClientWidthHeight = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const setClientWidthHeight = () => {
      // if (ref.current) return;

      setWidth(window.innerWidth);
      // setHeight(window.innerHeight);

      setHeight(
        document.querySelector('.ant-layout-content')?.clientHeight ||
          window.innerHeight
      );
    };

    setClientWidthHeight();

    window.addEventListener('resize', setClientWidthHeight);

    return () => {
      window.addEventListener('resize', setClientWidthHeight);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(width, height);

  return { width, height };
};
