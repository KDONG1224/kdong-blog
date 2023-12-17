// infinite scroll
export const DEFAULT_SKIP = 0;
export const DEFAULT_LIMIT = 30;

export const DEFAULT_PAGE = 0;
export const DEFAULT_SIZE = 10;

// data format
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD, HH:mm:ss';

// tabel
export const DEFAULT_PAGE_SIZE = 50;
export const pageSizeRange = [10, 20, 50, 100];

export const faqTypeList = [
  { label: '종류', value: 'concat' },
  {
    label: '이력서',
    value: 'resume'
  },
  {
    label: '이메일',
    value: 'email'
  },
  {
    label: '기타',
    value: 'etc'
  }
];

export const changeKorFaqType = (type: string) => {
  const find = faqTypeList.find((f) => f.value === type);

  if (!find) return '-';

  return find.label;
};

export const lectureTypeList = [
  {
    label: '알고리즘',
    value: 'algorithm'
  },
  {
    label: '프로젝트',
    value: 'project'
  },
  {
    label: '레퍼런스',
    value: 'reference'
  },
  {
    label: '이벤트',
    value: 'event'
  }
];
