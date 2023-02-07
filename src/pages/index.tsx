// base
import type { GetStaticProps, NextPage } from 'next';

// libraries
import { Row, Col, Modal } from 'antd';

// layouts
import { TistoryLayout } from 'layouts';

// containers
import { MainBanner, MainBoard, MobileMainLists } from 'container';

// components
import { BasicCard } from 'components';
import { ReferApi } from 'modules';
import { GuestbookApi, guestbookListsState } from 'modules/guestbook';
import { useMedia } from 'hooks';
import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

interface HomePageProps {
  referenceLists: any[];
  guestbookLists: any[];
}

const HomePage: NextPage<HomePageProps> = ({
  referenceLists,
  guestbookLists
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { isMobile } = useMedia();

  const setGuestbookLists = useSetRecoilState<any[]>(guestbookListsState);

  useEffect(() => {
    setGuestbookLists(guestbookLists);
  }, [guestbookLists, setGuestbookLists]);

  return (
    <>
      <TistoryLayout>
        {!isMobile && (
          <>
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
          </>
        )}

        {isMobile && (
          <>
            <MainBanner />
            <div style={{ marginTop: 100 }}>
              <MobileMainLists datas={referenceLists} />
            </div>
          </>
        )}
      </TistoryLayout>
      <Modal
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <p>현재 레이아웃 수정중에 있으므로, 디자인 오류가 있을 수 있습니다.</p>
      </Modal>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const referApi = new ReferApi();
    const guestbookApi = new GuestbookApi();

    const allReferenceLists = await referApi.getAllReference();
    const allGuestbookLists = await guestbookApi.getAllGuestbook();

    return {
      props: {
        referenceLists: allReferenceLists.slice(0, 21) || [],
        guestbookLists: allGuestbookLists || []
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
