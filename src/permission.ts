import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import router from './router'

import NProgress from 'nprogress'

import getPageTitle from '@/utils/get-page-title'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList: string[] = ['/login', '/404']

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // TODO 判断是否登录
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(_ => {
  NProgress.done()
})
