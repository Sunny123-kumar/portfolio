import { useEffect, useState } from 'react'

/**
 * Tracks which page section is in view while scrolling.
 * Uses a top offset so the fixed navbar doesn't skew the active link.
 */
export function useActiveSection(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const idsKey = sectionIds.join('|')

  useEffect(() => {
    const ids = idsKey.split('|').filter(Boolean)
    if (ids.length === 0) return undefined

    const updateActive = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Near page bottom → highlight last nav section (usually Contact)
      if (scrollBottom >= docHeight - 80) {
        setActiveId(ids[ids.length - 1])
        return
      }

      const marker = window.scrollY + offset
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= marker) {
          current = id
        }
      }

      setActiveId(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [idsKey, offset])

  return activeId
}
