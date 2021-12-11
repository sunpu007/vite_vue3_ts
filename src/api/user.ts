import request, { ResType } from '@/utils/request'

export function login(data: object) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token: string) {
  return request({
    url: '/login/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
