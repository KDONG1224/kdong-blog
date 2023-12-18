// base
import React from 'react';
import Head from 'next/head';

// layouts
import { MainLayout } from 'layouts';

// containers
import { About } from 'containers';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>밥값하는 개발자 블로그 - ABOUT</title>
      </Head>
      <MainLayout noMargin>
        <About />
      </MainLayout>
    </>
  );
};

export default AboutPage;
