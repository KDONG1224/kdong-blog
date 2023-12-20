// base
import { GetServerSideProps } from 'next';

// pages
import CustomSeo from './seo';

// layouts
import { MainLayout } from 'layouts';

// containers
import { MainContainer } from 'containers';

// modules
import {
  CategoryApi,
  CategoryListsProps,
  ProfileApi,
  ResponseMainProfileProps
} from 'modules';
import {
  ResponseArticleListsResultProps,
  ArticleeApi,
  ResponseRecommendResultProps
} from 'modules/article';
import { mainCategoryState } from 'modules/category';

// libraries

import { useSetRecoilState } from 'recoil';

export interface HomepageProps {
  profile: ResponseMainProfileProps;
  articleLists: ResponseArticleListsResultProps;
  menuLists?: CategoryListsProps[];
  recommendLists: ResponseRecommendResultProps;
}

const Homepage: React.FC<HomepageProps> = ({
  profile,
  articleLists,
  menuLists,
  recommendLists
}) => {
  const setMenuLists = useSetRecoilState(mainCategoryState);

  if (menuLists) {
    setMenuLists(menuLists);
  }

  return (
    <>
      <CustomSeo title="🤖 밥값하는 개발자 블로그" />
      <MainLayout>
        <MainContainer
          profile={profile}
          articleLists={articleLists}
          recommendLists={recommendLists}
        />
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
    const recommendLists = await articleApi.getRecommendArticles();

    const categoryApi = new CategoryApi();
    const categoryLists = await categoryApi.getMainCategories();

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
        },
        recommendLists: {
          ...recommendLists.result
        },
        menuLists: categoryLists.result.categories
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
