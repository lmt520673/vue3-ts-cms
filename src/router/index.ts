import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.path.startsWith('/main') && !localCache.getCache(LOGIN_TOKEN)) {
    return '/login'
  }
  if (to.path === '/main') {
    return '/main/analysis/dashboard'
  }
})

export default router
