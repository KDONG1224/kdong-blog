// base
import { useEffect, useState } from 'react';

// react-responsive
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPc, setIsPc] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const pc = useMediaQuery({
    query: '(min-width:1024px)'
  });
  const tablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)'
  });
  const mobile = useMediaQuery({ query: '(max-width: 750px)' });

  const handleFront = () => {
    setIsPc(false);
    setIsTablet(false);
    setIsMobile(false);

    if (pc) {
      setIsMobile(false);
      setIsTablet(false);
      return setIsPc(true);
    }

    if (tablet) {
      setIsPc(false);
      setIsMobile(false);
      return setIsTablet(true);
    }

    if (mobile) {
      setIsPc(false);
      setIsTablet(false);
      return setIsMobile(true);
    }
  };

  useEffect(() => {
    handleFront();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pc, tablet, mobile]);

  return {
    isMobile,
    isPc,
    isTablet
  };
};
