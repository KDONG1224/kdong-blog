// base
import React, { HTMLAttributes } from 'react';

// style
import { StyledMainLayout } from './style';

// containers
import { Footer, Header } from 'containers';

type MainLayoutProps = HTMLAttributes<HTMLDivElement>;

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledMainLayout {...props}>
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </StyledMainLayout>
  );
};
