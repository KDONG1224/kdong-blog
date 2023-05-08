// base
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledInstargram } from './style';

// components
import { BlurImage, InstaCard } from 'components';

// consts
import { instaImages } from 'consts';

import { useQuery } from '@tanstack/react-query';
import nProgress from 'nprogress';
import { GuestbookApi } from 'modules';

// modules

// libraires

interface InstagramProps {
  onClick: () => void;
}

export const Instagram: React.FC<InstagramProps> = ({ onClick }) => {
  const router = useRouter();

  const guestbookApi = useMemo(() => {
    return new GuestbookApi();
  }, []);

  const getGuestbook = () => {
    if (!guestbookApi) return Promise.reject();

    return guestbookApi.getAllGuestbookClient();
  };

  const { data } = useQuery(
    ['QUERY_GUESTBOOK', nProgress],
    () => getGuestbook(),
    {
      select: (data) => data
    }
  );

  console.log(data);

  const handleGuestbook = () => {
    router.replace('/guestbook');
  };

  if (!data) return <div>ss</div>;

  return (
    <StyledInstargram>
      <div className="insta-wrapper">
        {/* header */}
        <div className="insta-wrapper-top">
          <span className="insta-wrapper-top-dot" onClick={onClick} />
          <div className="insta-wrapper-top-header">Let's Talk</div>
        </div>

        {/* body */}
        <div className="insta-wrapper-body">
          <div className="insta-wrapper-body-box">
            <div className="insta-wrapper-body-box-top">
              <h2>
                반가워요👋 <br /> 밥값하는 개발자 강동재 입니다.
              </h2>
              {[0, 1, 2].map((num) => (
                <div
                  key={num}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 450
                  }}
                >
                  <BlurImage
                    src={instaImages.INSTA_INFO_IMG_01}
                    alt=""
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                      borderRadius: 20
                    }}
                    // layout="fixed"
                    // objectFit="cover"
                  />
                </div>
              ))}
            </div>

            <div className="insta-wrapper-body-box-middle">
              <h2 onClick={handleGuestbook} style={{ cursor: 'pointer' }}>
                방명록
              </h2>
              {data &&
                [...data]
                  .filter((guestbook) => guestbook.images)
                  .sort((a, b) => b.index - a.index)
                  .map((guestbook) => (
                    <InstaCard key={guestbook.id} data={guestbook} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </StyledInstargram>
  );
};