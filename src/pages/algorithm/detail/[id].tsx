// base
import React from 'react';
import type { GetServerSideProps } from 'next';

// layouts
import { TistoryLayout } from 'layouts';

// container
import { AlgorithmDetails } from 'container';
import { AlgorithmApi } from 'modules/algorithm';

interface AlgorithmDetailPageProps {
  algorithm: any;
}

const AlgorithmDetailPage: React.FC<AlgorithmDetailPageProps> = ({
  algorithm
}) => {
  return (
    <TistoryLayout>
      <AlgorithmDetails data={algorithm} />
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
    const algorithmApi = new AlgorithmApi();
    const algorithm = await algorithmApi.getAlgorithmLists({ _id: id });

    return {
      props: {
        algorithm: algorithm[0]
      }
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};

export default AlgorithmDetailPage;
