// base
import React from 'react';
import { GetStaticProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { ToyProject } from 'container';

// modules
import { ToyApi } from 'modules/toyproject';

interface ToyProjectPageProps {
  toyprojectLists: any[];
}

const ToyProjectPage: React.FC<ToyProjectPageProps> = ({ toyprojectLists }) => {
  return (
    <MainLayout>
      <ToyProject datas={toyprojectLists} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const toyApi = new ToyApi();
    const allToyproject = await toyApi.getAllToyProject();

    return {
      props: {
        toyprojectLists: allToyproject
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ToyProjectPage;
