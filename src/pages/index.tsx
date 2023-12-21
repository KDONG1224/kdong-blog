// base
import { GetServerSideProps } from 'next';

// pages
import CustomSeo from './seo';

// layouts
import { MainLayout } from 'layouts';

// containers
import { MainContainer } from 'containers';

// modules
import { ArticleListsProps, ArticleeApi } from 'modules/article';

export interface HomepageProps {
  articleLists: ArticleListsProps[];
  recommendLists: ArticleListsProps[];
}

const Homepage: React.FC<HomepageProps> = ({
  articleLists,
  recommendLists
}) => {
  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그" />
      <MainLayout>
        <MainContainer
          articleLists={articleLists}
          recommendLists={recommendLists}
        />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const articleApi = new ArticleeApi();
    const articles = await articleApi.getRecommendArticles();

    return {
      props: {
        articleLists: articles.result.referenceLists,
        recommendLists: articles.result.recommendLists
      }
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true
    };
  }
};

export default Homepage;
