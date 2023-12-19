// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// containers
import { About } from 'containers';
import CustomSeo from 'pages/seo';

const AboutPage = () => {
  return (
    <>
      <CustomSeo title="밥값하는 개발자 블로그 - ABOUT" />
      <MainLayout noMargin>
        <About />
      </MainLayout>
    </>
  );
};

export default AboutPage;
