import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMetaTags, getPageMetadata, siteOrigin } from '../data/pageMetadata'

export function PageMetadata() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const page = getPageMetadata(pathname)
    document.title = page.title

    for (const tag of getMetaTags(page)) {
      const attribute = tag.name ? 'name' : 'property'
      const key = tag.name ?? tag.property!
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.content = tag.content
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (page.path) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = `${siteOrigin}${page.path}`
    } else {
      canonical?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [pathname])

  return null
}
