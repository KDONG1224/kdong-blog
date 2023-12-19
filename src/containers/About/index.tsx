// base
import React, { useEffect } from 'react';

// style
import { StyledAbout } from './style';

// components
import { BasicCard, BlurImage } from 'components';

// hooks
import { useMedia } from 'hooks';

// consts
import { aboutIcons, aboutImages, aboutSection1, aboutSection2 } from 'consts';

// libraries
import AOS from 'aos';

export const About = () => {
  const { isMobile } = useMedia();

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      anchorPlacement: 'top-center',
      once: false,
      offset: 50,
      delay: 300
    });
  }, []);

  return (
    <StyledAbout $ismobile={isMobile}>
      <div className="about-wrapper">
        <div className="about-wrapper-title">
          <h1>About</h1>
        </div>
        <div className="about-wrapper-body">
          <div className="about-wrapper-body-content first">
            <p>
              깊은 기술적 영감
              <br />
              나만의 프론트엔드 취향
              <br />
              소통과 교류의 장
            </p>
            <div>
              <BlurImage src={aboutImages.ABOUT_LOGO} alt="어바웃 로고" />
            </div>
          </div>
          <div className="about-wrapper-body-content second">
            <h2 data-aos="fade-up">KDONG은 기대해요</h2>
            <div className="about-wrapper-body-content-box">
              {aboutSection1.map((data) => (
                <BasicCard key={data.key} data={data} />
              ))}
            </div>
          </div>
          <div className="about-wrapper-body-content third">
            <h2>기대하는 만큼 고민해요</h2>
            <div className="about-wrapper-body-content-box">
              {aboutSection2.map((data) => (
                <BasicCard key={data.key} data={data} />
              ))}
            </div>
          </div>
          <div className="about-wrapper-body-content four">
            <h2>그래서 다 준비했어요!</h2>
            <div className="about-wrapper-body-content-list">
              <div
                className="about-wrapper-body-content-list-item"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="cut" />
                <div className="about-wrapper-body-content-list-item-title">
                  <h3>User</h3>
                  <p>UX/UI 초점</p>
                </div>
                <div className="about-wrapper-body-content-list-item-desc">
                  <p>
                    사용자의 피드백과 데이터 분석을 기반으로
                    <br />
                    사용자 중심의 프론트엔드를 구현해요
                  </p>
                  <span>#사용자중심 #UX #데이터분석</span>
                </div>
              </div>

              <div
                className="about-wrapper-body-content-list-item"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="cut" />
                <div className="about-wrapper-body-content-list-item-title">
                  <h3>Trend</h3>
                  <p>기술 탐구</p>
                </div>
                <div className="about-wrapper-body-content-list-item-desc">
                  <p>
                    새로운 프레임워크와 라이브러리를 탐구하며
                    <br />
                    프론트엔드 개발의 트렌드를 익히고 실무에 적용해요
                  </p>
                  <span>#프레임워크 #라이브러리 #트렌드</span>
                </div>
              </div>

              <div
                className="about-wrapper-body-content-list-item"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="cut" />
                <div className="about-wrapper-body-content-list-item-title">
                  <h3>Design</h3>
                  <p>디자인 전략</p>
                </div>
                <div className="about-wrapper-body-content-list-item-desc">
                  <p>
                    다양한 디바이스와 환경에서 완벽하게 작동하는
                    <br />
                    반응형 웹사이트를 구축해요
                  </p>
                  <span>#반응형 #웹디자인 #멀티플랫폼</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-wrapper-body-content five">
            <h2>이제 함께해요!</h2>
            <div
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div>
                <BlurImage src={aboutIcons.GIF} alt="움직이는 크동" />
              </div>
            </div>

            <p>
              혁신적인 인터페이스 설계
              <br />
              최신 기술 동향 탐구
              <br />
              효율적인 코드 작성과 최적화
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};
