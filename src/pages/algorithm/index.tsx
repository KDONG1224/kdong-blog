// base
import React from 'react';
import type { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { Algorithm } from 'container';
import { AlgorithmApi } from 'modules/algorithm';
import { TistoryLayout } from 'layouts/TistoryLayout';

interface AlgorithmPageProps {
  algorithmLists: any[];
}

const AlgorithmPage: React.FC<AlgorithmPageProps> = ({ algorithmLists }) => {
  return (
    // <MainLayout>
    <TistoryLayout>
      <Algorithm algorithmLists={algorithmLists} />
      {/* </MainLayout> */}
    </TistoryLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const algorithmApi = new AlgorithmApi();
    const algorithmLists = await algorithmApi.getAllAlgorithm();

    return {
      props: {
        algorithmLists: algorithmLists.map(
          ({ readOnlyData }: any) => readOnlyData
        )
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default AlgorithmPage;
