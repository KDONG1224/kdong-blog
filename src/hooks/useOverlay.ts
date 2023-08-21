// base
import { useEffect, useState } from 'react';

// libraries
import { gsap } from 'gsap';

export const useOverlay = (className: string) => {
  const [element, setElement] = useState<HTMLElement>();

  const visibleAni = () => {
    if (!element) return;

    element.style.pointerEvents = 'all';

    gsap
      .timeline({})
      .set(element, {
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z', fill: '#f43f00' }
      })
      .to(
        element,
        {
          duration: 0.3,
          ease: 'power4.in',
          attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        },
        0
      )
      .to(element, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
        onComplete: function () {
          gsap.to('.overlay_image', {
            opacity: 1,
            visibility: 'visible',
            delay: 0.35
          });
          gsap.to('.overlay_image .shadow', {
            opacity: 1,
            visibility: 'visible',
            delay: 0.35
          });
          gsap.to('.shadow', {
            backgroundColor: 'rgba(32,32,32,0)',
            delay: 0.5
          });
          gsap.to('.clone_image', {
            scale: 1.35
          });
          gsap.to('.clone_image', {
            scale: 1,
            duration: 1.15,
            delay: 0.8
          });
        }
      });
  };

  const hiddenAni = () => {
    if (!element) return;

    element.style.pointerEvents = 'none';

    gsap
      .timeline({})
      .set(element, {
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },

        onComplete: function () {
          // if (type === 'show') {
          //   navWrap.classList.add('open');
          //   body.classList.add('overflow');
          //   $('body').on('scroll touchmove mousewheel', function () {
          //     return false;
          //   });
          // } else {
          //   navWrap.classList.remove('open');
          //   body.classList.remove('overflow');
          //   $('body').off('scroll touchmove mousewheel');
          // }
        }
      })
      .to(element, {
        delay: 0.7,
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
      })
      .to(element, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      });
  };

  useEffect(() => {
    const targetNode = document.querySelector(className) as HTMLElement;

    if (!targetNode) return;

    setElement(targetNode);
  }, [className]);

  return {
    visible: visibleAni,
    hidden: hiddenAni
  };
};
