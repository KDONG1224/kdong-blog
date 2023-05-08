export const windowLocation = (type: string) => {
  switch (type) {
    case 'instagram':
      window.location.href = 'https://instagram.com/__kdong?';
      return;
    case 'github':
      window.location.href = 'https://github.com/KDONG1224';
      return;
  }
};
