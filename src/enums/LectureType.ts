export const LectureType = {
  ALGORITHM: 'algorithm',
  REFERNCE: 'reference',
  PROJECT: 'project',
  EVENT: 'event'
};

export const LectureTypes = {
  getLectureKor: (key: string) => {
    switch (key) {
      case LectureType.ALGORITHM:
        return '알고리즘';
      case LectureType.REFERNCE:
        return '레퍼런스';
      case LectureType.PROJECT:
        return '프로젝트';
      case LectureType.EVENT:
        return '이벤트';
    }
  }
};
