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
  algorithmLists: ArticleListsProps[];
}

const Homepage: React.FC<HomepageProps> = ({
  articleLists,
  recommendLists,
  algorithmLists
}) => {
  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그" />
      <MainLayout>
        <MainContainer
          articleLists={articleLists}
          recommendLists={recommendLists}
          algorithmLists={algorithmLists}
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
        recommendLists: articles.result.recommendLists,
        algorithmLists: articles.result.algorithmLists
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
