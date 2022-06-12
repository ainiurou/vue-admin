import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { title: '编辑器', icon: 'fas fa-pen-nib', show: true, auth:true },
  children: [
    {
      name: 'base',
      path: 'base',
      component: import('@/views/editor/base.vue'),
      meta: { title: 'base', icon: 'fas fa-pen-nib', show: true },
    },
    {
      name: 'markdown',
      path: 'markdown',
      component: import('@/views/editor/markdown.vue'),
      meta: { title: 'markdown', icon: 'fas fa-pen-nib', show: true },
    },
  ],
} as RouteRecordRaw
