export default {
  summary: `Passionate front-end software developer with 6 years of experience using HTML5/CSS3, Bootstrap, jQuery and Javascript/Typescript to build all aspects of the UX and UI for many kinds of web sites. Specialized in using ReactJS, VueJS, Angular and PHP/Laravel to build many kinds of web platforms and mobile apps.`,
  testimonials: [
    {
      id: 't-1',
      imgURL: 'quote_author-1.jpeg',
      quote: `First time we worked together, Mark came up with several on-target creative concepts under significant deadline pressure. he's creative, deliberate in his strategy and focused on results. he knows that online content is king and understands how to pull leads into the pipeline.`,
      author: 'David Lung',
      role: 'CEO',
      company: 'GoGoGrandparent Inc.',
    },
    {
      id: 't-2',
      imgURL: 'quote_author-2.png',
      quote: `Wang is an excellent front-end developer. He is very creative and passionate and has perfect skills with React/Electron. He always foused on pixel-perfect and high quality result.`,
      author: 'Adil Virani',
      role: 'Founder',
      company: 'Blitz',
    }
  ],
  allCategories: [
    {
      id: "all",
      title: "All"
    }, {
      id: "web",
      title: "Web"
    }, {
      id: "mobile",
      title: "Mobile"
    }, {
      id: "desktop",
      title: "Desktop"
    }
  ],
  portfolios: [
    {
      id: "blitz",
      name: "The Blitz Software For Game Coach",
      categories: ["web", "desktop"],
      imgURL: "Product2.png",
      images: [
        "/products/blitz/p-1.jpeg",
        "/products/blitz/p-2.jpeg",
        "/products/blitz/p-3.jpeg",
        "/products/blitz/p-4.jpeg",
        "/products/blitz/p-5.jpeg",
        "/products/blitz/p-6.jpeg"
      ]
    },
    {
      id: "gogo",
      name: "The GoGoGrandparent Dashboard",
      categories: ["web"],
      imgURL: "Product1.png",
      images: [
        "/products/gogo/p-1.png",
        "/products/gogo/p-2.png",
        "/products/gogo/p-3.png",
        "/products/gogo/p-4.png",
        "/products/gogo/p-5.png",
        "/products/gogo/p-6.png"
      ]
    },
    {
      id: "edulastic",
      name: "Interactive Formative Assessment (Education Management)",
      categories: ["web"],
      imgURL: "Product4.png",
      images: [
        "/products/edulastic/p-1.jpeg",
        "/products/edulastic/p-2.png",
        "/products/edulastic/p-3.png",
        "/products/edulastic/p-4.png",
        "/products/edulastic/p-5.png"
      ]
    },
    {
      id: "switch",
      name: "Switch: Group Money App",
      categories: ["mobile"],
      imgURL: "Product3.png"
    }
  ],
  education: [
    {
      id: "tsinghua",
      name: "TsingHua University",
      start: 2011,
      end: 2015,
      degree: "Bachelor",
      desc: "Computer Software, Computer Networking, E-Commerce, Web Application Development, Programming Languages"
    }
  ],
  experience: [
    {
      id: "tsm",
      role: "Senior Front-End Developer",
      company: "TSM (Team SoloMid, an eSports organization), United State",
      period: "2019.09 – 2019.10",
      product: "https://tsm.gg",
      skills: ["React.js", "Redux-thunk"],
      work: `
        <p>build new page 'career' and update some wrong components, refactoring responsive pages</p>
      `
    },
    {
      id: "blitz",
      role: "Senior Front-End Developer",
      company: "TSM - The Blitz Software, United State",
      period: "2019.07 – 2020.06",
      product: "https://blitz.gg",
      skills: ["React.js", "Redux-thunk"],
      work: `
        <p>I participated in improving the origin Blitz app and developing the features of new version.</p>
        <p>- specialized LoL Postmatch, Global Search and LoL champion pool</p>
        <p>- rebuild the Onboarding pages and Home page</p>
        <p>- refactored Sign in/up workflow and Search components</p>
        <p>- add Valorant Guides/Headshot Gallery and developed CMS for managing Headshot Gallery</p>
        <p>- updated SEO content and Blitz resource icons to new ones</p>
      `
    },
    {
      id: "gogo",
      role: "Senior Full-Stack Developer",
      company: "GOGO TECHNOLOGIES, INC.",
      period: "2018.04 – 2019.06",
      product: "https://app.gogograndparent.com",
      skills: ["Vue.js", "Vuex", "Node.js", "Express", "GraphQL", "MySQL", "Typescript"],
      work: `
        <p>I developed a dashboard for the GoGo service operators.</p>
        <p>- built the profile, ride ordering, payment methods, ride credits and scheduled rides pages</p>
        <p>- managing product servers and environment, and unit testing</p>
        <p>- added some kinds of call services and driver services, and integrated new feature for ordering a food through Ubereats, Grabhub and Doordash</p>
      `
    },
    {
      id: "switch",
      role: "Senior Mobile Developer",
      company: "SWITCH - GROUP MONEY",
      period: "2018.04 – 2019.04",
      product: "https://apps.apple.com/us/app/switch-group- money/id1289400001",
      skills: ["React.js", "React Native", "Redux-Saga", "RESTful APIs"],
      work: `
        <p>I built front-end pages and used some innovative technologies for improving the reliability and function of the app.</p>
      `
    },
    {
      id: "rosedigital",
      role: "FRONT-END DEVELOPER",
      company: "ROSE DIGITAL TECHNOLOGIES SERVICE COMPANY",
      period: "2018.01 – 2018.04",
      product: "https://rose-digital.co",
      skills: ["React.js", "Redux-Saga", "Server-side rendering", "functional component", "CMS"],
      work: `
        <p>- developed rose digital company’s official website</p>
        <p>- worked on server-side rendering for improving website</p>
      `
    },
    {
      id: "synesthesia",
      role: "MOBILE DEVELOPER",
      company: "SYNESTHESIA - KOKOS",
      period: "2018.02 – 2018.05",
      product: "https://rose-digital.co",
      skills: ["React.js", "React Native", "Redux-thunk"],
      work: `
        <p>- developed the front-end pages – my account, pricing pages, sensorium, meditate pages</p>
        <p>- integrated payment gateway through stripe and wrote APIs for membership account</p>
      `
    },
    {
      id: "edulastic",
      role: "SENIOR FULL-STACK DEVELOPER",
      company: "EDULASTIC",
      period: "2017.04 – 2017.12",
      product: "https://edulastic-poc.snapwiz.net/",
      skills: ["React.js", "Redux-thunk", "Laravel", "MongoDB", "Selenium", "Jest"],
      work: `
        <p>Implement dahsboard pages and work with unit test</p>
      `
    },
    {
      id: "ovolo",
      role: "FULL-STACK DEVELOPER",
      company: "OVOLO HOTELS",
      period: "2017.01 – 2017.04",
      product: "https://ovolohotels.com/",
      skills: ["WordPress", "PHP", "React.js", "Gatsby.js", "CSS"],
      work: `
        <p>- update the old platform by integrating WordPress + Gatsby.js and build new pages</p>
        <p>- developed some location of the ovolo group – southside, central and Woolloomooloo booking websites</p>
      `
    },
    {
      id: "saleshungama",
      role: "FULL-STACK DEVELOPER",
      company: "SALESHUNGAMA",
      period: "2016.07 – 2016.12",
      product: "https://www.saleshungama.com/",
      skills: ["Vue.js", "HTML/CSS", "PHP", "Laravel", "MongoDB"],
      work: `
        <p>- build some front-end web pages – Home, Fashion, Gifts, and etc</p>
        <p>- scraping some eCommerce websites, parsing the selling product data and comparing them</p>
        <p>- developed the coupon management system</p>
      `
    }
  ],
  skills: [
    {
      id: "react",
      name: "React",
      level: 4,
      years: '4'
    },
    {
      id: "reactnative",
      name: "React Native",
      level: 4,
      years: 3
    },
    {
      id: "javascript",
      name: "Javascript",
      level: 4,
      years: 6
    },
    {
      id: "htmlcss",
      name: "HTML/CSS",
      level: 4,
      years: 6
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      level: 4,
      years: 4
    },
    {
      id: "sass",
      name: "Sass/Less",
      level: 4,
      years: 3
    },
    {
      id: "jquery",
      name: "jQuery",
      level: 4,
      years: 5
    },
    {
      id: "vue",
      name: "Vue.js",
      level: 4,
      years: 3
    },
    {
      id: "typescript",
      name: "TypeScript",
      level: 4,
      years: 3
    },
    {
      id: "redux",
      name: "Redux",
      level: 4,
      years: 3
    },
    {
      id: "node",
      name: "Node.js",
      level: 4,
      years: 3
    },
    // {
    //   id: "express",
    //   name: "Express.js",
    //   level: 4,
    //   years: 3
    // },
    {
      id: "php",
      name: "PHP",
      level: 4,
      years: 5
    },
    {
      id: "laravel",
      name: "Laravel",
      level: 4,
      years: 3
    },
    {
      id: "mysql",
      name: "MySQL",
      level: 4,
      years: 4
    },
    // {
    //   id: "git",
    //   name: "Git",
    //   level: 4,
    //   years: 4
    // },
    // {
    //   id: "nativescript",
    //   name: "NativeScript",
    //   level: 3,
    //   years: 2
    // },
    // {
    //   id: "swift",
    //   name: "Swift",
    //   level: 3,
    //   years: 2
    // },
    {
      id: "angular",
      name: "Angular",
      level: 3,
      years: 3
    },
    {
      id: "python",
      name: "Python",
      level: 3,
      years: 3
    },
    // {
    //   id: "django",
    //   name: "Django",
    //   level: 3,
    //   years: 3
    // },
    {
      id: "mongodb",
      name: "MongoDB",
      level: 3,
      years: 3
    },
    // {
    //   id: "c",
    //   name: "C/C++",
    //   level: 2,
    //   years: 4
    // },
    {
      id: "java",
      name: "Java",
      level: 2,
      years: 3
    },
    // {
    //   id: "rails",
    //   name: "Rails",
    //   level: 2,
    //   years: 2
    // },
    {
      id: "ror",
      name: "Ruby on Rails",
      level: 2,
      years: 2
    },
    // {
    //   id: "nosql",
    //   name: "NoSQL",
    //   level: 2,
    //   years: 1
    // },
    // {
    //   id: "postgresql",
    //   name: "PostgreSQL",
    //   level: 2,
    //   years: 1
    // },
    // {
    //   id: "docker",
    //   name: "Docker",
    //   level: 2,
    //   years: 2
    // },
    // {
    //   id: "jenkins",
    //   name: "Jenkins",
    //   level: 2,
    //   years: 1
    // },
    // {
    //   id: "asp",
    //   name: "ASP.NET",
    //   level: 1,
    //   years: 1
    // },
    // {
    //   id: "c#",
    //   name: "C#",
    //   level: 1,
    //   years: 1
    // }
  ],
  contact: {
    email: 'wang.shuang999@hotmail.com',
    phone: '+86 415910006',
    address: 'Dalian, Liaoning, China, 110621'
  }
}
