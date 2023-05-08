// base
import React, { HTMLAttributes } from 'react';

// style
import { StyledMainLayout } from './style';

// containers
import { Footer, Header } from 'containers';

// hooks
import { useScroll, useScrollToNode } from 'hooks';

type MainLayoutProps = HTMLAttributes<HTMLDivElement>;

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  const { scrollY } = useScroll();
  const { scrollTo } = useScrollToNode('body');

  return (
    <StyledMainLayout {...props}>
      <Header />
      <main className="layout-main">{children}</main>
      <div
        className={`scroll-top ${scrollY > 600 ? 'show' : 'hide'}`}
        onClick={() => scrollTo()}
      />
      <Footer />
    </StyledMainLayout>
  );
};
