// base
import React from 'react';

// layouts
import { MainLayout, PageLayout } from 'layouts';

// containers
import { Algorithm } from 'containers';

const AlgorithmPage = () => {
  return (
    <MainLayout>
      <PageLayout title="알고리즘" optionKey="algorithm">
        <Algorithm />
      </PageLayout>
    </MainLayout>
  );
};

export default AlgorithmPage;
