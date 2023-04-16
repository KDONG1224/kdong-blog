/* eslint-disable react/no-unescaped-entities */
// base
import React from 'react';

// style
import { StyledAlgorithm } from './style';

// components
import { TagText } from 'components';

// libraries
import Highlight from 'react-highlight';

export const Algorithm = () => {
  const emailArray = ['gkfl8809', '@ naver.com'];

  return (
    <StyledAlgorithm>
      <div className="algo-wrapper">
        <div className="algo-wrapper-header">
          <div className="algo-wrapper-header-title">
            <h2>알고리즘 문제풀이</h2>
            <span>프로그래머스</span>
          </div>

          <div className="algo-wrapper-header-write">
            <div className="algo-wrapper-header-write-name">
              <span className="algo-wrapper-header-write-name-title head">
                성명
              </span>
              <span className="algo-wrapper-header-write-name-kdong">
                KDONG
              </span>
            </div>
            <div className="algo-wrapper-header-write-number">
              <span className="algo-wrapper-header-write-number-title head">
                이메일
              </span>
              {emailArray.map((txt, idx) => (
                <span
                  key={idx}
                  className={`algo-wrapper-header-write-number-box box${
                    idx + 1
                  }`}
                >
                  {txt}
                </span>
              ))}
            </div>
            <div className="algo-wrapper-header-write-date">
              <span className="algo-wrapper-header-write-date-title head">
                날짜
              </span>
              <span className="algo-wrapper-header-write-date-kdong">
                2023.03.20
              </span>
            </div>
          </div>
        </div>

        <div className="algo-wrapper-contents">
          <div className="algo-wrapper-contents-title">
            <h2>문제 설명</h2>
            <p>
              카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어,
              카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를
              담당하게 되었습니다.
              <br />
              "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디
              규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서
              규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
              <br />
              다음은 카카오 아이디의규칙입니다.
              <br />
              <br />
              &#183; 아이디의 길이는 3자 이상 15자 이하여야 합니다.
              <br />
              &#183; 아이디는 알파벳 소문자, 숫자, 빼기(
              <TagText text="-" />
              ), 밑줄(
              <TagText text="_" />
              ), 마침표(
              <TagText text="." />
              )문자만 사용할 수 있습니다.
              <br />
              &#183; 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로
              사용할 수 없습니다.
              <br />
              <br /> "네오"는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규
              유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고
              규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고
              합니다.
              <br />
              신규 유저가 아이디가 <TagText text="new_id" /> 라고 한다면,
            </p>
            <Highlight language="javascript" innerHtml={true}>
              {`'1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다. 2단계
new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를
제외한 모든 문자를 제거합니다. 3단계 new_id에서 마침표(.)가 2번
이상 연속된 부분을 하나의 마침표(.)로 치환합니다. 4단계 new_id에서
마침표(.)가 처음이나 끝에 위치한다면 제거합니다. 5단계 new_id가 빈
문자열이라면, new_id에 "a"를 대입합니다. 6단계 new_id의 길이가
16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을
모두 제거합니다. 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면
끝에 위치한 마침표(.) 문자를 제거합니다. 7단계 new_id의 길이가 2자
이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지
반복해서 끝에 붙입니다.'
              `}
            </Highlight>
          </div>
        </div>
      </div>
    </StyledAlgorithm>
  );
};
