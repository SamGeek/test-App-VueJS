import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WelcomeHomeVue from './components/WelcomeHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeHomeVue,
      props: true
    }
  ]
})
