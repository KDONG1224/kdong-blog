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
