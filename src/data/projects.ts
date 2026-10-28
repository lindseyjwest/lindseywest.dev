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
  status?: string
  visual: {
    tone: ProjectVisualTone
    isPlaceholder?: boolean
    conceptLabel?: string
    imageSrc?: string
    imageAlt?: string
    // Optional image for the homepage preview.
    homeImageSrc?: string
    homeImageAlt?: string
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
      isPlaceholder: true,
      imageSrc: '/images/projects/rv-park-management-placeholder.svg',
      imageAlt: 'Placeholder for an RV Park Management System application screenshot',
    },
  },
  {
    id: 'us-accident-analytics-dashboard',
    status: 'In progress',
    title: 'U.S. Accident Analytics Dashboard',
    category: 'Analytics',
    description:
      'An interactive Streamlit dashboard that uses Python and pandas to clean and analyze millions of U.S. traffic accident records, with visualizations for accident severity, location, time, and weather trends.',
    technologies: ['Python', 'pandas', 'Streamlit'],
    githubUrl: 'https://github.com/lindseyjwest/us-accident-analytics',
    featured: false,
    visual: {
      tone: 'coral',
      conceptLabel: 'Dashboard concept · Sample data',
      imageSrc: '/images/projects/U.S. Accident Analytics Dashboard.png',
      imageAlt: 'Concept design for an accident analytics dashboard with sample charts and a U.S. map',
      homeImageSrc: '/images/projects/U.S. Accident Analytics Dashboard.png',
      homeImageAlt: 'Concept design for an accident analytics dashboard with sample charts and a U.S. map',
    },
  },
]
