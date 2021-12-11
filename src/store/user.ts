import { logout } from '@/api/user'
import { getToken, removeToken } from '@/utils/auth'
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: getToken(),
    name: '',
    avatar: ''
  }),
  actions: {
    resetState() {
      this.token = ''
      this.name = ''
      this.avatar = ''
    },
    
    logout() {
      return new Promise<void>((resolve, reject) => {
        logout().then(() => {
          removeToken() // must remove  token  first
          // resetRouter()
          this.resetState()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    
    resetToken() {
      return new Promise<void>(resolve => {
        removeToken()
        this.resetState()
        resolve()
      })
    }
  }
})
