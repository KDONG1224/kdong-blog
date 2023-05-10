// base
import React, { HTMLAttributes } from 'react';

// style
import { StyledMainLayout } from './style';

// containers
import { Footer, Header } from 'containers';

// hooks
import { useMedia, useScroll, useScrollToNode } from 'hooks';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  noFooter?: boolean;
  noMargin?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  noFooter = false,
  noMargin = false,
  children,
  ...props
}) => {
  const { isMobile } = useMedia();
  const { scrollY } = useScroll();
  const { scrollTo } = useScrollToNode('body');

  return (
    <StyledMainLayout ismobile={isMobile} nomargin={noMargin} {...props}>
      <Header />
      <main className="layout-main">{children}</main>
      <div
        className={`scroll-top ${scrollY > 600 ? 'show' : 'hide'}`}
        onClick={() => scrollTo()}
      />
      {!noFooter && <Footer />}
    </StyledMainLayout>
  );
};
