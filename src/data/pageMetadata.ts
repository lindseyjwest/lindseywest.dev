export type PageMetadata = {
  path: string | null
  title: string
  description: string
  noIndex?: boolean
}

export const siteOrigin = 'https://lindseywest.dev'
export const socialImage = `${siteOrigin}/images/social-preview.png`
export const socialImageAlt = 'Lindsey West — data, analytics & automation. Professional portfolio.'

export const pages: PageMetadata[] = [
  {
    path: '/',
    title: 'Lindsey West | Data, Analytics & Automation',
    description: "Lindsey West's portfolio of healthcare data analytics, Snowflake pipelines, automation, and application development.",
  },
  {
    path: '/about',
    title: 'About | Lindsey West',
    description: 'Meet Lindsey West, a healthcare Data Analyst working with Snowflake, SQL, dbt, Domo, Python, and automation.',
  },
  {
    path: '/projects',
    title: 'Projects | Lindsey West',
    description: 'Explore Time Keeper, RV Park Management System, and StudyBuddy, with project details, tools, screenshots, and GitHub repositories.',
  },
  {
    path: '/resume',
    title: 'Resume | Lindsey West',
    description: "View and download Lindsey West's resume, including experience in data analytics, engineering, automation, and software development.",
  },
]

export const notFoundMetadata: PageMetadata = {
  path: null,
  title: 'Page not found | Lindsey West',
  description: "This page could not be found. Return to Lindsey West's portfolio to explore her work, experience, and resume.",
  noIndex: true,
}

export function getPageMetadata(pathname: string): PageMetadata {
  const path = pathname.replace(/\/+$/, '').toLowerCase() || '/'
  return pages.find(page => page.path === path) ?? notFoundMetadata
}

export function getMetaTags(page: PageMetadata) {
  const tags: { name?: string; property?: string; content: string }[] = [
    { name: 'description', content: page.description },
    { name: 'robots', content: page.noIndex ? 'noindex, follow' : 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Lindsey West' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:image', content: socialImage },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: socialImageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: socialImage },
    { name: 'twitter:image:alt', content: socialImageAlt },
  ]
  if (page.path) tags.push({ property: 'og:url', content: `${siteOrigin}${page.path}` })
  return tags
}
