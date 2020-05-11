module.exports = {
  siteTitle: 'Quang Hoang Dang | Front-end Developer',
  siteDescription:
    'Quang Hoang Dang is a Front-end developer based in Da Nang, Viet Nam specializing in building exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Quang Hoang Dang, Quang, Hoang, Dang, bchiang7, software engineer, team leader, front-end engineer, web developer, javascript, danang, da nang, vietnam, viet nam',
  siteUrl: 'https://quanghoang.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-150973967-1',
  googleVerification: '',
  name: 'Quang Hoang Dang',
  location: 'Da Nang, Viet Nam',
  email: 'quang.hd0102@gmail.com',
  github: 'https://github.com/quanghd0102',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/quanghd0102',
    },
    {
      name: 'Linkedin',
      url: 'www.linkedin.com/in/quanghd0102',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
