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
    id: 'analytics-placeholder',
    title: 'Analytics project placeholder',
    category: 'Analytics',
    description:
      'Placeholder: add the question this work explored and the useful outcome it supported.',
    technologies: ['Technology placeholder'],
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
