// base
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// containers
import { MainContainer } from 'containers';

// modules
import { ProfileApi, ResponseMainProfileProps } from 'modules';

interface HomepageProsp {
  profile: ResponseMainProfileProps;
}

const Homepage: React.FC<HomepageProsp> = ({ profile }) => {
  return (
    <MainLayout>
      <MainContainer profile={profile} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const profileApi = new ProfileApi();
    const profile = await profileApi.getMainProfile();

    return {
      props: {
        profile: {
          ...profile,
          result: {
            ...profile.result,
            bannerLists: profile.result.bannerLists[0]
          }
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
