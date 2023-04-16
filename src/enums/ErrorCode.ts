export enum ErrorCode {
  AUTHORIZATION_REQUIRED = 'AUTHORIZATION_REQUIRED'
}

// TODO: 추후 API 에러 코드 정의되면 해당 메서드 통해서 에러 메시지 적용할 예정
export const errorCodeMethods = {
  getErrorMsg: (key: string) => {
    switch (key) {
      case ErrorCode.AUTHORIZATION_REQUIRED:
        return '사용자 인증 실패';

      default:
        return '';
    }
  }
};
