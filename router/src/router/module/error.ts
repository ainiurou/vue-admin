import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/admin.vue'),
  meta: { title: '错误页面', icon: 'fas fa-bug', show: true, auth:true },
  children: [
    {
      name: '404',
      path: '404',
      component: () => import('@/views/errors/404.vue'),
      meta: { title: '404页面', icon: '', show: true },
    },
    {
      name: '403',
      path: '403',
      component: () => import('@/views/errors/403.vue'),
      meta: { title: '403页面', icon: '', show: true },
    },
    {
      name: '500',
      path: '500',
      component: () => import('@/views/errors/500.vue'),
      meta: { title: '500页面', icon: '', show: false },
    },
  ],
} as RouteRecordRaw
