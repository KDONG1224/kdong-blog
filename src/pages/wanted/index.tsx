// base
import React from 'react';
import Head from 'next/head';

// layout
import { MainLayout } from 'layouts';

// containers
import { Wanted } from 'containers';

const WantedPage = () => {
  return (
    <>
      <Head>
        <title>밥값하는 개발자 블로그 - Wanted</title>
      </Head>
      <MainLayout>
        <Wanted />
      </MainLayout>
    </>
  );
};

export default WantedPage;
