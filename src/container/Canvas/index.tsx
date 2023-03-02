// base
import React, { RefObject, useRef } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledCanvas } from './style';

// components
import { ImageCard } from 'components';

// consts
import { CANVAS_LISTS } from 'consts';

export const Canvas = () => {
  const mainRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  const router = useRouter();

  const handleMove = (id: string) => {
    router.replace(`/canvas/view/${id}`);
  };

  return (
    <StyledCanvas ref={mainRef}>
      <div className="canvas-wrapper">
        <div className="canvas-wrapper-contents">
          {CANVAS_LISTS.map((canvas) => (
            <ImageCard key={canvas.key} data={canvas} onClick={handleMove} />
          ))}
        </div>
      </div>
    </StyledCanvas>
  );
};
