// base
import React from 'react';

// layout
import { MainLayout } from 'layouts';

// containers
import { Wanted } from 'containers';
import CustomSeo from 'pages/seo';

const WantedPage = () => {
  return (
    <>
      <CustomSeo title="밥값하는 개발자 블로그 - Wanted" />
      <MainLayout>
        <Wanted />
      </MainLayout>
    </>
  );
};

export default WantedPage;
