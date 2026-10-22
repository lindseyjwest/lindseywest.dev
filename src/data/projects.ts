export type ProjectCategory =
  | 'Data engineering'
  | 'Analytics'
  | 'Automation'
  | 'Software engineering'
  | 'School project'
  | 'Personal project'

export type ProjectVisualTone = 'blue' | 'coral' | 'yellow' | 'mint'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  contributionSummary?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  featured: boolean
  visual: {
    tone: ProjectVisualTone
    imageSrc?: string
    imageAlt?: string
  }
}

export const projects: Project[] = [
  {
    id: 'rv-park-management-system',
    title: 'RV Park Management System',
    category: 'Software engineering',
    description:
      'A team-built RV park management application with backend logic for availability, reporting, and data management.',
    contributionSummary:
      'Contributed to backend development, testing, reporting and availability logic, database setup, and project planning and implementation decisions.',
    technologies: ['.NET 8 MVC', 'C#', 'Entity Framework Core', 'SQLite', 'Git/GitHub'],
    githubUrl: 'https://github.com/XaRodriguezWSU/RVPark',
    featured: true,
    visual: {
      tone: 'mint',
      imageSrc: '/images/projects/rv-park-management-placeholder.svg',
      imageAlt: 'Placeholder for an RV Park Management System application screenshot',
    },
  },
  {
    id: 'us-accident-analytics-dashboard',
    title: 'U.S. Accident Analytics Dashboard',
    category: 'Analytics',
    description:
      'An interactive Streamlit dashboard that uses Python and pandas to clean and analyze millions of U.S. traffic accident records, with visualizations for accident severity, location, time, and weather trends.',
    technologies: ['Python', 'pandas', 'Streamlit'],
    githubUrl: 'https://github.com/lindseyjwest/us-accident-analytics',
    featured: false,
    visual: {
      tone: 'coral',
      imageSrc: '/images/projects/us-accident-analytics-placeholder.svg',
      imageAlt: 'Placeholder for a U.S. Accident Analytics dashboard screenshot',
    },
  },
  {
    id: 'ai-technical-task-force',
    title: 'AI and Technical Task Force',
    category: 'Automation',
    description:
      'A cross-department group that identifies business needs, evaluates technology solutions, and coordinates projects from planning through implementation.',
    contributionSummary:
      'Contributes to project planning and technical development, including a clinical mentorship application and Python automation for organizing images and preparing documents.',
    technologies: ['Python', 'Automation', 'Technical planning'],
    featured: false,
    visual: {
      tone: 'yellow',
      imageSrc: '/images/projects/ai-task-force-placeholder.svg',
      imageAlt: 'Placeholder for an AI and Technical Task Force project visual',
    },
  },
]
