export interface PageOptionsProps {
  key: string;
  title: string;
  options: SelectListItemProps[][];
}

export interface SelectListItemProps {
  label: string;
  value: string;
}

export const selectTypeOption: SelectListItemProps[] = [
  {
    label: '종류',
    value: 'type'
  },
  {
    label: '온라인',
    value: 'online'
  },
  {
    label: '오프라인',
    value: 'offline'
  }
];

export const selectGenreOption: SelectListItemProps[] = [
  {
    label: '장르',
    value: 'genre'
  },
  {
    label: '문학',
    value: 'literature'
  },
  {
    label: '커뮤니티',
    value: 'community'
  }
];

export const selectMeetingOption: SelectListItemProps[] = [
  {
    label: '모임 유형',
    value: 'meeting'
  },
  {
    label: '스터디',
    value: 'study'
  },
  {
    label: '강연',
    value: 'lecture'
  }
];

export const selectOrderOption: SelectListItemProps[] = [
  {
    label: '최근 등록순',
    value: 'order'
  },
  {
    label: '오래된순',
    value: 'online'
  }
];

export const selectProjectTypeOption: SelectListItemProps[] = [
  {
    label: '종류',
    value: 'type'
  },
  {
    label: '프로젝트',
    value: 'real'
  },
  {
    label: '사이드 프로젝트',
    value: 'side'
  }
];

export const selectProjectDivisionOption: SelectListItemProps[] = [
  {
    label: '구분',
    value: 'division'
  },
  {
    label: '프론트',
    value: 'front'
  },
  {
    label: '백',
    value: 'back'
  }
];

export const selectProjectSkillOption: SelectListItemProps[] = [
  {
    label: '스킬',
    value: 'skill'
  },
  {
    label: 'javascript',
    value: 'javascript'
  },
  {
    label: 'react',
    value: 'react'
  },
  {
    label: 'nestjs',
    value: 'nestjs'
  }
];

export const pageOptions: PageOptionsProps[] = [
  {
    key: 'project',
    title: '프로젝트',
    options: [
      selectProjectTypeOption,
      selectProjectDivisionOption,
      selectProjectSkillOption,
      selectOrderOption
    ]
  },
  {
    key: 'reference',
    title: '레퍼런스',
    options: [
      selectProjectTypeOption,
      selectProjectDivisionOption,
      selectProjectSkillOption,
      selectOrderOption
    ]
  },
  {
    key: 'algorithm',
    title: '알고리즘',
    options: [
      selectTypeOption,
      selectGenreOption,
      selectMeetingOption,
      selectOrderOption
    ]
  }
];
