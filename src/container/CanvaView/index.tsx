// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledCanvasView } from './style';

// containers
import { ConfettiContainer } from './ConfettiContainer';

// hooks
import { useClientWidthHeight } from 'hooks';

export const CanvasView = () => {
  const router = useRouter();
  const { width: canvasWidth, height: canvasHeight } = useClientWidthHeight();

  const { id } = router.query;

  return (
    <StyledCanvasView>
      {id === '1' && (
        <ConfettiContainer
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
        />
      )}
    </StyledCanvasView>
  );
};
