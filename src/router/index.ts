import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: 'main',
      component: () => import('@/views/Main.vue')
    }
  ]
})

export default router
