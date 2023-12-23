// base
import React from 'react';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Algorithm } from 'containers';

const AlgorithmPage = () => {
  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그 - 알고리즘" />
      <MainLayout>
        <Algorithm />
      </MainLayout>
    </>
  );
};

export default AlgorithmPage;
