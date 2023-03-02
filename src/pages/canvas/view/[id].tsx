// base
import React from 'react';

// layouts
import { TistoryLayout } from 'layouts';

// container
import { CanvasView } from 'container';

const CanvasViewPage = () => {
  return (
    <TistoryLayout noPadding>
      <CanvasView />
    </TistoryLayout>
  );
};

export default CanvasViewPage;
