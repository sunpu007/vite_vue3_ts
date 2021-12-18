import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

import { getLanguage } from '@/lang'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    language: getLanguage()
  }),
  actions: {
    setLanguage(language: string) {
      this.language = language
      Cookies.set('language', language)
    }
  }
})
