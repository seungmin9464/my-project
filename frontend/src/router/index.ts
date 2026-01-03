import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login }
  ]
})

export default router
