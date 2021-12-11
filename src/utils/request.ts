import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { ElMessage, ElMessageBox } from 'element-plus'

import { userStore } from '@/store/user'

import { getToken } from './auth'

export interface ResType<T> {
  code: number
  data?: T
  message: string
}

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API?.toString(),
  timeout: 5000,
})

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig<any>): AxiosRequestConfig<any> => {
    if (userStore.token) {
      // @ts-ignore
      config.headers.token = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 相应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res: ResType<any> = response.data
    if (res.code !== 0) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }

    if (res.code === -1) {
      ElMessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        confirmButtonText: 'Re-Login',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(_ => {
        // 清除token
        userStore.resetToken().then(_ => {
          location.reload()
        })
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } 
    return res
  },
  error => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
