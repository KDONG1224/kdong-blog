// base
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

// components
import { BlurImage } from 'components';

// hooks
import { useInterval } from 'hooks';

// constㄴ
import { backgroundImages } from 'consts';

const ErrorPage: NextPage = () => {
  const router = useRouter();

  const [state, setState] = useState(5);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (state < 1) {
      setIsRunning(false);
      // const prevPath = globalThis.sessionStorage.getItem('prevPath');
      // if (prevPath) router.back();
      // else router.push('/')

      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useInterval(
    () => {
      setState(state - 1);
    },
    isRunning ? 1000 : null
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        textAlign: 'center'
      }}
    >
      <div>
        <div>
          <BlurImage
            src={backgroundImages.MY_IMAGE}
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div
          style={{
            padding: '36px 0px',
            lineHeight: 1.5
          }}
        >
          <div>불편을 드려 죄송합니다.</div>
          <div>잠시 후 다시 시도해주세요.</div>
          <div>{state}초 뒤 메인 페이지로 돌아갑니다</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
