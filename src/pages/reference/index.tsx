// base
import React from 'react';
import Head from 'next/head';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Reference } from 'containers';

const ReferencePage = () => {
  return (
    <>
      <Head>
        <title>밥값하는 개발자 블로그 - 레퍼런스</title>
      </Head>
      <MainLayout>
        <Reference />
      </MainLayout>
    </>
  );
};

export default ReferencePage;
