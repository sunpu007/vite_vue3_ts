import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
]

const generateRouter = () => createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

const router = generateRouter()

// export function resetRouter() {
//   const newRouter = generateRouter()
//   router.matcher = newRouter.matcher
// }

export default router

