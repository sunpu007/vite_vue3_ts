import { useI18n } from 'vue-i18n'
const i18n = useI18n()

// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title: string) {
  const hasKey = i18n.te('route.' + title)

  if (hasKey) {
    const translatedTitle = i18n.t('route.' + title)

    return translatedTitle
  }
  return title
}
