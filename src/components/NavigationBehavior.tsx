import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

type FocusTarget = { id: string } | { href: string; index: number }
type Entry = { x: number; y: number; focus?: FocusTarget }

function focusElement(element: HTMLElement | null) {
  if (!element) return
  if (!element.matches('a, button, input, select, textarea, summary, [tabindex]')) {
    element.tabIndex = -1
  }
  element.focus({ preventScroll: true })
}

export function NavigationBehavior() {
  const location = useLocation()
  const navigationType = useNavigationType()
  // Native fragment entries can share the router's default history key.
  const entryKey = `${location.key}:${location.pathname}${location.search}${location.hash}`
  const entries = useRef(new Map<string, Entry>())
  const activeKey = useRef(entryKey)
  const previousLocation = useRef<typeof location | null>(null)

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    const rememberScroll = () => {
      const previous = entries.current.get(activeKey.current)
      entries.current.set(activeKey.current, { ...previous, x: window.scrollX, y: window.scrollY })
    }
    const rememberFocus = () => {
      const element = document.activeElement
      let focus: FocusTarget | undefined
      if (element instanceof HTMLElement && element.id) focus = { id: element.id }
      else if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute('href')
        if (href) {
          const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))
            .filter(link => link.getAttribute('href') === href)
          focus = { href, index: links.indexOf(element) }
        }
      }
      if (focus) {
        const position = entries.current.get(activeKey.current) ?? { x: window.scrollX, y: window.scrollY }
        entries.current.set(activeKey.current, { ...position, focus })
      }
    }

    window.addEventListener('scroll', rememberScroll, { passive: true })
    document.addEventListener('focusin', rememberFocus)
    return () => {
      window.removeEventListener('scroll', rememberScroll)
      document.removeEventListener('focusin', rememberFocus)
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const previous = previousLocation.current
    if (previous?.key === location.key && previous.hash === location.hash) return
    previousLocation.current = location
    activeKey.current = entryKey

    const settleNavigation = (action: () => void) => {
      action()
      // Let native fragment navigation finish before restoring scroll and focus.
      window.requestAnimationFrame(() => {
        if (activeKey.current === entryKey && document.getElementById('main-content')) action()
      })
    }

    const saved = entries.current.get(entryKey)
    if (previous && navigationType === 'POP' && saved) {
      const target = saved.focus
      const element = target && ('id' in target
        ? document.getElementById(target.id)
        : Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))
          .filter(link => link.getAttribute('href') === target.href)[target.index])
      settleNavigation(() => {
        window.scrollTo({ left: saved.x, top: saved.y, behavior: 'instant' })
        focusElement(element || document.getElementById('main-content'))
      })
      return
    }

    let anchor: HTMLElement | null = null
    try {
      if (location.hash) anchor = document.getElementById(decodeURIComponent(location.hash.slice(1)))
    } catch { /* An invalid fragment falls back to the page introduction. */ }

    if (anchor) {
      const target = anchor
      settleNavigation(() => {
        target.scrollIntoView({ block: 'start', behavior: 'instant' })
        focusElement(target.querySelector<HTMLElement>('h2, h3') ?? target)
      })
    } else if (previous) {
      window.scrollTo({ left: 0, top: 0, behavior: 'instant' })
      focusElement(document.querySelector<HTMLElement>('main h1'))
    }
    entries.current.set(entryKey, { ...entries.current.get(entryKey), x: window.scrollX, y: window.scrollY })
  }, [location, navigationType, entryKey])

  return null
}
