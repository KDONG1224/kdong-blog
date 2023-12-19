export const makeid = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const randomNumber = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export function randomNumBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb: { r: number; g: number; b: number } | null = result && {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };

  return result ? `${rgb?.r}, ${rgb?.g}, ${rgb?.b}` : null;
}

export const browserNameChange = (name: string) => {
  const count = 1;

  console.log(name);

  switch (name) {
    case 'chrome':
      return {
        key: String(count),
        title: '크롬 브라우저'
      };
    case 'firefox':
      return {
        key: String(count + 1),
        title: '파이어폭스 브라우저'
      };
    case 'safari':
      return {
        key: String(count + 2),
        title: '사파리 브라우저'
      };
    case 'opera':
      return {
        key: String(count + 3),
        title: '오페라 브라우저'
      };
    case 'whale':
      return {
        key: String(count + 4),
        title: '네이버 웨일 브라우저'
      };
    case 'explorer8':
      return {
        key: String(count + 5),
        title: '인터넷 익스플로러8 브라우저'
      };
    case 'explorer9':
      return {
        key: String(count + 6),
        title: '인터넷 익스플로러9 브라우저'
      };
    case 'explorer10':
      return {
        key: String(count + 7),
        title: '인터넷 익스플로러10 브라우저'
      };
    case 'explorer11':
      return {
        key: String(count + 8),
        title: '인터넷 익스플로러11 브라우저'
      };
    case 'edge':
      return {
        key: String(count + 9),
        title: '엣지 브라우저'
      };
    case 'android':
      return {
        key: String(count + 10),
        title: '모바일 안드로이드'
      };
    case 'apple':
      return {
        key: String(count + 11),
        title: '모바일 애플'
      };
  }
};

export const htmlToString = (str: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');

  return doc.body.textContent || '';
};
