import { defineStore } from 'pinia'

import Layout from '@/layout/index.vue'

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 */
 export function filterAsyncRoutes(routers: any[]) {
  const res = []

  routers.forEach(route => {
    const temp = { ...route }
    if (temp.component) {
      if (temp.component === 'layout') {
        temp.component = Layout
        temp.path = `/${temp.path}`
      } else {
        temp.component = loadView(temp.component)
      }
    }

    if (temp.children) {
      temp.children = filterAsyncRoutes(temp.children)
    }
    res.push(temp)
  })
  res.push({ path: '*', redirect: '/404', hidden: true })
  return res
}

const loadView = (view: string) => {
  return resolve => require([`@/views/${view}`], resolve)
}

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    routes: [],
    addRoutes: []
  }),
  actions: {
    setRoutes(routes: any) {
      this.addRoutes = routes
      this.routes = routes
    },
    generateRoutes(asyncRoutes: any[]) {
      return new Promise(resolve => {
        const accessedRoutes = filterAsyncRoutes(asyncRoutes)
        this.setRoutes(accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
})

export const permissionStore = usePermissionStore()
