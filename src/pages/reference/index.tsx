// base
import React, { useState } from 'react';

// layouts
import { MainLayout, PageLayout } from 'layouts';

// containers
import { Reference } from 'containers';

const ReferencePage = () => {
  const [searchOption, setSearchOption] = useState({
    projectType: 'all',
    positionType: 'all',
    skillType: 'all',
    order: 'descend'
  });

  const onChangeOption = (key: string, value: string) => {
    setSearchOption({ ...searchOption, [key]: value });
  };

  return (
    <MainLayout>
      <PageLayout
        title="레퍼런스"
        optionKey="reference"
        onChangeOption={onChangeOption}
      >
        <Reference option={searchOption} />
      </PageLayout>
    </MainLayout>
  );
};

export default ReferencePage;
