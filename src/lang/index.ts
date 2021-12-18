import { createI18n } from 'vue-i18n'

import Cookies from 'js-cookie'

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-CN'

import enLocale from './en'
import zhLocale from './zh'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

export function getLanguage(): string {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) {
    return chooseLanguage
  }

  const language: string = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales: string[] = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  return 'zh-CN'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  global: true,
  locale: 'zh-CN',
  messages
})

export default i18n
