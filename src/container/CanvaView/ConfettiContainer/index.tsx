// base
import React, { RefObject, useEffect, useState } from 'react';

// classes
import { Confetti, ConfettiProps } from 'classes';

// hooks
import { useCanvas } from 'hooks';
import { randomNumBetween } from 'utils';

interface ConfettiContainerProps {
  canvasWidth: number;
  canvasHeight: number;
}

interface ConfettiState {
  x: number;
  y: number;
  count: number;
  deg: number;
  colors?: string[];
  shapes?: string[];
  spread?: number;
}

export const ConfettiContainer: React.FC<ConfettiContainerProps> = ({
  canvasWidth,
  canvasHeight
}) => {
  const [type, setType] = useState<number>(1);

  let particles: ConfettiProps[] = [];

  const confetti = ({
    x,
    y,
    count,
    deg,
    colors = ['#FF577F', '#FF884B', '#FFD384', '#FFF9B0'],
    shapes = ['circle', 'square'],
    spread = 30
  }: ConfettiState) => {
    for (let i = 0; i < count; i++) {
      particles.push(
        new Confetti(
          x,
          y,
          canvasWidth,
          canvasHeight,
          deg,
          colors,
          shapes,
          spread
        )
      );
    }
  };

  const animate = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    if (type === 1) {
      confetti({
        x: Math.random(),
        y: Math.random(),
        count: 10,
        deg: 270,
        spread: 180
      });
    }

    if (type === 2) {
      // 왼쪽에서 발사
      confetti({
        x: 0,
        y: 0.5,
        count: 5,
        deg: -50
      });
      // 오른쪽에서 발사
      confetti({
        x: 0.87,
        y: 0.5,
        count: 5,
        deg: -130
      });
    }

    if (type === 3) {
      // 왼쪽 위에서 발사
      confetti({
        x: 0,
        y: 0,
        count: 5,
        deg: 45
      });

      // 오른쪽 위에서 발사
      confetti({
        x: 0.87,
        y: 0,
        count: 5,
        deg: 135
      });
    }

    updateAndDraw(ctx);
  };

  const updateAndDraw = (ctx: CanvasRenderingContext2D) => {
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw(ctx);

      if (particles[i].opacity < 0) particles.splice(i, 1);
      if (particles[i].y > canvasHeight) particles.splice(i, 1);
    }
  };

  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas({
    canvasWidth,
    canvasHeight,
    animate
  });

  useEffect(() => {
    setType(Math.ceil(randomNumBetween(0, 3)));
  }, []);

  return <canvas ref={canvasRef} />;
};
