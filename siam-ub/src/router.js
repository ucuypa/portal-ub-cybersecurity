import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './MainPage.vue' 
import LoginPage from './loginPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/auth-portal', 
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router