import React, { lazy } from "react";

export default {
  siteTitle: "Donray Williams | Software Engineer",
  siteDescription:
    "I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  siteKeywords:
    "Donray Williams, Donray, Williams, wdonray, software engineer, front-end engineer, web developer, javascript",
  siteUrl: "https://donrayxwilliams.com",
  siteLanguage: "en_US",
  name: "Donray Williams",
  location: "Lafayette, LA",
  email: "donrayxwilliams@gmail.com",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/wdonray",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/wdonray",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/TinderIsOk",
    },
  ],

  navLinks: [
    {
      name: "Home",
      url: "/",
      component: lazy(() => import("../components/Home")),
    },
    {
      name: "About",
      url: "/about",
      component: lazy(() => import("../components/About")),
    },
    {
      name: "Experience",
      url: "/experience",
      component: lazy(() => import("../components/Experience")),
    },
    {
      name: "Work",
      url: "/work",
      component: lazy(() => import("../components/Work")),
    },
    {
      name: "Contact",
      url: "/contact",
      component: lazy(() => import("../components/Contact")),
    },
  ],

  navHeight: 64,

  colors: {
    black: "#1A202C",
    orange: "#f6863bff",
    green: "#0ed59eff",
    blue: "#6666e0",
    gray: "#666666ff",
    white: "#ffffffff",
    red: "#e06666ff",
    lightGreen: '#66e066',
    redSplitComplementary: {
      teal: '#66e0e0',
      green: '#a3e066'
    }
  },

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
