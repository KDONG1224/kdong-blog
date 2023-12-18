// base
import React from 'react';
import Head from 'next/head';

// layouts
import { MainLayout, PageLayout } from 'layouts';

// containers
import { Project } from 'containers';

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>밥값하는 개발자 블로그 - 프로젝트</title>
      </Head>
      <MainLayout>
        <PageLayout title="프로젝트" optionKey="project">
          <Project />
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default ProjectPage;
