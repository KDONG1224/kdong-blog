// base
import React from 'react';

// style
import { StyledContentLayout } from './style';

interface ContentLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  title,
  children
}) => {
  return (
    <StyledContentLayout className="container">
      <div className="content-wrapper">
        <div className="content-wrapper-head">
          <div className="content-wrapper-head-left">{title}</div>
          <div className="content-wrapper-head-right"></div>
        </div>
        <div className="content-wrapper-children">{children}</div>
      </div>
    </StyledContentLayout>
  );
};
