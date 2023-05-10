// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMain } from './style';

// components
import { BasicImage, FaqList, HomBanner, ListBox } from 'components';

// consts
import {
  ROUTE_ALGORITHM,
  ROUTE_PROJECT,
  ROUTE_WANTED,
  algorithmList,
  commonIcons,
  faqList,
  recommandList
} from 'consts';

// hooks
import { useMedia } from 'hooks';

// libs
import { windowLocation } from 'libs';

export const MainContainer = () => {
  const { isMobile } = useMedia();
  const router = useRouter();

  const handleMove = (path: string) => {
    router.push(path);
  };

  return (
    <StyledMain ismobile={isMobile}>
      <div className="main-wrapper">
        <div className="main-wrapper-banner container">
          <HomBanner />
        </div>
        <div className="main-wrapper-recommand">
          <div className="main-wrapper-recommand-box container">
            <ListBox
              headerTitle="지금 주목할 만한 추천글"
              subHeaderTitle="KDONG이 추천하는 글을 둘러보세요 :)"
              lists={[...recommandList, ...recommandList]}
              type="check"
              delay={4400}
              onClickMore={() => handleMove(ROUTE_ALGORITHM)}
            />
          </div>
        </div>
        <div className="main-wrapper-subBanner container">
          <div
            className="main-wrapper-subBanner-left"
            onClick={() => windowLocation('instagram')}
          />
          <div
            className="main-wrapper-subBanner-right"
            onClick={() => windowLocation('github')}
          />
        </div>
        <div className="main-wrapper-project">
          <div className="main-wrapper-project-box container">
            <ListBox
              headerTitle="다양한 PROJECT"
              subHeaderTitle="다양한 프로젝트를 구경해보세요 :)"
              lists={[...recommandList, ...recommandList]}
              type="polygon"
              delay={3000}
              onClickMore={() => handleMove(ROUTE_PROJECT)}
            />
          </div>
        </div>
        <div className="main-wrapper-algorithm">
          <div className="main-wrapper-algorithm-box container">
            <ListBox
              headerTitle="알고리즘 문제풀이"
              subHeaderTitle="다양한 알고리즘 문제를 풀어보았어요 :)"
              lists={algorithmList.filter((item) => item.recommand)}
              type="image"
              onClickMore={() => handleMove(ROUTE_ALGORITHM)}
            />
          </div>
        </div>
        <div
          className="main-wrapper-bottomBanner container"
          onClick={() => handleMove(ROUTE_WANTED)}
        >
          <div className="main-wrapper-bottomBanner-left">
            <span>WANTED</span>
          </div>
          <div className="main-wrapper-bottomBanner-center">
            <p>새로운 개발 인재를 찾고 있다면</p>
            <p>KDONG은 후회없는 선택입니다.</p>
          </div>
          <div className="main-wrapper-bottomBanner-right">
            <div className="main-wrapper-bottomBanner-right-box">
              <BasicImage
                src={commonIcons.ICON_RIGHT_ARROW}
                alt="오른쪽 화살표 아이콘"
              />
            </div>
          </div>
        </div>
        <div className="main-wrapper-faq container">
          <div className="main-wrapper-faq-left">
            <span>FAQ</span>
          </div>
          <div className="main-wrapper-faq-right">
            <FaqList faqList={faqList} />
          </div>
        </div>
      </div>
    </StyledMain>
  );
};
