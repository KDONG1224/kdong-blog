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
  desc: string;
}

export interface AlgorithmListProps {
  _id: string;
  title: string;
  desc: string;
  hint: string;
  level: string;
  tag: string;
  grassMyDesc: string;
  grassDifferDesc: string;
  grassMyCode: string;
  grassDifferCode: string;
  thumbnail: string;
  index: number;
  status: string;
  created: string;
  bgColor: string;
  badgeColor: string;
  recommand?: boolean;
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

export const algorithmList: AlgorithmListProps[] = [
  {
    _id: '639e8d1c6420a2f182bda8fc',
    title: '없는 숫자 더하기',
    desc: '0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.',
    hint: '1 ≤ numbers의 길이 ≤ 9 / 0 ≤ numbers의 모든 원소 ≤ 9 / numbers의 모든 원소는 서로 다릅니다. / [1,2,3,4,6,7,8,0] -> 14 / [5,8,4,0,6,7,9] -> 6 / 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다. / 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      'includes : 메서드는 배열이 특정 요소를 포함하고 있는지 판별, numbers에 i가 없으면 answer에 더하기',
    grassDifferDesc: '0부터 9까지의 합인 45에서 reduce를 사용하여 계산하였다.',
    grassMyCode:
      '"<pre>function solution(numbers) {<br>  let answer = 0;<br><br>  for (let i = 0; i &lt;= 9; i++) {<br>    if (!numbers.includes(i)) {<br>      answer += i;<br>    }<br>  }<br><br>  return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(numbers) {<br>    return 45 - numbers.reduce((cur, acc) =&gt; cur + acc, 0);<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671335196093_algorithm17@2x.png',
    index: 17,
    recommand: true,
    status: 'active',
    created: '2022-12-18T03:46:36.241Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639e8b666420a2f182bda8f2',
    title: '정수 내림차순으로 배치하기',
    desc: '함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.',
    hint: 'n은 1이상 8000000000 이하인 자연수입니다. / n: 118372 -> return 873211',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      '타입을 변환하여 구조분해할당을 한 뒤 sort를 하고 원래의 타입으로 return 한다.',
    grassDifferDesc: '정수를 배열로, 문자열로 한자리 거꾸로 정렬 후 정수',
    grassMyCode:
      '"<pre>function solution(n) {<br>  let answer = Number(<br>    [...String(n)].sort((a, b) =&gt; Number(b) - Number(a)).join(\'\')<br>  );<br><br>  return answer;<br>}</pre>\\n"',
    grassDifferCode:
      "\"<pre>function solution(n) {<br>    return +(''+n).split('').sort().reverse().join('');<br>}</pre>\\n\"",
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671334758023_algorithm16@2x.png',
    index: 16,
    recommand: true,
    status: 'active',
    created: '2022-12-18T03:39:18.259Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639e89376420a2f182bda8e0',
    title: '나누어 떨어지는 숫자 배열',
    desc: 'array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.',
    hint: 'arr은 자연수를 담은 배열입니다. / 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다. / divisor는 자연수입니다. / array는 길이 1 이상인 배열입니다. / arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다. / arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다. / 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      'filter와 sort함수를 사용하여 나누어 떨어지는 값을 찾은 뒤 오룸차순으로 정렬한다.',
    grassDifferDesc:
      '같은 방식으로 풀었지만, sort를 하는 위치가 다르다. 가독성이 없는것 같다.',
    grassMyCode:
      '"<pre>function solution(arr, divisor) {<br>  let answer = [];<br><br>  let find = arr<br>    .filter((number) =&gt; number % divisor === 0)<br>    .sort((a, b) =&gt; a - b);<br><br>  answer = find.length ? find : [-1];<br><br>  return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(arr, divisor) {<br>  var answer = arr.filter((v) =&gt; v % divisor == 0);<br>  return answer.length == 0 ? [-1] : answer.sort((a, b) =&gt; a - b);<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671334199070_algorithm15@2x.png',
    index: 15,
    recommand: true,
    status: 'active',
    created: '2022-12-18T03:29:59.271Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639e873b6420a2f182bda8d7',
    title: '두 정수 사이의 합',
    desc: '두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요. 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.',
    hint: 'a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요. / a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다. / a와 b의 대소관계는 정해져있지 않습니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc: 'for문을 활용하여 a와 b의 차이만큼 반복시켜서 더해준다.',
    grassDifferDesc: '수학 메서드를 사용하여 반복문으로 풀었다.',
    grassMyCode:
      '"<pre>function solution(a, b) {<br>  let answer = 0;<br><br>  for (let i = a; i &lt;= b; i++) {<br>    answer += i;<br>  }<br><br>  return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function adder(a, b, s = 0) {<br>  for (var i = Math.min(a, b); i &lt;= Math.max(a, b); i++) s += i;<br>  return s;<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671333691062_algorithm14@2x.png',
    index: 14,
    recommand: true,
    status: 'active',
    created: '2022-12-18T03:21:31.202Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639e856d6420a2f182bda8ce',
    title: '제일 작은 수 제거하기',
    desc: '수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.',
    hint: 'arr은 길이 1 이상인 배열입니다. / 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다. / [4,3,2,1] -> [4,3,2] / [10] -> [-1]',
    level: '1',
    tag: 'programmerce',
    grassMyDesc: '',
    grassDifferDesc: '',
    grassMyCode:
      '"<pre>function solution(arr) {<br>  var answer = arr;<br>  answer.splice(answer.indexOf(Math.min(...arr), 1);<br>  if (answer.length == 0) {<br>    answer.push(-1);<br>  }<br>  return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(arr) {<br>  const min = Math.min(...arr);<br>  return arr.length !== 1 ? arrfilter((i) =&gt; i !== min) : [-1];<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671333229364_algorithm13@2x.png',
    index: 13,
    recommand: true,
    status: 'active',
    created: '2022-12-18T03:13:49.565Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639de1ac88b89de3f1c5962d',
    title: '문자열 내 p와 y의 개수',
    desc: "대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다. 예를 들어 s가 \"pPoooyY\"면 true를 return하고 \"Pyy\"라면 false를 return합니다.",
    hint: "문자열 s의 길이 : 50 이하의 자연수 • 문자열 s는 알파벳으로만 이루어져 있습니다. / 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다. / 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.",
    level: '1',
    tag: 'programmerce',
    grassMyDesc: 'toUpperCase를 사용했다.',
    grassDifferDesc: 'match를 사용했다.',
    grassMyCode:
      '"<pre>function solution(s){<br>     return s.toUpperCase().split(\\"P\\").length === s.toUpperCase().split(\\"Y\\").length;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function numPY(s) {<br>  return s.match(/p/ig).length == s.match(/y/ig).length;<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671291307889_algorithm12@2x.png',
    index: 12,
    recommand: true,
    status: 'active',
    created: '2022-12-17T15:35:08.076Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639de0a788b89de3f1c5961b',
    title: 'x만큼 간격이 있는 n개의 숫자',
    desc: '함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.',
    hint: 'x는 -10000000 이상, 10000000 이하인 정수입니다. • n은 1000 이하인 자연수입니다. / x: 2, n : 5 -> [2,4,6,8,10] / x : 4, n : 3 -> [4,8,12] / x : -4, n : 2 -> [-4, -8]',
    level: '1',
    tag: 'programmerce',
    grassMyDesc: 'for, push',
    grassDifferDesc: 'Array().fill()',
    grassMyCode:
      '"<pre>function solution(x, n) {<br>    var answer = [];<br>     for(let i=1; i&lt;=n; i++){<br>        answer.push(x*i)<br>    }<br>    return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(x, n) {<br>    return Array(n).fill(x).map((v, i) =&gt; (i + 1) * v)<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671291047477_algorithm11@2x.png',
    index: 11,
    status: 'active',
    created: '2022-12-17T15:30:47.609Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639ddcc388b89de3f1c59601',
    title: '나머지가 1이 되는 수 찾기',
    desc: '나머지가 1이 되는 수 찾기',
    hint: '3 ≤ n ≤ 1,000,000 / 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다. / 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc: '1이상 n미만, 나머지가 1이 되는 i 구하기',
    grassDifferDesc: 'while문에서 증감 연산자',
    grassMyCode:
      '"<pre>function solution(n) {<br>    let answer = 0;<br>    for(let i = 1; i &lt; n; i++) {<br>        if(n % i == 1) {<br>            answer = i;<br>            break;<br>        }<br>    }<br>    return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(n, x = 1) {    <br>    while (x++) {<br>        if (n % x === 1) {<br>            return x;<br>        }<br>    }    <br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671290051808_algorithm10@2x.png',
    index: 10,
    recommand: true,
    status: 'active',
    created: '2022-12-17T15:14:11.970Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639ddba388b89de3f1c595e3',
    title: '서울에서 김서방 찾기',
    desc: 'String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.',
    hint: 'seoul은 길이 1 이상, 1000 이하인 배열입니다. / seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다. / "Kim"은 반드시 seoul 안에 포함되어 있습니다. / ["Jane", "Kim"] -> "김서방은 1에 있다"',
    level: '1',
    tag: 'programmerce',
    grassMyDesc: 'indexOf()를 이용해서 "Kim"을 찾음.',
    grassDifferDesc:
      'for,if. for를 이용해서 안에서 kim일때 멈추고. 값을 idx에.',
    grassMyCode:
      '"<pre>function solution(seoul) {<br>    var answer = \\"김서방은 \\" + seoul.indexOf(\\"Kim\\") + \\"에 있다\\";<br>    return answer;<br>}</pre>\\n"',
    grassDifferCode:
      "\"<pre>function solution(seoul) {<br>  var idx = 0;<br>  for (var i = 0; i &lt; seoul.length; ++i) {<br>    if (seoul[i] == 'Kim') {<br>      idx = i;<br>      break;<br>    }<br>  }<br>  return '김서방은 ' + idx + '에 있다';<br>}</pre>\\n\"",
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671289763002_algorithm09@2x.png',
    index: 9,
    recommand: true,
    status: 'active',
    created: '2022-12-17T15:09:23.161Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dd9a288b89de3f1c595d4',
    title: '문자열을 정수로 바꾸기',
    desc: '문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.',
    hint: 's의 길이는 1 이상 5이하입니다. / s의 맨앞에는 부호(+, -)가 올 수 있습니다. / str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다. / 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.  / s는 "0"으로 시작하지 않습니다. s는 부호와 숫자로만 이루어져있습니다. / ',
    level: '1',
    tag: 'programmerce',
    grassMyDesc: 'Number() 문자열을 숫자로 변환하는 함수',
    grassDifferDesc:
      'string에 *,/ 혹은 나누게 되면 자동적으로 자바스크립트에서 str을 num으로 인식. 문자형에 사칙연산이 들어가면 자동으로 숫자형',
    grassMyCode:
      '"<pre>function solution(s) {<br>    return Number(s);<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function strToInt(str){<br>    return str/1<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671289249998_algorithm08@2x.png',
    index: 8,
    recommand: true,
    status: 'active',
    created: '2022-12-17T15:00:50.130Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dd77888b89de3f1c595cc',
    title: '수박수박수박수?',
    desc: '길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.',
    hint: 'n은 길이 10,000이하인 자연수입니다. / 3 -> "수박수" / 4 -> "수박수박"',
    level: '1',
    tag: 'programmerce',
    grassMyDesc: 'n이 3이면 i는 2이고, 나머지가 0이면 "수"를 더하여 수박수',
    grassDifferDesc: 'repeat과 slice를 사용하였다.',
    grassMyCode:
      '"<pre>function solution(n) {<br>    var answer = \'\';<br>    for(let i = 0; i&lt;n; i++){<br>        i % 2== 0 ? answer+=\\"수\\" : answer+=\\"박\\"; <br>    }<br>    return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>const waterMelon = n =&gt; \\"수박\\".repeat(n).slice(0,n);<br><br>console.log(\\"n이 3인 경우: \\"+ waterMelon(3))<br>console.log(\\"n이 4인 경우: \\"+ waterMelon(4))<br></pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671288696232_algorithm07@2x.png',
    index: 7,
    recommand: true,
    status: 'active',
    created: '2022-12-17T14:51:36.403Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dd69988b89de3f1c595c6',
    title: '정수 제곱근 판별',
    desc: '임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.',
    hint: 'n은 1이상, 50000000000000 이하인 양의 정수입니다. / 123 -> return 3 / 144 -> return -1',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      '양의 정수 제곱 판단 위해, if로 Math.sqrt() 이용. Math.pow로 숫자 1을 더한 뒤, 제곱한 값. else -1 리턴값. sqrt() = 특정숫자의 제곱근 값을 계산. pow() = 특정숫자의 거듭제곱 값을 계산. Number.isInteger = 주어진 값이 정수인지 확인.',
    grassDifferDesc: 'if문 말고 switch문을 사용함,',
    grassMyCode:
      '"<pre>function solution(n) {<br>     if(Number.isInteger(Math.sqrt(n))){<br>        return Math.pow(Math.sqrt(n)+1, 2)<br>    }else{<br>        return -1<br>    }<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function nextSqaure(n){<br>  //함수를 완성하세요<br>  switch(n % Math.sqrt(n)){<br>    case 0:<br>      return Math.pow(Math.sqrt(n) + 1, 2);<br>    default:<br>      return \\"no\\"<br>  }<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671288473552_algorithm06@2x.png',
    index: 6,
    status: 'active',
    created: '2022-12-17T14:47:53.713Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dd5bc88b89de3f1c595be',
    title: '자연수 뒤집어 배열로 만들기',
    desc: '자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.',
    hint: 'n은 10,000,000,000이하인 자연수입니다. / 12345 -> return [5,4,3,2,1]',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      'toString()으로 문자열로 변환, split()으로 쪼개고, reverse()로 역순, 다시 숫자로 Number()',
    grassDifferDesc: '문자 풀이와 숫자 풀이',
    grassMyCode:
      '"<pre>function solution(n) {<br>    return n.toString().split(\'\').reverse().map(n =&gt; Number(n));<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(n) {<br>    // 문자풀이<br>    // return (n+\\"\\").split(\\"\\").reverse().map(v =&gt; parseInt(v));<br><br>    // 숫자풀이<br>    var arr = [];<br><br>    do {<br>        arr.push(n%10);<br>        n = Math.floor(n/10);<br>    } while (n&gt;0);<br><br>    return arr;<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671288252180_algorithm05@2x.png',
    index: 5,
    status: 'active',
    created: '2022-12-17T14:44:12.333Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dd4f988b89de3f1c595b8',
    title: '자릿수 더하기',
    desc: '자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.',
    hint: 'N의 범위 : 100,000,000 이하의 자연수 / 1 + 2 + 3 = 6이므로 6을 return 하면 됩니다. / 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      'String()으로 숫자를 문자로 변환후 num안에 있는 값들을 더해줍니다. parseInt()는 정수 변환',
    grassDifferDesc:
      '(n + "")를 이용해 문자열을 만들고, reduce 안에서 parsInt를 하여 숫자로 만들어 더합니다.',
    grassMyCode:
      '"<pre>function solution(n) {<br>  var answer = 0;<br>  var num=String(n);<br>  <br>  for (var i=0; i&lt;num.length; i++) {<br>    answer+=parseInt(num[i]);<br>  }<br>  <br>  return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(n){<br>    return (n+\\"\\").split(\\"\\").reduce((acc, curr) =&gt; acc + parseInt(curr, 0)<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671288057681_algorithm04@2x.png',
    index: 4,
    status: 'active',
    created: '2022-12-17T14:40:57.879Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dd238ecb9fcc59cf01bdb',
    title: '약수의 합',
    desc: '정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.',
    hint: 'n은 0 이상 3000이하인 정수입니다. / 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다. / 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      '나누어 떨어지는 값이 약수이기에, for문을 증가하면서 나누었을때 나머지가 0이 되는 수를 더했습니다.',
    grassDifferDesc: '나와 같음.',
    grassMyCode:
      '"<pre>function solution(n) {<br>    var answer = 0;<br>    for(let i=0; i&lt;=n; i++){<br>        if(n % i==0){<br>        answer+=i;<br>        }<br>    }<br>    return answer;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(n) {<br>    var answer = 0;<br>    for(let i=0; i&lt;=n; i++){<br>        if(n % i==0){<br>        answer+=i;<br>        }<br>    }<br>    return answer;<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671287352693_algorithm03@2x.png',
    index: 3,
    status: 'active',
    created: '2022-12-17T14:29:12.822Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dd117ecb9fcc59cf01bd1',
    title: '평균 구하기',
    desc: '정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.',
    hint: 'arr은 길이 1 이상, 100 이하인 배열입니다. / arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      'arr 배열 안에 값이 있기에 그 값들을 더한 뒤, 더한 값을 배열의 길이로 나눠 줍니다.',
    grassDifferDesc:
      'reduce()를 이용하여 안의 값을 모두 더한 뒤, 배열의 길이로 나눕니다.',
    grassMyCode:
      '"<pre>function solution(arr) {<br>    var answer = 0;<br>    for (let i=0; i&lt;arr.length; i++){<br>        answer +=arr[i]<br>    };<br>    return answer/arr.length;<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function solution(arr){<br>    return arr.reduce((a, b) =&gt; a + b) / arr.length;<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671287063047_algorithm02@2x.png',
    index: 2,
    status: 'active',
    created: '2022-12-17T14:24:23.224Z',
    bgColor: '',
    badgeColor: ''
  },
  {
    _id: '639dcd7eecb9fcc59cf01baa',
    title: '짝수와 홀수',
    desc: '정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.',
    hint: 'num은 int 범위의 정수입니다. / 0은 짝수입니다.',
    level: '1',
    tag: 'programmerce',
    grassMyDesc:
      'num을 2로 나눴을때 0이면 짝수. 짝수일 경우에 "Even" 반환, 홀수인 경우 "Odd"를 반환. 삼항연산자를 통해 진행. ?(물음표) 이후에 참인 경우 바로 앞의 값, 거짓의 경우 다음 값이 실행되는 것을 사용.',
    grassDifferDesc:
      '0을 굳이 사용하지 않고도 가능하다는 것이 확인되었습니다. ==0은 짝수인지를 묻는 것이지만, ==1이라는 것이 담겨진 조건문입니다. 0이 false임을 이용하는 것입니다.',
    grassMyCode:
      '"<pre>function solution(num) {<br>    return num % 2 == 0 ? \\"Even\\" : \\"Odd\\";<br>}</pre>\\n"',
    grassDifferCode:
      '"<pre>function evenOrOdd(num) {<br>    return num % 2 ? \\"Odd\\" : \\"Even\\";<br>}</pre>\\n"',
    thumbnail:
      'https://kdong-portfolio.s3.amazonaws.com/reference/1671286299572_algorithm01@2x.jpg',
    index: 1,
    status: 'active',
    created: '2022-12-17T14:09:02.175Z',
    bgColor: '',
    badgeColor: ''
  }
];

export const faqList: ResponseFaqListProps[] = [
  {
    key: 1,
    title: '연락처가 궁금할땐 어떻게 하면 알 수 있을까요?',
    link: '',
    desc: 'Wanted 페이지로 이동후 이메이을 전송해주시면 답변 드리겠습니다.'
  },
  {
    key: 2,
    title: '이력서를 보고 싶은데 어떻게 하면 볼 수 있을까요?',
    link: '',
    desc: 'Wanted 페이지로 이동후 이메이을 전송해주시면, 이메일을 통해 이력서를 보내드리겠습니다.'
  },
  {
    key: 3,
    title: '이메일 주소가 궁금해요!',
    link: '',
    desc: 'gkfl8809@naver.com 으로 연락주세요.'
  }
];
