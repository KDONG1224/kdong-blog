// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Reference } from 'containers';
import CustomSeo from 'pages/seo';

const ReferencePage = () => {
  return (
    <>
      <CustomSeo title="밥값하는 개발자 블로그 - 레퍼런스" />
      <MainLayout>
        <Reference />
      </MainLayout>
    </>
  );
};

export default ReferencePage;
