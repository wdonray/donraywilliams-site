export default {
    siteTitle: 'Donray Williams | Software Engineer',
    siteDescription:
      'Donray Williams is a software engineer based in Lafayette, LA who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
    siteKeywords:
      'Donray Williams, Donray, Williams, wdonray, software engineer, front-end engineer, web developer, javascript',
    siteUrl: 'https://donrayxwilliams.com',
    siteLanguage: 'en_US',
    name: 'Donray Williams',
    location: 'Lafayette, LA',
    email: 'donrayxwilliams@gmail.com',
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https://github.com/wdonray',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/wdonray',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/TinderIsOk',
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
      black: '#302d2dff',
      orange: '#f6863bff',
      green: '#0ed59eff',
      blue: '#493ebfff',
      gray: '#666666ff',
      white: '#ffffffff',
      red: '#e06666ff'
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