export enum DateRange {
  ALL = 'ALL',
  RECENT_ONE_MONTH = 'RECENT_ONE_MONTH',
  RECENT_THREE_MONTH = 'RECENT_THREE_MONTH',
  RECENT_SIX_MONTH = 'RECENT_SIX_MONTH',
  RECENT_ONE_YEAR = 'RECENT_ONE_YEAR',
  USER_SELECT = 'RECENT_ONE_YEAR'
}

export const DateRangeMethods = {
  getLabel: (key: string) => {
    switch (key) {
      case DateRange.ALL:
        return '전체';
      case DateRange.RECENT_ONE_MONTH:
        return '1개월';
      case DateRange.RECENT_THREE_MONTH:
        return '3개월';
      case DateRange.RECENT_SIX_MONTH:
        return '6개월';
      case DateRange.RECENT_ONE_YEAR:
        return '1년';
      case DateRange.USER_SELECT:
        return '직접선택';
      default:
        return '전체';
    }
  }
};
