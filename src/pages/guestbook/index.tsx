// base
import React from 'react';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Guestbooks } from 'containers';

const GuestbookPage = () => {
  return (
    <>
      <CustomSeo
        title="🤖 밥값하는 개발자 블로그 - 방명록"
        custom={
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        }
      />
      <MainLayout>
        <Guestbooks />
      </MainLayout>
    </>
  );
};

export default GuestbookPage;
