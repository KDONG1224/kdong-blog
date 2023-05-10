// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// containers
import { About } from 'containers';

const AboutPage = () => {
  return (
    <MainLayout noMargin>
      <About />
    </MainLayout>
  );
};

export default AboutPage;
