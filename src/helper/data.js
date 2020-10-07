export default {
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
      imgURL: "Product2.png"
    },
    {
      id: "gogo",
      name: "The GoGoGrandparent Dashboard",
      categories: ["web"],
      imgURL: "Product1.png"
    },
    {
      id: "edulastic",
      name: "Interactive Formative Assessment (Education Management)",
      categories: ["web"],
      imgURL: "Product3.png"
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
    }
  ]
}
