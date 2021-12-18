import { getInfo, login, logout } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
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

    // user login
    login(userInfo: { username: string; password: string }) {
      const { username, password } = userInfo
      return new Promise<void>((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const { data } = response
          this.token = data.token
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // get user info
    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo(this.token).then(response => {
          const { data } = response

          if (!data) {
            return reject('Verification failed, please Login again.')
          }

          const { username, avatarUrl } = data
          
          this.name = username
          this.avatar = avatarUrl
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
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

// export const userStore = useUserStore()
