import React from 'react';
import Head from 'next/head';

interface CustomSeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  thumbnail?: string;
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    site?: string;
    creator?: string;
    image?: string;
  };
  og?: {
    title?: string;
    description?: string;
    url?: string;
    site_name?: string;
    type?: string;
    image?: string;
  };
}

export const CustomSeo: React.FC<CustomSeoProps> = ({
  title = '🤖 밥값하는 개발자 블로그',
  description = '밥값하는 프론트엔드 개발자 크동의 블로그 입니다. 공부하고 공유하고 싶은 내용을 작성합니다. 부족하지만, 성장하는 개발자가 되겠습니다.',
  keywords = 'FrontEnd, BackEnd, React.JS, Next.JS, Nest.JS, TypeScript, 블로그, 개발자, 주니어, 주니어 개발자, 시니어, 시니어 개발자, 리액트, 타입스크립트, 개발자, 비전공, 전공',
  thumbnail = 'https://kdong.s3.ap-northeast-2.amazonaws.com/dev/thumbnail-kdong-blog.png',
  twitter,
  og
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitter?.title || title} />
      <meta
        name="twitter:description"
        content={twitter?.description || description}
      />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:creator" content="@" />
      <meta name="twitter:image" content={twitter?.image || thumbnail} />

      {/* og */}
      <meta property="og:title" content={og?.title || title} />
      <meta
        property="og:description"
        content={og?.description || description}
      />
      <meta property="og:url" content={og?.url || 'https://kdong.dev'} />
      <meta property="og:site_name" content="kdong.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={og?.image || thumbnail} />
    </Head>
  );
};
