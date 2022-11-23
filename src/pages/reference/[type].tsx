import { Html, ReferenceLists } from 'container';
import { MainLayout } from 'layouts';
import { ReferApi } from 'modules';
import { GetServerSideProps } from 'next';

import React from 'react';

interface ReferenceListsPageProps {
  referenceLists: any;
}

const ReferenceListsPage: React.FC<ReferenceListsPageProps> = ({
  referenceLists
}) => {
  return (
    <MainLayout>
      <ReferenceLists referenceLists={referenceLists} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { type } = context.query;

  if (!type || typeof type !== 'string') {
    return {
      notFound: true
    };
  }

  try {
    const referApi = new ReferApi();
    const getReferenceLists = await referApi.getReferenceLists(type);

    return {
      props: {
        referenceLists: getReferenceLists
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ReferenceListsPage;
