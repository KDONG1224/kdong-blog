// base
import React from 'react';

// style
import { StyledContentLayout } from './style';

// components
import { BasicSwiper, BlurImage } from 'components';

// modules
import { ArticleListsProps } from 'modules/article';

// libraries
import { SwiperSlide } from 'swiper/react';
import dayjs from 'dayjs';
import Head from 'next/head';
import { htmlToString } from 'utils';
import { useRouter } from 'next/router';

interface ContentLayoutProps {
  title?: string;
  contents?: ArticleListsProps;
  children: React.ReactNode;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  title,
  contents,
  children
}) => {
  console.log('== title == : ', title);

  const router = useRouter();

  return (
    <>
      <Head>
        {/* twitter */}
        <meta
          name="twitter:title"
          key="twitter:title"
          content={contents?.title}
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={htmlToString(contents?.content || '')}
        />
        <meta
          name="twitter:image"
          key="twitter:image"
          content={contents?.thumbnails[0].location}
        />

        {/* og */}
        <meta property="og:title" key="og:title" content={contents?.title} />
        <meta
          property="og:description"
          key="og:description"
          content={htmlToString(contents?.content || '')}
        />
        <meta
          property="og:url"
          key="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta
          property="og:image"
          key="og:image"
          content={contents?.thumbnails[0].location}
        />
      </Head>
      <StyledContentLayout className="container">
        <div className="content-wrapper">
          <div className="content-wrapper-head">
            <div className="content-wrapper-head-left">
              <div className="content-wrapper-head-left-top">
                <h2>{contents?.title}</h2>
                <div>
                  {contents &&
                    contents.tags.map(({ id, name }) => (
                      <span key={id}>{`#${name}`}</span>
                    ))}
                </div>
              </div>
              <div className="content-wrapper-head-left-bottom">
                <p>
                  작성자 : <span>{contents?.author.username}</span>
                </p>
                <p>
                  조회수 : <span>{contents?.readCount}</span>
                </p>
                <p>
                  작성일 :{' '}
                  <span>
                    {dayjs(contents?.createdAt).format('YYYY-MM-DD, A hh:mm')}
                  </span>
                </p>
              </div>
            </div>
            <div className="content-wrapper-head-right">
              {contents && contents.thumbnails.length > 0 && (
                <BasicSwiper
                  className="content-wrapper-head-right-swiper"
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 5 * 1000,
                    disableOnInteraction: false
                  }}
                >
                  {contents.thumbnails.map(({ id, filename, location }) => (
                    <SwiperSlide key={id}>
                      <BlurImage
                        src={location}
                        alt={filename}
                        style={{ objectFit: 'contain' }}
                      />
                    </SwiperSlide>
                  ))}
                </BasicSwiper>
              )}
            </div>
          </div>
          <div className="content-wrapper-children">{children}</div>
        </div>
      </StyledContentLayout>
    </>
  );
};
