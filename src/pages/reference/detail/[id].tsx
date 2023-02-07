// base
import React from 'react';
import type { GetServerSideProps } from 'next';

// containers
import { ReferenceDetail } from 'container';

// layouts
import { TistoryLayout } from 'layouts';

// modules
import { ReferApi } from 'modules';

interface ReferenceDetailPageProps {
  reference: any;
}

const ReferenceDetailPage: React.FC<ReferenceDetailPageProps> = ({
  reference
}) => {
  return (
    <TistoryLayout>
      <ReferenceDetail data={reference} />
    </TistoryLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  if (!id || typeof id !== 'string') {
    return {
      notFound: true
    };
  }

  try {
    const referApi = new ReferApi();
    const getReferenceLists = await referApi.getReferenceLists({ _id: id });

    return {
      props: {
        reference: getReferenceLists[0]
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ReferenceDetailPage;
