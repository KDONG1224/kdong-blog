// base
import React from 'react';
import Head from 'next/head';

// layouts
import { MainLayout, PageLayout } from 'layouts';

// containers
import { Algorithm } from 'containers';

const AlgorithmPage = () => {
  return (
    <>
      <Head>
        <title>밥값하는 개발자 블로그 - 알고리즘</title>
      </Head>
      <MainLayout>
        <PageLayout title="알고리즘" optionKey="algorithm">
          <Algorithm />
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default AlgorithmPage;
