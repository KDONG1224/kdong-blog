// base
import React from 'react';

// layouts
import { MainLayout, PageLayout } from 'layouts';

// containers
import { Project } from 'containers';

const ProjectPage = () => {
  return (
    <MainLayout>
      <PageLayout title="프로젝트">
        <Project />
      </PageLayout>
    </MainLayout>
  );
};

export default ProjectPage;
