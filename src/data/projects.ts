export type ProjectScreenshot = {
  src: string
  srcSet?: string
  fullSizeSrc?: string
  alt: string
  caption: string
  width: number
  height: number
}

export type Project = {
  id: string
  title: string
  category: string
  focus: string
  context: string
  summary: string
  description: string[]
  contributions?: string[]
  technologies: string[]
  githubUrl: string
  featured: boolean
  cover?: 'time-keeper'
  evidenceLinks?: { label: string; url: string }[]
  screenshots: ProjectScreenshot[]
}

export const projects: Project[] = [
  {
    id: 'time-keeper',
    title: 'Time Keeper',
    category: 'Software engineering',
    focus: 'Application development & maintenance',
    context: 'Senior capstone · Team project',
    summary:
      'A time-tracking app for course projects. I improved administrative features, reporting, and usability as part of my senior capstone.',
    description: [
      "Time Keeper is a web application that helps students track time spent on course projects. It's maintained by successive student teams, so my capstone work involved building on an existing codebase.",
      'I contributed to administrative features, reporting, automated testing, and improvements to the user interface.',
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'SQL', 'Bootstrap', 'Chart.js'],
    githubUrl: 'https://github.com/bradleypeterson/TimeTrackerFall22',
    featured: true,
    cover: 'time-keeper',
    screenshots: [],
  },
  {
    id: 'rv-park-management-system',
    title: 'RV Park Management System',
    category: 'Software engineering',
    focus: 'Operational reporting & data modeling',
    context: 'Team project · Software engineering',
    summary:
      'A team-built reservation app for RV park staff. I worked on reporting features, backend functionality, and data models.',
    description: [
      'A reservation management application built by our team to help RV park staff manage campsites, bookings, and daily operations.',
      "I worked on the reporting features, including tools for reviewing arrivals, departures, occupancy, and reservation history. I also contributed to the application's backend and data models.",
    ],
    technologies: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/XaRodriguezWSU/RVPark',
    featured: true,
    screenshots: [
      {
        src: '/images/projects/RVSite.webp',
        srcSet: '/images/projects/RVSite-768.webp 768w, /images/projects/RVSite.webp 1507w',
        fullSizeSrc: '/images/projects/RVSite.png',
        alt: 'RV Park Management System home page showing a featured campsite and available RV sites',
        caption: 'Featured campsite and available RV sites',
        width: 1507,
        height: 945,
      },
    ],
  },
  {
    id: 'studybuddy',
    title: 'StudyBuddy',
    category: 'Software engineering',
    focus: 'Full-stack development & activity visualization',
    context: 'Individual project · Full-stack development',
    summary:
      'A study productivity app I built independently with Django, with a customizable focus timer, session tracking, and a progress dashboard.',
    description: [
      'A study productivity web app I built independently using Django. It includes a customizable focus timer, study session tracking, and a dashboard for reviewing progress over time.',
      'I developed the application from start to finish, including user accounts, session management, and activity visualizations.',
    ],
    technologies: ['Python', 'Django', 'SQLite', 'JavaScript', 'Bootstrap', 'Chart.js'],
    githubUrl: 'https://github.com/lindseyjwest/CS3620_Portfolio/tree/main/studybuddy',
    featured: false,
    screenshots: [
      {
        src: '/images/projects/studybuddy-dashboard.png',
        alt: 'StudyBuddy dashboard showing weekly focus and break totals, a study streak, and daily goal progress',
        caption: 'Weekly activity and daily goal progress',
        width: 1881,
        height: 982,
      },
    ],
  },
]
