/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-empty-function */

import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

import { ArticleeApi, ArticleListsProps } from 'modules';

export const getServerSideProps = async () => {
  const articleApi = new ArticleeApi();
  const articles = await articleApi.getAllArticlesXml();
  const articleLists = articles.result.articles as ArticleListsProps[];

  const sitemapFields: ISitemapField[] = articleLists.map(({ id }) => ({
    loc: `https://kdong.dev/reference/${id}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 1
  }));

  console.log('== sitemapFields == : ', sitemapFields);

  return getServerSideSitemap(sitemapFields);
};

export default () => {};
