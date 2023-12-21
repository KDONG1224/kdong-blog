import { GetServerSideProps, NextPage } from 'next';

import dayjs from 'dayjs';
import { ArticleeApi } from 'modules';

const SitemapPage: NextPage = () => {
  return null;
};

const insideXMLString = (xmlContent: string): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${xmlContent}
    </urlset>
  `;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;

  const articleApi = new ArticleeApi();
  const articles = await articleApi.getAllArticlesXml();
  const articleLists = articles.result.articles;

  let pagesXML = '';

  const lastmod = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');

  for (const { id } of articleLists) {
    pagesXML += `
      <url>
        <loc>https://kdong.dev/reference/${id}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>
    `;
  }

  const xmlContents = insideXMLString(pagesXML);

  if (res !== undefined) {
    res.setHeader('Content-Type', 'text/xml');

    res.write(xmlContents);
    res.end();
  }

  return {
    props: {}
  };
};

export default SitemapPage;
