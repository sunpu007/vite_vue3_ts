import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import router from './router'

import NProgress from 'nprogress'

import getPageTitle from '@/utils/get-page-title'
import { getToken } from '@/utils/auth'

import { useUserStore } from './store/user'
let userStore: any = null
// import { permissionStore } from './store/permission'

NProgress.configure({ showSpinner: false })

const whiteList: string[] = ['/login', '/404', '/']

router.beforeEach(async(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (userStore === null) {
    userStore = useUserStore()
  }
  NProgress.start()

  document.title = getPageTitle(to.meta.title)
  next()
  // const hasToken = getToken()
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     // TODO 判断是否登录
  //     if (userStore.name) {
  //       next()
  //     } else {
  //       userStore.getInfo()
  //       // 获取用户信息
  //       // const { asyncRoutes } = await userStore.getInfo()
  //       // // 生成路由表
  //       // const acc = await permissionStore.generateRoutes(asyncRoutes)
  //       // router.addRoute
  //       // // 追加路由表

  //       next({ ...to, replace: true })
  //     }
  //   }
  // } else {
  //   if (whiteList.includes(to.path)) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(_ => {
  NProgress.done()
})
