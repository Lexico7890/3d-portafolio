import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  netcore,
  tailwind,
  git,
  msd,
  misfacturas,
  konecta,
  footyball,
  threejs,
  nextjs,
  sqlserver,
  zustand,
  scalpro
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Database management',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'SCRUM',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'NextJs',
    icon: nextjs
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'netcore',
    icon: netcore
  },
  {
    name: 'SqlServer',
    icon: sqlserver
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'zustand',
    icon: zustand
  }
]

const experiences = [
  {
    title: 'PowerApps Developer',
    company_name: 'MSD',
    icon: msd,
    iconBg: '#007c71',
    date: 'March 2020 - April 2021',
    points: [
      'Creation of applications in Power apps according to the different requests of the company departments.',
      'Efficient fulfillment of assigned tasks.',
      'Collaboration with the different departments of the company.'
    ]
  },
  {
    title: 'Database management',
    company_name: 'misfacturas',
    icon: misfacturas,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Management of support tickets, monitoring and resolution of technical incidents.',
      'Carrying out scripts to obtain information from databases to provide solutions to different customer requests.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Konecta',
    icon: konecta,
    iconBg: '#00254f',
    date: 'Jan 2022 - at the moment',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Development of new features and bug fixes with .NetCore'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Scalpro',
    description:
      'Web application (in development) created for a hair transplant clinic, which allows you to enter a photo and, through artificial intelligence, transform it by adding hair in the selected area.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'nextJs',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'express',
        color: 'blue-text-gradient'
      }
    ],
    image: scalpro,
    sourceCodeLink: 'https://github.com/Lexico7890/scalpro_tailwind'
  },
  {
    name: 'FootyBall',
    description:
      'Web application (in development) created to manage local sports leagues, which allows automating various processes and thus showing updated data to users, works with a Serverless service.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'nextJs',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'zustand',
        color: 'blue-text-gradient'
      }
    ],
    image: footyball,
    sourceCodeLink: 'https://github.com/Lexico7890/neo-team'
  }
]

export { services, technologies, experiences, testimonials, projects }
