import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vite Vue Ts'

export default function getPageTitle(pageTitle: unknown) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
