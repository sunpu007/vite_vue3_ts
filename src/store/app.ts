import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

import { getLanguage } from '@/lang'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Number(Cookies.get('sidebarStatus')) : true,
      withoutAnimation: false
    },
    device: 'desktop',
    language: getLanguage(),
    size: Cookies.get('size') || 'medium'
  }),
  actions: {
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened
      this.sidebar.withoutAnimation = false
      if (this.sidebar.opened) {
        Cookies.set('sidebarStatus', '1')
      } else {
        Cookies.set('sidebarStatus', '0')
      }
    },
    closeSideBar({ withoutAnimation }: { withoutAnimation: boolean }) {
      Cookies.set('sidebarStatus', '0')
      this.sidebar.opened = false
      this.sidebar.withoutAnimation = withoutAnimation
    },
    toggleDevice(device: string) {
      this.device = device
    },
    setLanguage(language: string) {
      this.language = language
      Cookies.set('language', language)
    },
    setSize(size: string) {
      this.size = size
    }
  }
})
