import { useCallback, useEffect, useState } from 'react';

// react-responsive
import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPc, setIsPc] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const pc = useMediaQuery({
    query: '(min-width:1024px)'
  });
  const tablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1024px)'
  });
  const mobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleFront = useCallback(() => {
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
  }, [mobile, pc, tablet]);

  useEffect(() => {
    handleFront();
  }, [pc, tablet, mobile, handleFront]);

  return {
    isMobile,
    isPc,
    isTablet
  };
};
