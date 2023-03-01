const randomId = (length) => {
  const characters = '0123456789abcdefghijklmnopqrstxyzABCDEFGHIJKLMNOPQRSTXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const cvData = [
  {
    id: randomId(8),
    dateBool: true,
    date: '2023',
    company: 'Body Vanatge',
    position: 'Full-Stack Developer',
    tech: 'MERN',
    term: 'Jan-present',
  },
  {
    id: randomId(8),
    dateBool: true,
    date: '2022',
    company: 'Body Vanatge',
    position: 'Full-Stack Developer',
    tech: 'MERN',
    term: 'Jan-Dec',
  },
  {
    id: randomId(8),
    dateBool: true,
    date: '2021',
    company: 'Body Vantage',
    position: 'Full-Stack Developer',
    tech: 'MERN',
    term: 'Jun-Dec',
  },
  {
    id: randomId(8),
    dateBool: false,
    date: '2021',
    company: 'Fotech Solutions (BP)',
    position: 'Front-end Developer',
    tech: 'VUEJS',
    term: 'Jan-May',
  },
  {
    id: randomId(8),
    dateBool: true,
    date: '2020',
    company: 'Fotech Solutions (BP)',
    position: 'Front-end Developer',
    tech: 'VUEJS',
    term: 'Apr-Dec',
  },
  {
    id: randomId(8),
    dateBool: false,
    date: '2020',
    company: 'Deptuti AI',
    position: 'Full-Stack Developer',
    tech: 'MERN',
    term: 'Jan-Mar',
  },
  {
    id: randomId(8),
    dateBool: true,
    date: '2019',
    company: 'Deptuti AI',
    position: 'Front-end Developer',
    tech: 'REACTJS',
    term: 'Jan-Dec',
  },
];
