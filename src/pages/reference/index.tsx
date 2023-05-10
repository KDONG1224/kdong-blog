// base
import React from 'react';

// layouts
import { MainLayout, PageLayout } from 'layouts';

// containers
import { Reference } from 'containers';

const ReferencePage = () => {
  return (
    <MainLayout>
      <PageLayout title="레퍼런스" optionKey="reference">
        <Reference />
      </PageLayout>
    </MainLayout>
  );
};

export default ReferencePage;
