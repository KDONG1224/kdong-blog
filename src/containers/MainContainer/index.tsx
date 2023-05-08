// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMain } from './style';

// components
import { BasicImage, BlurImage, FaqList, HomBanner, ListBox } from 'components';

// consts
import {
  ROUTE_WANTED,
  algorithmList,
  bannerImages,
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

  console.log(algorithmList.filter((item) => item.recommand));

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
            />
          </div>
        </div>
        <div className="main-wrapper-subBanner container">
          <div
            className="main-wrapper-subBanner-left"
            onClick={() => windowLocation('instagram')}
          >
            <div>
              <BlurImage src={bannerImages.IMAGE_BANNER_INSTAGRAM} alt="" />
            </div>
          </div>
          <div
            className="main-wrapper-subBanner-right"
            onClick={() => windowLocation('github')}
          >
            <div>
              <BlurImage src={bannerImages.IMAGE_BANNER_GITHUB} alt="" />
            </div>
          </div>
        </div>
        <div className="main-wrapper-project">
          <div className="main-wrapper-project-box container">
            <ListBox
              headerTitle="지금까지 PROJECT"
              subHeaderTitle="지금까지 진행했던 프로젝트를 구경해보세요 :)"
              lists={[...recommandList, ...recommandList]}
              type="polygon"
              delay={3000}
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
            />
          </div>
        </div>
        <div className="main-wrapper-bottomBanner container">
          <div className="main-wrapper-bottomBanner-left">
            <span>WANTED</span>
          </div>
          <div className="main-wrapper-bottomBanner-center">
            <p>새로운 개발 인재를 찾고 있다면</p>
            <p>KDONG은 후회없는 선택입니다.</p>
          </div>
          <div
            className="main-wrapper-bottomBanner-right"
            onClick={() => handleMove(ROUTE_WANTED)}
          >
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
