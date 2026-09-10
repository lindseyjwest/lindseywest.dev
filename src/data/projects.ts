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
    featured: true,
    visual: { tone: 'mint' },
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
    visual: { tone: 'coral' },
  },
  {
    id: 'automation-placeholder',
    title: 'Automation project placeholder',
    category: 'Automation',
    description:
      'Placeholder: add the process this work improved and the approach used to improve it.',
    technologies: ['Technology placeholder'],
    featured: false,
    visual: { tone: 'yellow' },
  },
  {
    id: 'software-engineering-placeholder',
    title: 'Software engineering project placeholder',
    category: 'Software engineering',
    description:
      'Placeholder: add what was built, the technical decisions, and Lindsey’s role.',
    technologies: ['Technology placeholder'],
    featured: false,
    visual: { tone: 'mint' },
  },
  {
    id: 'school-project-placeholder',
    title: 'School project placeholder',
    category: 'School project',
    description:
      'Placeholder: add the project context and the parts that demonstrate real technical work.',
    technologies: ['Technology placeholder'],
    featured: false,
    visual: { tone: 'blue' },
  },
  {
    id: 'personal-project-placeholder',
    title: 'Personal project placeholder',
    category: 'Personal project',
    description:
      'Placeholder: add the problem Lindsey chose to explore and what was learned in the process.',
    technologies: ['Technology placeholder'],
    featured: false,
    visual: { tone: 'coral' },
  },
]
