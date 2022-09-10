import { createRouter, createWebHistory } from 'vue-router'
import GridView from '../views/GridView.vue'
import LoginView from '../views/LoginView'
import UploadView from '../views/UploadView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: GridView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
