// base
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// containers
import { MainContainer } from 'containers';

// modules
import { AuthApi, ResponseProfile } from 'modules';

interface HomepageProsp {
  profile: ResponseProfile;
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
    const authApi = new AuthApi();
    const profile = await authApi.getKdongProfile();

    return {
      props: {
        profile
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
