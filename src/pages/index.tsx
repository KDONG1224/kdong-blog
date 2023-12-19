// base
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// containers
import { MainContainer } from 'containers';

// modules
import { ProfileApi, ResponseMainProfileProps } from 'modules';
import { ResponseArticleListsResultProps, ArticleeApi } from 'modules/article';
import CustomSeo from './seo';

export interface HomepageProps {
  profile: ResponseMainProfileProps;
  articleLists: ResponseArticleListsResultProps;
}

const Homepage: React.FC<HomepageProps> = ({ profile, articleLists }) => {
  return (
    <>
      <CustomSeo title="밥값하는 개발자 블로그 - 메인" />
      <MainLayout>
        <MainContainer profile={profile} articleLists={articleLists} />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const profileApi = new ProfileApi();
    const profile = await profileApi.getMainProfile();

    const articleApi = new ArticleeApi();
    const articleLists = await articleApi.getAllArticles();

    return {
      props: {
        profile: {
          ...profile,
          result: {
            ...profile.result,
            bannerLists: profile.result.bannerLists[0]
          }
        },
        articleLists: {
          ...articleLists.result
        }
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
