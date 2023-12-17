export interface PageOptionsProps {
  key: string;
  title: string;
  options: SelectListItemProps[][];
}

export interface SelectListItemProps {
  key: string;
  label: string;
  value: string;
}

export const selectTypeOption: SelectListItemProps[] = [
  {
    key: 'type',
    label: '종류',
    value: 'type'
  },
  {
    key: 'type',
    label: '온라인',
    value: 'online'
  },
  {
    key: 'type',
    label: '오프라인',
    value: 'offline'
  }
];

export const selectGenreOption: SelectListItemProps[] = [
  {
    key: 'category',
    label: '장르',
    value: 'genre'
  },
  {
    key: 'category',
    label: '문학',
    value: 'literature'
  },
  {
    key: 'category',
    label: '커뮤니티',
    value: 'community'
  }
];

export const selectMeetingOption: SelectListItemProps[] = [
  {
    key: 'category',
    label: '모임 유형',
    value: 'meeting'
  },
  {
    key: 'category',
    label: '스터디',
    value: 'study'
  },
  {
    key: 'category',
    label: '강연',
    value: 'lecture'
  }
];

export const selectOrderOption: SelectListItemProps[] = [
  {
    key: 'order__desc',
    label: '최근 등록순',
    value: 'DESC'
  },
  {
    key: 'order__asc',
    label: '오래된순',
    value: 'ASC'
  }
];

export const selectProjectTypeOption: SelectListItemProps[] = [
  {
    key: 'category',
    label: '카테고리',
    value: 'all'
  },
  {
    key: 'projectType',
    label: '프로젝트',
    value: 'real'
  },
  {
    key: 'projectType',
    label: '사이드 프로젝트',
    value: 'side'
  }
];

export const selectReferenceCategoryOption: SelectListItemProps[] = [
  {
    key: 'category',
    label: '카테고리',
    value: 'all'
  },
  {
    key: 'html',
    label: 'HTML',
    value: 'HTML'
  },
  {
    key: 'css',
    label: 'CSS',
    value: 'CSS'
  },
  {
    key: 'javascript',
    label: 'JAVASCRIPT',
    value: 'JAVASCRIPT'
  }
];

export const selectProjectDivisionOption: SelectListItemProps[] = [
  {
    key: 'positionType',
    label: '구분',
    value: 'all'
  },
  {
    key: 'positionType',
    label: '프론트',
    value: 'front'
  },
  {
    key: 'positionType',
    label: '백',
    value: 'back'
  }
];

export const selectProjectSkillOption: SelectListItemProps[] = [
  {
    key: 'skillType',
    label: '스킬',
    value: 'all'
  },
  {
    key: 'skillType',
    label: 'javascript',
    value: 'javascript'
  },
  {
    key: 'skillType',
    label: 'react',
    value: 'react'
  },
  {
    key: 'skillType',
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
    options: [selectReferenceCategoryOption, selectOrderOption]
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
