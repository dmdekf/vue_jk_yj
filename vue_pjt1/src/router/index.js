import Vue from 'vue'
import VueRouter from 'vue-router'

import MovieView from '../views/MovieView'
import VideoView from '../views/VideoView'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/video',
    name: 'VideoView',
    component: VideoView
  },
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
