// base
import React from 'react';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Reference } from 'containers';

const ReferencePage = () => {
  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그 - 레퍼런스" />
      <MainLayout>
        <Reference />
      </MainLayout>
    </>
  );
};

export default ReferencePage;
