import Vue from 'vue'
import Router from 'vue-router'


const vTicket = () => import('../components/content/v-ticket')
const vPhoto = () => import('../components/content/v-photo')
const vVideo = () => import('../components/content/v-video')
const vMain = () => import('../components/content/v-main')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ticket',
      name: 'v-ticket',
      component: vTicket
    },
    {
      path: '/photo',
      name: 'v-photo',
      component: vPhoto
    },
    {
      path: '/video',
      name: 'v-video',
      component: vVideo
    },
    {
      path: '/',
      name: 'v-main',
      component: vMain
    },
  ]
})
