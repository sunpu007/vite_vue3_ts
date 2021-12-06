import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken(): string {
  return Cookies.get(TokenKey) || ''
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken(): void {
  return Cookies.remove(TokenKey)
}
