import { getToken, removeToken } from '@/utils/auth'
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'user',
  state: () => ({
    token: getToken()
  }),
  actions: {
    logout() {
      return new Promise((resolve, reject) => {
        // 调用推出登录API
      })
    },
    
    resetToken() {
      return new Promise<void>(resolve => {
        removeToken()
        this.token = ''
        resolve()
      })
    }
  }
})
