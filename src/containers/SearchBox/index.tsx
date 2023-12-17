// base
import React from 'react';

// styles
import { StyledSearchBox } from './style';

// components
import { BasicSelect } from 'components';

// hooks
import { useMedia } from 'hooks';

// libraries
import { DefaultOptionType } from 'antd/es/select';

interface T extends DefaultOptionType {}

export interface CustomFilterProps {
  key: string;
  options: T[];
  placeholder: string;
  onChange: (value: string, option: any) => void;
}

interface SearchBoxProps {
  title: string;
  filters?: CustomFilterProps[];
}

export const SearchBox: React.FC<SearchBoxProps> = ({ title, filters }) => {
  const { isMobile } = useMedia();

  return (
    <StyledSearchBox ismobile={isMobile}>
      <div className="search-wrapper">
        <div className="search-wrapper-top">
          <h1>{title}</h1>
        </div>
        <div className="search-wrapper-select">
          {filters &&
            filters.map((filter) => (
              <BasicSelect
                key={filter.key}
                options={filter.options}
                placeholder={'선택해주세요'}
                onChange={filter.onChange}
              />
            ))}
        </div>
      </div>
    </StyledSearchBox>
  );
};
