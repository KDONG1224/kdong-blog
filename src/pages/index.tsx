// base
import type { GetServerSideProps, NextPage } from 'next';

// libraries
import { Row, Col } from 'antd';

// layouts
import { MainLayout } from 'layouts';

// containers
import { MainBanner, MainBoard } from 'container';

// components
import { BasicCard } from 'components';
import { ReferApi } from 'modules';
import { GuestbookApi } from 'modules/guestbook';

interface HomePageProps {
  referenceLists: any[];
  guestbookLists: any[];
}

const HomePage: NextPage<HomePageProps> = ({
  referenceLists,
  guestbookLists
}) => {
  return (
    <MainLayout>
      <Row gutter={24}>
        <Col span={16}>
          <div
            style={{
              height: 'calc(100vh - 80px)',
              overflowY: 'scroll'
            }}
          >
            <MainBanner />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {referenceLists.map((reference) => (
                <Col
                  className="gutter-row"
                  span={8}
                  key={reference.id}
                  style={{ marginBottom: 60 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <BasicCard data={reference} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col
          span={8}
          style={{
            paddingRight: 20
          }}
        >
          <MainBoard datas={guestbookLists} />
        </Col>
      </Row>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const referApi = new ReferApi();
    const guestbookApi = new GuestbookApi();

    const allReferenceLists = await referApi.getAllReference();
    const allGuestbookLists = await guestbookApi
      .getAllGuestbook()
      .then((res) => {
        const _res = res.sort((a: any, b: any) => {
          if (a.createdAt - b.createdAt) return -1;
        });

        return _res;
      });

    return {
      props: {
        referenceLists: allReferenceLists
          .slice(0, 21)
          .sort((a: any, b: any) => {
            if (a.updatedAt - b.updatedAt) return -1;
          }),
        guestbookLists: allGuestbookLists
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default HomePage;
