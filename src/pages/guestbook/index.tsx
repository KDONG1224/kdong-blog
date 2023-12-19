// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Guestbook } from 'containers';
import CustomSeo from 'pages/seo';

const GuestbookPage = () => {
  return (
    <>
      <CustomSeo title="밥값하는 개발자 블로그 - 방명록" />
      <MainLayout>
        <Guestbook />
      </MainLayout>
    </>
  );
};

export default GuestbookPage;
