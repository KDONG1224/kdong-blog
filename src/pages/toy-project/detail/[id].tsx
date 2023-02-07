// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { TistoryLayout } from 'layouts';

// modules
import { ToyApi } from 'modules/toyproject';
import { ToyProjectDetail } from 'container';

interface ToyProjectDetailPageProps {
  toyproject: any;
}

const ToyProjectDetailPage: React.FC<ToyProjectDetailPageProps> = ({
  toyproject
}) => {
  return (
    <TistoryLayout>
      <ToyProjectDetail data={toyproject} />
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
    const toyApi = new ToyApi();
    const toyproject = await toyApi.getToyProject(id);

    return {
      props: {
        toyproject: toyproject
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ToyProjectDetailPage;
