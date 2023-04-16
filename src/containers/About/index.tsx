// base
import React from 'react';

// style
import { StyledAbout } from './style';

// components
import { BlurImage, MainBanner } from 'components';

// modules
import { selectThemeState } from 'modules';

// consts
import { KdongHistory, KdongProject, KdongYoutube } from 'consts';

// libraries
import { useRecoilValue } from 'recoil';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const About = () => {
  const selectTheme = useRecoilValue(selectThemeState);

  const handleRouter = (url: string) => {
    window.location.href = url;
  };

  return (
    <StyledAbout isDarkMode={selectTheme}>
      <MainBanner />
      <div className="about-wrapper">
        <div className="about-wrapper-top">
          <h2 data-aos="fade-up">About</h2>
          <p data-aos="fade-up">
            항공 &middot; 기계설계를 전공으로 공부하였고, 다양한 분야의 업무를
            하며 나의 적성에 맞는 일을 찾고자 노력을 했습니다. 다니던 대학원을
            휴학하고 국비지원학원에서 약 6개월간의 여정을 시작했습니다. 아직은
            서툴고 부족하다는 점을 알고 있습니다. 하지만 반대로 생각하면 얼마나
            더 성장할 수 있는 기회라고 생각합니다. “밥값하는 프론트 엔드 개발자
            강동재” 는 항상 노력하며 열정적으로 공부하며 경험을 통해 성장하는
            모습을 보여드리겠습니다.
          </p>
        </div>
        <div className="about-wrapper-contents">
          <h2 data-aos="fade-up">Timestamps</h2>

          {KdongHistory.map(({ key, company, date, position, url }) => (
            <div
              className="about-wrapper-contents-timestamp"
              key={key}
              data-aos="fade-up"
            >
              <div className="about-wrapper-contents-timestamp-center">
                {company} {position}
                <span>
                  <ArrowRightIcon
                    fontSize="large"
                    onClick={() => handleRouter(url)}
                  />
                </span>
              </div>
              <div className="about-wrapper-contents-timestamp-left">
                {date}
              </div>
            </div>
          ))}
        </div>
        <div className="about-wrapper-contents">
          <h2 data-aos="fade-up">Projects</h2>
          <div className="about-wrapper-contents-project">
            {KdongProject.map(
              ({
                key,
                projectName,
                projectDesc,
                company,
                date,
                position,
                url,
                thumbnail
              }) => (
                <div
                  key={key}
                  data-aos="fade-up"
                  className="about-wrapper-contents-project-box"
                >
                  <div
                    className="about-wrapper-contents-project-box-img"
                    onClick={() => handleRouter(url[0])}
                  >
                    <BlurImage
                      src={thumbnail}
                      alt={`${projectName} 이미지`}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </div>
                  <div className="about-wrapper-contents-project-box-desc">
                    <h3>{projectName}</h3>
                    <span>{company}</span>
                    <span>{date}</span>
                    <div className="about-wrapper-contents-project-box-desc-lists position">
                      {position.map((pos, idx) => (
                        <span key={idx} className={pos.name}>
                          {pos.kor}
                        </span>
                      ))}
                    </div>
                    <p>{projectDesc}</p>
                    <div className="about-wrapper-contents-project-box-desc-lists">
                      {url.length > 0 ? (
                        url.map((link, idx) => (
                          <span key={idx} onClick={() => handleRouter(link)}>
                            작업물{idx + 1}
                          </span>
                        ))
                      ) : (
                        <span className="noLink">링크 없음</span>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="about-wrapper-contents">
          <h2 data-aos="fade-up">Youtube</h2>

          <div className="about-wrapper-contents-project">
            {KdongYoutube.map(({ youtubeId, youtubeName }) => (
              <div
                key={youtubeId}
                data-aos="fade-up"
                className="about-wrapper-contents-project-box"
              >
                <div
                  className="about-wrapper-contents-project-box-img"
                  onClick={() =>
                    handleRouter(`https://www.youtube.com/watch?v=${youtubeId}`)
                  }
                >
                  <BlurImage
                    src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                    alt={`${youtubeId} 이미지`}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                </div>
                <div className="about-wrapper-contents-project-box-desc">
                  <h3 className="youtube">{youtubeName}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};
