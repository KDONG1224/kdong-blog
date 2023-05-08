import { aboutImages } from './images';

export interface RecommandListProps {
  key: number;
  title: string;
  desc: string;
  tag: string;
  created: string;
  thumbnail: string;
  bgColor: string;
  badgeColor: string;
}

export interface ResponseFaqListProps {
  key: number;
  title: string;
  link: string;
}

export const recommandList: RecommandListProps[] = [
  {
    key: 1,
    title: '자바스크립트란?',
    desc: '자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다. 자바스크립트로 작성한 프로그램을 스크립트(script) 라고 부릅니다. 스크립트는 웹페이지의 HTML 안에 작성할 수 있는데, 웹페이지를 불러올 때 스크립트가 자동으로 실행됩니다.',
    tag: 'JAVASCRIPT',
    created: '2023-05-04',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/guestbook/1670325828599_IMG_6709.JPG',
    bgColor: '#5c00ef',
    badgeColor: '#ff5821'
  },
  {
    key: 2,
    title: '리액트란?',
    desc: '리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다. 리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다.',
    tag: 'REACT',
    created: '2023-05-04',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/guestbook/1670325774131_IMG_6875.jpeg',
    bgColor: '#ff5821',
    badgeColor: '#5c00ef'
  },
  {
    key: 3,
    title: 'HTML?',
    desc: '하이퍼 텍스트 마크업 언어는 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다.',
    tag: 'HTML',
    created: '2023-05-04',
    thumbnail: aboutImages.ABOUT_IMG_03,
    bgColor: '#484508',
    badgeColor: '#000000'
  },
  {
    key: 4,
    title: 'CSS?',
    desc: '종속형 시트 또는 캐스케이딩 스타일 시트는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이고, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 기본 파일명은 style.css이다.',
    tag: 'CSS',
    created: '2023-05-04',
    thumbnail: aboutImages.ABOUT_IMG_02,
    bgColor: '#000000',
    badgeColor: '#484508'
  }
];

export const faqList: ResponseFaqListProps[] = [
  { key: 1, title: '연락처가 궁금할땐 어떻게 하면 알 수 있을까요?', link: '' },
  {
    key: 2,
    title: '이력서를 보고 싶은데 어떻게 하면 볼 수 있을까요?',
    link: ''
  },
  { key: 3, title: '이메일 주소가 궁금해요!', link: '' }
];
