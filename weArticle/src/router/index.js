import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Animals from '../views/Animals.vue'
import Travel from '../views/Travel.vue'
import Cook from '../views/Cook.vue'
import Health from '../views/Health.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/animals', component: Animals },
  { path: '/travel', component: Travel },
  { path: '/cook', component: Cook },
  { path: '/health', component: Health }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
