import request, { ResType } from '@/utils/request'
import { AxiosPromise } from 'axios'

export function login(data: object): AxiosPromise<ResType<any>> {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token: string): AxiosPromise<ResType<any>> {
  return request({
    url: '/login/info',
    method: 'get',
    params: { token }
  })
}

export function logout(): AxiosPromise<ResType<any>> {
  return request({
    url: '/logout',
    method: 'post'
  })
}
