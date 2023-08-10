import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Menu', component: () => import('@/views/MenuPage.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginPage.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
