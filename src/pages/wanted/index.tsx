// base
import React from 'react';

// pages
import CustomSeo from 'pages/seo';

// layout
import { MainLayout } from 'layouts';

// containers
import { Wanted } from 'containers';

const WantedPage = () => {
  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그 - Wanted" />
      <MainLayout>
        <Wanted />
      </MainLayout>
    </>
  );
};

export default WantedPage;
