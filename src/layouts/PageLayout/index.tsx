// base
import React from 'react';

// style
import { StyledPageLayout } from './style';

// consts
import {
  selectGenreOption,
  selectMeetingOption,
  selectOrderOption,
  selectTypeOption
} from 'consts';

// libraries
import { BasicSelect } from 'components';

// hooks
import { useMedia } from 'hooks';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  const { isMobile } = useMedia();

  return (
    <StyledPageLayout className="container" ismobile={isMobile}>
      <div className="page-wrapper">
        <div className="page-wrapper-title">
          <h1>{title}</h1>
        </div>
        <div className="page-wrapper-select">
          <div className="page-wrapper-select-type">
            <BasicSelect listItems={selectTypeOption} />
          </div>
          <div className="page-wrapper-select-genre">
            <BasicSelect listItems={selectGenreOption} />
          </div>
          <div className="page-wrapper-select-meeting">
            <BasicSelect listItems={selectMeetingOption} />
          </div>
          <div className="page-wrapper-select-order">
            <BasicSelect listItems={selectOrderOption} />
          </div>
        </div>
        <div className="page-wrapper-children">{children}</div>
      </div>
    </StyledPageLayout>
  );
};
