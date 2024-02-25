import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'kpu',
      component: () => import('../views/Kpu.vue')
    },
    {
      path: '/kawalpemilu',
      name: 'kawalpemilu',
      component: () => import('../views/KawalPemilu.vue')
    },
    {
      path: '/kawalamin',
      name: 'kawalamin',
      component: () => import('../views/KawalAmin.vue')
    },
  ]
})

export default router
