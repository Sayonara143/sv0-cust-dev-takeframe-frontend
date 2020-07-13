import Vue from 'vue'
import Router from 'vue-router'

const vLogin = () => import('../components/service/v-login')
const vSignUp = () => import('../components/service/v-signup')
const vTicket = () => import('../components/content/v-ticket')
const vPhoto = () => import('../components/content/v-photo')
const vVideo = () => import('../components/content/v-video')
const vMain = () => import('../components/content/v-main')
const vProfile = () => import('../components/profile/v-profile')

const vPersonalData = () => import('../components/profile/v-personal-data')
const vHistoryVideo = () => import('../components/profile/v-history-video')
const vHistoryPhoto = () => import('../components/profile/v-history-photo')
const vSecurity = () => import('../components/profile/v-security')
const vBloggers = () => import('../components/profile/v-bloggers')

const vSignUpStepOne = () => import('../components/service/v-signUp-step-one')
const vSignUpStepTwo = () => import('../components/service/v-signUp-step-two')
const vSignUpStepThree = () => import('../components/service/v-signUp-step-three')

const vDescriptionTicket = () => import('../components/content/v-description-ticket')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'v-profile',
      component: vProfile,
      redirect: { name: 'v-personal-data' },
      children: [
        {
          name: 'v-personal-data',
          path: '/PersonalData',
          component: vPersonalData
        },
        {
          name: 'v-history-video',
          path: '/HistoryVideo',
          component: vHistoryVideo
        },
        {
          name: 'v-history-photo',
          path: '/HistoryPhoto',
          component: vHistoryPhoto
        },
        {
          name: 'v-security',
          path: '/Security',
          component: vSecurity
        },
        {
          name: 'v-bloggers',
          path: '/Bloggers',
          component: vBloggers
        }
      ]
    },
    {
      path: '/login',
      name: 'v-login',
      component: vLogin
    },
    {
      path: '/signUp',
      name: 'v-signUp',
      component: vSignUp,
      redirect: { name: 'v-signUp-step-one' },
      children: [
        {
          name: 'v-signUp-step-one',
          path: '/StepOne',
          component: vSignUpStepOne
        },
        {
          name: 'v-signUp-step-two',
          path: '/StepTwo',
          component: vSignUpStepTwo
        },
        {
          name: 'v-signUp-step-three',
          path: '/stepThree',
          component: vSignUpStepThree
        }
      ]
    },
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
    {
      path: '/descriptionTicket',
      name: 'v-descriptionTicket',
      component: vDescriptionTicket
    }
  ]
})
