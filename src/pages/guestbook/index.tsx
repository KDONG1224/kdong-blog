// base
import React from 'react';
import Head from 'next/head';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Guestbook } from 'containers';

const GuestbookPage = () => {
  return (
    <>
      <Head>
        <title>밥값하는 개발자 블로그 - 방명록</title>
      </Head>
      <MainLayout>
        <Guestbook />
      </MainLayout>
    </>
  );
};

export default GuestbookPage;
