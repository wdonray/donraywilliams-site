import React, { lazy } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default {
  siteTitle: "Donray Williams | Software Engineer",
  siteDescription:
    "I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  siteKeywords:
    "Donray Williams, Donray, Williams, wdonray, software engineer, front-end engineer, web developer, javascript",
  siteUrl: "https://donrayxwilliams.com",
  aboutMe:
    "Hello! I'm Donray, a software engineer based in Lafayette, LA.\nI enjoy working on websites, apps, and occasionally games. My goal as a developer is to expand my knowledge daily, whether it’s at home or on the job.\nWhile in college at AIE, I served as a tutor during the semester and a teacher over the summer. Shortly after, I got my first job at BUH! Gaming collaborating with a small team remotely. This job as well as a few others led me to obtain a position at Stuller, the number one jewelry manufacturer in America. Here I gained a variety of skills and delved into interesting and meaningful projects on a daily basis.\nFollowing are a few technologies I've been working with recently:",
  siteLanguage: "en_US",
  name: "Donray Williams",
  location: "Lafayette, LA",
  email: "donrayxwilliams@gmail.com",
  skills: [
    "JavaScript (ES6+)",
    "React",
    "React-Native",
    "HTML & CSS",
    "AWS",
    "Serverless",
    "Redux",
    "Type-script",
  ],
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
      component: Home,
    },
    {
      name: "About",
      url: "/about",
      component: About,
    },
    {
      name: "Experience",
      url: "/experience",
      component: Experience,
    },
    {
      name: "Work",
      url: "/work",
      component: Work,
    },
    {
      name: "Contact",
      url: "/contact",
      component: Contact,
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
    lightGreen: "#66e066",
    redSplitComplementary: {
      teal: "#66e0e0",
      green: "#a3e066",
    },
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
