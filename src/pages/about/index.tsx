// base
import React from 'react';

// pages
import CustomSeo from 'pages/seo';

// layouts
import { MainLayout } from 'layouts';

// containers
import { About } from 'containers';

const AboutPage = () => {
  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그 - ABOUT" />
      <MainLayout noMargin>
        <About />
      </MainLayout>
    </>
  );
};

export default AboutPage;
