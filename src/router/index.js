import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/components/notFound.vue'
import OpinionesView from '@/views/OpinionesView.vue'
import Likes from "@/components/Likes.vue";
 
const routes = [
  {
    //ruta
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component : NotFound
  },
  {
    path: '/likes/:nombre',
    name:'likes',
    component: Likes,
    props: true

  },
  {
    //ruta dinmica
    path:'/opiniones/:nombre',
    name: 'opiniones',
    component: OpinionesView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
