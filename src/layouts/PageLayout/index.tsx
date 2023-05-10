// base
import React, { useMemo } from 'react';

// style
import { StyledPageLayout } from './style';

// consts
import { PageOptionsProps, pageOptions } from 'consts';

// libraries
import { BasicSelect } from 'components';

// hooks
import { useMedia } from 'hooks';

interface PageLayoutProps {
  title?: string;
  optionKey: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title = '타이틀',
  optionKey,
  children
}) => {
  const { isMobile } = useMedia();

  const selectOption = useMemo(() => {
    const option = pageOptions.filter(
      ({ key }) => key === optionKey
    ) as PageOptionsProps[];

    return option;
  }, [optionKey]);

  return (
    <StyledPageLayout className="container" ismobile={isMobile}>
      <div className="page-wrapper">
        <div className="page-wrapper-title">
          <h1>{title}</h1>
        </div>
        <div className="page-wrapper-select">
          {selectOption.map(({ key, options }) => (
            <React.Fragment key={key}>
              {options.map((option, idx) => (
                <BasicSelect key={idx} listItems={option} />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="page-wrapper-children">{children}</div>
      </div>
    </StyledPageLayout>
  );
};
