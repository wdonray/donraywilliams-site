import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";
import LOLTracker from "../data/LOLTracker.png";
import UnderConstruction from "../data/UnderConstruction.svg";

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

  experience: [
    {
      name: "Stuller",
      position: "Software Engineer 1",
      location: "Lafayette, LA",
      timeWorked: "Feb. 2019​ - Apr. 2020",
      description: [
        "Rebuilt, designed and implemented an application for Admin usage of administering licenses.",
        "Created an application for displaying each of our current server statuses.",
        "Developed a full-scale app for tracking of Rewards and Shipment statuses.",
        "Updated old in-house applications.",
        "Built applications using React or React-Native that would communicate with our back-end.",
        "Used a ticketing system to log work (Jira).",
        "Procured on-the-job knowledge of front-end and back-end tasks.",
        "Gained experience with Amazon Web Services, Node.js, React, React-Native, Type-script, Redux, Serverless, etc.",
      ],
    },
    {
      name: "BUH! Gaming",
      position: "Software Engineer",
      location: "Remote",
      timeWorked: "July 2018​ - Jan. 2019",
      description: [
        "Collaborated with team members to develop a MOBA game using Unity.",
        "Assisted in a long-term development project moving towards Steam integration.",
        "Distributed work through a ticket system (Assembla).",
        "Constructed a functional user interface for a new game mode.",
        "Tested completed tickets, discussed current ticket progress, and assigned new tickets during weekly team meetings.",
        "Performed constant documentation and research",
      ],
    },
    {
      name: "Tantrum Lab",
      position: "Interactive Content Programmer",
      location: "Lafayette, LA",
      timeWorked: "Oct. 2018​ - Dec. 2018",
      description: [
        "Built a decision tree for AI animations in Unity, created animators.",
        "Assisted in a long-term development project moving towards Steam integration.",
        "Created Virtual Experience job training as well as different modes for more specific training.",
        "Set up events for game completion logic.",
      ],
    },
    {
      name: "Academy of Interactive Entertainment",
      position: "​​Game Programmer Camp Instructor / Tutor",
      location: "Lafayette, LA",
      timeWorked: "June 2017​ - July 2017 / Sept. 2018 - Nov. 2018",
      description: [
        "Managed a classroom of 15 students aged 8 to 17 years old.",
        "Taught content to introduce students to Unity, Visual Studios, and C# as well as simple production techniques.",
        "Showed students how to build an executable and composed a small quiz for them.",
        "Instructed students using lectures and live demonstrations as well as one-on-one instruction.",
      ],
    },
  ],

  portfolioProjects: [
    {
      Name: "League of Legends Live Tracker",
      Status: "In Progress",
      Link: "https://www.leaguelivestats.net/",
      Github: [
        {
          Info: "Front-end",
          Link: "https://github.com/wdonray/lol-live-tracker",
        },
        {
          Info: "Back-end",
          Link: "https://github.com/wdonray/lol-live-tracker-backend",
        },
      ],
      Tech: ["Riot API", "React", "Axios", "Redux", "AWS"],
      Info:
        "Allows you to search any player from the game League of Legends and displays live stats and active matches. Get a deeper look into how you play.",
      Image: LOLTracker,
    },
    {
      Name: "Candle Shop",
      Status: "In Progress",
      Link: "/work",
      Github: [
        {
          Info: "Full App",
          Link: "https://github.com/wdonray/lol-live-tracker-backend",
        },
      ],
      Tech: ["React-Native", "Stripe", "Expo", "Amplify"],
      Info: "An app that allows you to buy various types of candles.",
      Image: UnderConstruction,
    },
  ],

  researchProjects: [
    {
      Name: "Vue To-Do-List",
      Link: "https://github.com/wdonray/vue-crash-todolist",
      Tech: ["Vue", "Vuex", "Axios"],
      Info: "First time using Vue, created a to do list application.",
    },
    {
      Name: "React-NodeJS",
      Link: "https://github.com/wdonray/react-nodejs-test",
      Tech: ["React", "Express", "NodeJS", "Axios"],
      Info:
        "Creating a server with Express and NodeJS that connects to React. Calling the endpoints with axios",
    },
    // {
    //   Name: "Node Crash Course",
    //   Link: "https://github.com/wdonray/node-crash-course",
    //   Tech: ["React", "Express", "NodeJS"],
    //   Info: "A crash course on NodeJS. Testing out what I can and cannot do.",
    // },
    {
      Name: "Angular To-Do-List",
      Link: "https://github.com/wdonray/angular-crash-todolist",
      Tech: ["Angular", "HTML", "Typescript"],
      Info: "First time using Angular, created a to do list application.",
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
    lightNavy: "#172a45",
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
