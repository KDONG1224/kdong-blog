// base
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMain } from './style';

// pages
import { HomepageProps } from 'pages';

// components
import { BasicCollapse, BasicImage, HomBanner, ListBox } from 'components';

// modules
import { kdongProfileState } from 'modules';

// hooks
import { useMedia } from 'hooks';

// consts
import {
  ROUTE_ALGORITHM,
  ROUTE_REFERENCE,
  ROUTE_WANTED,
  commonIcons
} from 'consts';

// libs
import { windowLocation } from 'libs';

// libraries
import { useRecoilValue } from 'recoil';

interface MainContainerProps extends HomepageProps {}

export const MainContainer: React.FC<MainContainerProps> = ({
  articleLists,
  recommendLists,
  algorithmLists
}) => {
  const [activeFaqKey, setActiveFaqKey] = useState<string[]>([]);

  const profile = useRecoilValue(kdongProfileState);

  const { isMobile } = useMedia();
  const router = useRouter();

  const faqItems = useMemo(() => {
    if (!profile || !profile.result || !profile.result.faqLists) return [];

    const items = profile.result.faqLists
      .filter((x) => x.expose)
      .map((item) => ({
        key: item.id,
        label: item.question,
        children: <div>{item.answer}</div>
      }));

    return items;
  }, [profile]);

  const handleMove = (path: string) => {
    router.push(path);
  };

  const handleLoction = (type: 'instagram' | 'github') => {
    if (type === 'instagram') {
      windowLocation('https://www.instagram.com/__kdong');
    } else {
      windowLocation('https://github.com/KDONG1224');
    }
  };

  const onClickCard = (
    id: string,
    type: 'recommand' | 'reference' | 'algorithm'
  ) => {
    if (type === 'reference') {
      router.push(`${ROUTE_REFERENCE}/${id}`);
    }

    if (type === 'algorithm') {
      router.push(`${ROUTE_ALGORITHM}/${id}`);
    }
  };

  const onChangeCollapse = (key: string | string[]) => {
    setActiveFaqKey(key as string[]);
  };

  return (
    <StyledMain $ismobile={isMobile}>
      <div className="main-wrapper">
        <div className="main-wrapper-banner container">
          <HomBanner bannerLists={profile.result.bannerLists} />
        </div>
        <div className="main-wrapper-recommand">
          <div className="main-wrapper-recommand-box container">
            {recommendLists && (
              <ListBox
                headerTitle="지금 주목할 만한 인기글"
                subHeaderTitle="조회수가 가장 높은 인기글을 둘러보세요 :)"
                lists={recommendLists}
                type="check"
                delay={4400}
                onClickMore={() => handleMove(ROUTE_ALGORITHM)}
                onClickCard={(id: string) => onClickCard(id, 'recommand')}
              />
            )}
          </div>
        </div>
        <div className="main-wrapper-subBanner container">
          <div
            className="main-wrapper-subBanner-left"
            onClick={() => handleLoction('instagram')}
          />
          <div
            className="main-wrapper-subBanner-right"
            onClick={() => handleLoction('github')}
          />
        </div>
        <div className="main-wrapper-project">
          <div className="main-wrapper-project-box container">
            {articleLists && (
              <ListBox
                headerTitle="다양한 Reference"
                subHeaderTitle="다양한 레퍼런스 구경해보세요 :)"
                lists={articleLists}
                type="polygon"
                delay={3000}
                onClickMore={() => handleMove(ROUTE_REFERENCE)}
                onClickCard={(id: string) => onClickCard(id, 'reference')}
              />
            )}
          </div>
        </div>
        <div className="main-wrapper-algorithm">
          <div className="main-wrapper-algorithm-box container">
            {algorithmLists && (
              <ListBox
                headerTitle="알고리즘 문제풀이"
                subHeaderTitle="다양한 알고리즘 문제를 풀어보았어요 :)"
                lists={algorithmLists}
                type="image"
                onClickMore={() => handleMove(ROUTE_ALGORITHM)}
                onClickCard={(id: string) => onClickCard(id, 'algorithm')}
              />
            )}
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
            <BasicCollapse
              activeKey={activeFaqKey}
              onChange={onChangeCollapse}
              items={faqItems}
            />
          </div>
        </div>
      </div>
    </StyledMain>
  );
};
