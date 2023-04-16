// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// containers
import { Guestbook } from 'containers';

const GuestbookPage = () => {
  return (
    <MainLayout>
      <Guestbook />
    </MainLayout>
  );
};

export default GuestbookPage;
