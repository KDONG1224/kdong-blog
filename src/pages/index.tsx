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
import { BookViewerProps, BooksApi } from 'modules/books';

export interface HomepageProps {
  articleLists: ArticleListsProps[];
  recommendLists: ArticleListsProps[];
  algorithmLists: ArticleListsProps[];
  bookLists: BookViewerProps[];
}

const Homepage: React.FC<HomepageProps> = ({
  articleLists,
  recommendLists,
  algorithmLists,
  bookLists
}) => {
  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그" />
      <MainLayout>
        <MainContainer
          articleLists={articleLists}
          recommendLists={recommendLists}
          algorithmLists={algorithmLists}
          bookLists={bookLists}
        />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const articleApi = new ArticleeApi();
    const articles = await articleApi.getRecommendArticles();

    const booksApi = new BooksApi();
    const bookLists = await booksApi.getBookLists();

    return {
      props: {
        articleLists: articles.result.referenceLists,
        recommendLists: articles.result.recommendLists,
        algorithmLists: articles.result.algorithmLists,
        bookLists: bookLists.result.booksLists
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
