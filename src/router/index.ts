import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const rootRoute: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    redirect: '/workbench',
  },
]

const builtinRoutes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/login.vue'),
  },

  {
    name: 'workbench',
    path: '/workbench',
    component: () => import('@/views/workbench/index.vue'),
  },
]

const dynamicRoutes: RouteRecordRaw[] = [
  {
    name: 'system-manage',
    path: '/system-manage',
    children: [
      {
        name: 'system-manage_user',
        path: '/system-manage/user',
        component: () => import('@/views/system-manage/user/index.vue'),
      },
      {
        name: 'system-manage_role',
        path: '/system-manage/role',
        component: () => import('@/views/system-manage/role/index.vue'),
      },
    ],
  },
]

const router = createRouter({ history: createWebHashHistory(import.meta.env.BASE_URL), routes: [...builtinRoutes, ...dynamicRoutes, ...rootRoute] })

export default router
