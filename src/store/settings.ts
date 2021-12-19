import { defineStore } from 'pinia'

// import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo, supportPinyinSearch } = defaultSettings

console.log('defaultSettings====>', defaultSettings)

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    // theme: variables.theme,
    showSettings,
    tagsView,
    fixedHeader,
    sidebarLogo,
    supportPinyinSearch
  }),
  actions: {
    // setTheme(theme: any) {
    //   this.theme = theme
    // },
    setShowSettings(showSettings: boolean) {
      this.showSettings = showSettings
    },
    setTagsView(tagsView: boolean) {
      this.tagsView = tagsView
    },
    setFixedHeader(fixedHeader: boolean) {
      this.fixedHeader = fixedHeader
    },
    setSidebarLogo(sidebarLogo: boolean) {
      this.sidebarLogo = sidebarLogo
    },
    setSupportPinyinSearch(supportPinyinSearch: boolean) {
      this.supportPinyinSearch = supportPinyinSearch
    }
  }
})
