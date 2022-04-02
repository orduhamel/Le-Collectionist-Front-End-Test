import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FilmsView from '@/views/FilmsView.vue'
import FilmsActionView from '@/views/FilmsActionView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/films",
    name: "films",
    component: FilmsView,
  },
  {
    path: "/films/action",
    name: "action",
    component: FilmsActionView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
