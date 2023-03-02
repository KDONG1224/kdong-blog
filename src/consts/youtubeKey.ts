import { isMobile } from 'utils';
import { Options } from 'youtube-player/dist/types';

export const youtubeOptions: Options = {
  width: '100%',
  height: '600',
  playerVars: {
    autoplay: 0, //자동재생 O
    rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
    modestbranding: 1 // 컨트롤 바에 youtube 로고를 표시하지 않음
  }
};

export const youtubeKeyLists = [
  {
    youtubeId: '4a9iA3AH84I',
    youtubeName: '국비지원 UI UX 페이퍼 프로토타입'
  },
  {
    youtubeId: 'TAc6h89l8SY',
    youtubeName: '수상레저체험 아카데미 - 강동재 인터뷰'
  },
  {
    youtubeId: 'ZhiUebupLv8',
    youtubeName:
      '2018년 KBS청주 지금 충북은 수상레저체험 아카데미 강동재 인터뷰 녹화본 - 포트폴리오용'
  },
  {
    youtubeId: 'IvpGzotDfrU',
    youtubeName:
      '2019년 KBS청주 지금 충북은 전국카약대회 강동재 인터뷰 녹화본 - 포트폴리오용'
  },
  {
    youtubeId: '2jjN0scXwMM',
    youtubeName:
      '2019년 CJB청주방송 아름다운충북 수상레저체험 아카데미 강동재 인터뷰 녹화본'
  },
  {
    youtubeId: 'ZOA7xKf7OSg',
    youtubeName: 'Something, 한강 - 강동재 기획 및 담당자로 참여(포트폴리오 용)'
  },
  {
    youtubeId: 't8EfGaQI0qk',
    youtubeName:
      '수상체험 50초 홍보영상 최종 - 강동재 기획 및 담당자로 참여(포트폴리오 용)'
  }
];
