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
  onChangeOption?: (key: string, value: string) => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title = '타이틀',
  optionKey,
  children,
  onChangeOption
}) => {
  const { isMobile } = useMedia();

  const selectOption = useMemo(() => {
    const option = pageOptions.filter(
      ({ key }) => key === optionKey
    ) as PageOptionsProps[];

    return option;
  }, [optionKey]);

  const selectedOption = (value: React.ReactNode) => {
    if (!React.isValidElement(value)) return;

    const key = value.props.id;
    const select = value.props.value;

    if (onChangeOption) {
      onChangeOption(key, select);
    }
  };

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
                <BasicSelect
                  key={idx}
                  listItems={option}
                  onChange={(_, child: React.ReactNode) =>
                    selectedOption(child)
                  }
                />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="page-wrapper-children">{children}</div>
      </div>
    </StyledPageLayout>
  );
};
