// base
import React from 'react';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { MainLayout, PageLayout } from 'layouts';

// containers
import { Project } from 'containers';

const ProjectPage = () => {
  return (
    <>
      <CustomSeo title="밥값하는 개발자 블로그 - 프로젝트" />
      <MainLayout>
        <PageLayout title="프로젝트" optionKey="project">
          <Project />
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default ProjectPage;
