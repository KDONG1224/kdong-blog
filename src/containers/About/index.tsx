// base
import React from 'react';

// style
import { StyledAbout } from './style';

// hooks
import { useMedia } from 'hooks';
import { BasicCard, BlurImage } from 'components';
import { aboutImages } from 'consts';

export const About = () => {
  const { isMobile } = useMedia();

  const aboutDummy1 = [
    {
      key: 1,
      title: '새로운 연결',
      desc: '창작자, 기획자, 애호가가 모여<br/>새로운 커뮤니티를 형성해요',
      img: aboutImages.ABOUT_IMG_02,
      aosVisible: 'fade-up-right'
    },
    {
      key: 2,
      title: '예술 영감 공유',
      desc: '예술가를 직접 만나 깊은 예술 세계에 몰입하며<br/>작품 너머 예술 영감을 함께 나누어요',
      img: aboutImages.ABOUT_IMG_01,
      aosVisible: 'fade-up-left'
    },
    {
      key: 3,
      title: '보다 넓은 예술 향유',
      desc: '온라인 공간을 활용해 장소에 제한되지 않는<br/>예술활동을 만들어요',
      img: aboutImages.ABOUT_IMG_03,
      aosVisible: 'fade-up-right'
    },
    {
      key: 4,
      title: '내면의 확장',
      desc: '다양한 만남과 대화로 나를 알아가며<br/>세계를 확장해요',
      img: aboutImages.ABOUT_IMG_01,
      aosVisible: 'fade-up-left'
    }
  ];

  return (
    <StyledAbout ismobile={isMobile}>
      <div className="about-wrapper">
        <div className="about-wrapper-title">
          <h1>About</h1>
        </div>
        <div className="about-wrapper-body">
          <div className="about-wrapper-body-content first">
            <p>
              깊은 예술 영감
              <br />
              특별한 예술 취향
              <br />
              모든 예술 모임이 열리는곳
            </p>
            <div>
              <BlurImage src={aboutImages.ABOUT_LOGO} alt="어바웃 로고" />
            </div>
          </div>
          <div className="about-wrapper-body-content second">
            <h2 data-aos="fade-up">KDONG 기대해요</h2>
            <div className="about-wrapper-body-content-box">
              {aboutDummy1.map((data) => (
                <BasicCard key={data.key} data={data} />
              ))}
            </div>
          </div>
          <div className="about-wrapper-body-content third">
            <h2>KDONG 기대해요</h2>
            <div className="about-wrapper-body-content-box">
              {aboutDummy1.map((data) => (
                <BasicCard key={data.key} data={data} />
              ))}
            </div>
          </div>
          <div className="about-wrapper-body-content four">
            <h2>KDONG 기대해요</h2>
            <div className="about-wrapper-body-content-box">
              {aboutDummy1.map((data) => (
                <BasicCard key={data.key} data={data} />
              ))}
            </div>
          </div>
          <div className="about-wrapper-body-content four">
            <h2>KDONG 기대해요</h2>
            <div className="about-wrapper-body-content-box">
              {aboutDummy1.map((data) => (
                <BasicCard key={data.key} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};
