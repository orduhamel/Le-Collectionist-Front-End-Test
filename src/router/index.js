import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/films",
    name: "films",
    component: () => import(/* webpackChunkName: "FilmListView" */ "@/views/FilmListView.vue")
  },
  {
    path: "/films/:genre",
    name: "FilmListView",
    component: () => import(/* webpackChunkName: "FilmListView" */ "@/views/FilmListView.vue")
  },
  {
    path: "/films/favorites",
    name: "FilmListFavoriteView",
    component: () => import(/* webpackChunkName: "FilmListFavoriteView" */ "@/views/FilmListFavoriteView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
