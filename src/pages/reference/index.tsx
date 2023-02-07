// base
import React from 'react';
import type { GetServerSideProps } from 'next';

// layouts
import { TistoryLayout } from 'layouts';

// container
import { ReferenceLists } from 'container';

// modules
import { ReferApi } from 'modules';

interface ReferencePageProps {
  referenceLists: any;
}

const ReferencePage: React.FC<ReferencePageProps> = ({ referenceLists }) => {
  return (
    <TistoryLayout>
      <ReferenceLists referenceLists={referenceLists} />
    </TistoryLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const referApi = new ReferApi();
    const allReferenceLists = await referApi.getAllReference();

    return {
      props: {
        referenceLists: allReferenceLists
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ReferencePage;
