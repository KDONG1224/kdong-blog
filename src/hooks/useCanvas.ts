// base
import { RefObject, useEffect, useRef } from 'react';

interface UseCanvasProps {
  canvasWidth: number;
  canvasHeight: number;
  animate: (ctx: CanvasRenderingContext2D) => void;
}

export const useCanvas = ({
  canvasWidth,
  canvasHeight,
  animate
}: UseCanvasProps) => {
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const interval = 1000 / 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    let now: number = 0;
    let delta: number = 0;
    let then: number = Date.now();
    let requestId: number;

    const setCanvas = () => {
      const dpr = window.devicePixelRatio ?? 1;

      if (canvas && ctx) {
        canvas.style.width = canvasWidth * dpr + 'px';
        canvas.style.height = (canvasHeight / 2) * dpr + 'px';

        canvas.width = canvasWidth * dpr;
        canvas.height = (canvasHeight / 2) * dpr;
        ctx?.scale(dpr, dpr);
      }
    };

    setCanvas();

    const requestAnimation = () => {
      requestId = window.requestAnimationFrame(requestAnimation);

      now = Date.now();
      delta = now - then;

      if (delta < interval) return;

      if (ctx) {
        animate(ctx);
      }
    };
    requestAnimation();

    then = now - (delta % interval);

    return () => {
      window.cancelAnimationFrame(requestId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasWidth, canvasHeight]);

  return canvasRef;
};
