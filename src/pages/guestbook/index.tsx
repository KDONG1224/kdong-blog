// base
import React from 'react';

// layouts
import { TistoryLayout } from 'layouts';

// container
import { Guestbook } from 'container';
import { GetServerSideProps } from 'next';
import { GuestbookApi } from 'modules/guestbook';

interface GuestbookPageProps {
  guestbookLists: any[];
}

const GuestbookPage: React.FC<GuestbookPageProps> = ({ guestbookLists }) => {
  return (
    <TistoryLayout>
      <Guestbook guestbookLists={guestbookLists} />
    </TistoryLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const guestbookApi = new GuestbookApi();
    const allGuestbookLists = await guestbookApi.getAllGuestbook();

    return {
      props: {
        guestbookLists: allGuestbookLists || []
      }
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true
    };
  }
};

export default GuestbookPage;
